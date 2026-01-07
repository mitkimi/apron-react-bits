import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from 'react';
import './LogoParticleGather.scss';
// 将字符串值转换为像素值
const parseValue = (value, dimension) => {
    if (typeof value === 'number') {
        return value;
    }
    const str = String(value).trim();
    // 处理百分比
    if (str.endsWith('%')) {
        const percent = parseFloat(str);
        return ((dimension === 'width' ? window.innerWidth : window.innerHeight) *
            (percent / 100));
    }
    // 处理 vh/vw（支持负数，如 '-35vh'）
    if (str.endsWith('vh')) {
        const numValue = parseFloat(str); // 这会正确解析负数，如 '-35vh' -> -35
        return window.innerHeight * (numValue / 100);
    }
    if (str.endsWith('vw')) {
        const numValue = parseFloat(str);
        return window.innerWidth * (numValue / 100);
    }
    // 处理 px 或其他数字（支持负数）
    return parseFloat(str) || 0;
};
const LogoParticleGather = ({ src, gap = 6, minSize = 2, maxSize = 6, color = '#1677ff', duration = 600, className = '', alphaThreshold = 128, onParticleLoad, gatherPosition, scale = 0.3, // 默认缩放为视口高度的 30%
 }) => {
    const [particles, setParticles] = useState([]);
    const [active, setActive] = useState(false);
    const containerRef = useRef(null);
    const dimensionsRef = useRef({ width: 0, height: 0 });
    const imageSizeRef = useRef({
        width: 0,
        height: 0,
    });
    const scaleRef = useRef({
        scaleX: 1,
        scaleY: 1,
        displayWidth: 0,
        displayHeight: 0,
    });
    // Update dimensions when container size changes
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                dimensionsRef.current = {
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                };
                // 重新计算缩放比例（当窗口大小变化时）
                if (imageSizeRef.current.width > 0 && imageSizeRef.current.height > 0) {
                    const targetHeight = window.innerHeight * scale;
                    const aspectRatio = imageSizeRef.current.width / imageSizeRef.current.height;
                    const displayHeight = targetHeight;
                    const displayWidth = targetHeight * aspectRatio;
                    scaleRef.current = {
                        scaleX: displayWidth / imageSizeRef.current.width,
                        scaleY: displayHeight / imageSizeRef.current.height,
                        displayWidth,
                        displayHeight,
                    };
                }
            }
        };
        // Update immediately
        updateDimensions();
        // Update on window resize
        window.addEventListener('resize', updateDimensions);
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [scale]);
    const processImage = useCallback(() => {
        const img = new Image();
        img.src = src;
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            const imgWidth = img.naturalWidth;
            const imgHeight = img.naturalHeight;
            // 保存图片原始尺寸
            imageSizeRef.current = { width: imgWidth, height: imgHeight };
            // 计算缩放后的显示尺寸（基于视口高度的 scale 比例）
            const targetHeight = window.innerHeight * scale;
            const aspectRatio = imgWidth / imgHeight;
            const displayHeight = targetHeight;
            const displayWidth = targetHeight * aspectRatio;
            // 计算缩放比例
            const scaleX = displayWidth / imgWidth;
            const scaleY = displayHeight / imgHeight;
            // 保存缩放信息
            scaleRef.current = {
                scaleX,
                scaleY,
                displayWidth,
                displayHeight,
            };
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = imgWidth;
            canvas.height = imgHeight;
            ctx.clearRect(0, 0, imgWidth, imgHeight);
            ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
            const imageData = ctx.getImageData(0, 0, imgWidth, imgHeight).data;
            const points = [];
            // 计算聚集中心位置（用于展开时的散开中心）
            let centerX = window.innerWidth / 2;
            let centerY = window.innerHeight / 2;
            if (gatherPosition) {
                if (typeof gatherPosition === 'object') {
                    centerX = parseValue(gatherPosition.x, 'width');
                    centerY = parseValue(gatherPosition.y, 'height');
                }
                else {
                    // 预设位置的中心点
                    switch (gatherPosition) {
                        case 'center':
                            centerX = window.innerWidth / 2;
                            centerY = window.innerHeight / 2;
                            break;
                        case 'top-left':
                            centerX = 0;
                            centerY = 0;
                            break;
                        case 'top-right':
                            centerX = window.innerWidth;
                            centerY = 0;
                            break;
                        case 'bottom-left':
                            centerX = 0;
                            centerY = window.innerHeight;
                            break;
                        case 'bottom-right':
                            centerX = window.innerWidth;
                            centerY = window.innerHeight;
                            break;
                        case 'left-center':
                            centerX = window.innerHeight / 2;
                            centerY = window.innerHeight / 2;
                            break;
                        case 'right-center':
                            centerX = window.innerWidth - window.innerHeight / 2;
                            centerY = window.innerHeight / 2;
                            break;
                        case 'top-center':
                            centerX = window.innerWidth / 2;
                            centerY = 0;
                            break;
                        case 'bottom-center':
                            centerX = window.innerWidth / 2;
                            centerY = window.innerHeight;
                            break;
                        default:
                            centerX = window.innerWidth / 2;
                            centerY = window.innerHeight / 2;
                    }
                }
            }
            // 用于检查点是否重叠的辅助函数
            const checkOverlap = (x, y, size, existingPoints) => {
                for (const point of existingPoints) {
                    const distance = Math.sqrt(Math.pow(x - point.originX, 2) + Math.pow(y - point.originY, 2));
                    // 考虑两个粒子的大小，确保两个粒子的边缘不重叠
                    // 两个粒子的中心距离至少是它们半径之和
                    const requiredDistance = size / 2 + point.size / 2 + 2; // 额外2px间距
                    if (distance < requiredDistance) {
                        return true; // 重叠
                    }
                }
                return false; // 不重叠
            };
            const maxAttempts = 50; // 减少尝试次数，如果找不到不重叠的位置就接受轻微重叠
            // 在整个屏幕范围内均匀随机分布，确保粒子分布到所有象限
            // 不依赖聚集中心位置，直接在整个屏幕范围内随机分布
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            // 调试信息：记录中心位置
            // if (process.env.NODE_ENV === 'development') {
            //   console.log('Spread center:', {
            //     centerX,
            //     centerY,
            //     screenWidth,
            //     screenHeight,
            //   });
            // }
            // 先收集所有需要生成的粒子点
            const particlePoints = [];
            for (let y = 0; y < imgHeight; y += gap) {
                for (let x = 0; x < imgWidth; x += gap) {
                    const idx = (y * imgWidth + x) * 4;
                    const alpha = imageData[idx + 3];
                    if (alpha > alphaThreshold) {
                        particlePoints.push({ x, y });
                    }
                }
            }
            // 打乱顺序，确保随机分布
            for (let i = particlePoints.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [particlePoints[i], particlePoints[j]] = [
                    particlePoints[j],
                    particlePoints[i],
                ];
            }
            // 为每个粒子生成随机位置
            for (const { x, y } of particlePoints) {
                // 在整个屏幕范围内随机分布
                // 先为粒子生成随机大小（用于重叠检测）
                const particleSize = Math.random() * (maxSize - minSize) + minSize;
                let originX;
                let originY;
                let attempts = 0;
                // 尝试生成不重叠的位置
                let foundPosition = false;
                for (attempts = 0; attempts < maxAttempts; attempts++) {
                    // 在整个屏幕范围内完全随机分布
                    // 确保粒子能分布到所有象限（左上、右上、左下、右下）
                    // 使用均匀随机分布，确保每个区域都有粒子
                    // 直接生成在屏幕范围内的随机坐标
                    const margin = particleSize / 2;
                    originX = margin + Math.random() * (screenWidth - margin * 2);
                    originY = margin + Math.random() * (screenHeight - margin * 2);
                    // 确保坐标在有效范围内（双重检查）
                    originX = Math.max(margin, Math.min(screenWidth - margin, originX));
                    originY = Math.max(margin, Math.min(screenHeight - margin, originY));
                    // 检查是否重叠
                    if (!checkOverlap(originX, originY, particleSize, points)) {
                        foundPosition = true;
                        break;
                    }
                }
                // 如果找不到不重叠的位置，使用最后一次尝试的位置（允许轻微重叠）
                if (!foundPosition) {
                    const margin = particleSize / 2;
                    originX = margin + Math.random() * (screenWidth - margin * 2);
                    originY = margin + Math.random() * (screenHeight - margin * 2);
                    originX = Math.max(margin, Math.min(screenWidth - margin, originX));
                    originY = Math.max(margin, Math.min(screenHeight - margin, originY));
                }
                // 如果尝试次数过多，仍然添加点（避免无限循环）
                // 调试：记录前几个粒子的位置
                // if (process.env.NODE_ENV === 'development' && points.length < 5) {
                //   console.log(`Particle ${points.length} origin:`, {
                //     originX,
                //     originY,
                //     particleSize,
                //     screenWidth,
                //     screenHeight,
                //   });
                // }
                points.push({
                    x,
                    y,
                    originX,
                    originY,
                    size: particleSize,
                });
            }
            setParticles(points);
            // 调用粒子加载完成回调
            if (onParticleLoad) {
                onParticleLoad(points.length);
            }
        };
    }, [src, gap, alphaThreshold, onParticleLoad, scale, gatherPosition]);
    useEffect(() => {
        processImage();
    }, [processImage]);
    return (_jsx("div", { ref: containerRef, className: `logo-particle-gather-container ${className}`, onMouseEnter: () => setActive(true), onMouseLeave: () => setActive(false), children: particles.map((p, i) => {
            // Calculate random delay for each particle
            const randomDelay = Math.random() * (duration * 0.3); // 0-30% of duration in ms
            // 使用粒子保存的大小（在生成时已确定）
            const particleSize = p.size;
            // Generate random opacity between 5% and 30%
            const opacity = Math.random() * (0.3 - 0.05) + 0.05;
            // Calculate position adjustments based on gatherPosition or className
            let positionAdjustmentX = 0;
            let positionAdjustmentY = 0;
            if (gatherPosition) {
                // 使用 gatherPosition 属性（优先级更高）
                let targetX;
                let targetY;
                if (typeof gatherPosition === 'object') {
                    // 自定义坐标
                    targetX = parseValue(gatherPosition.x, 'width');
                    targetY = parseValue(gatherPosition.y, 'height');
                }
                else {
                    // 预设位置
                    switch (gatherPosition) {
                        case 'center':
                            targetX = window.innerWidth / 2;
                            targetY = window.innerHeight / 2;
                            break;
                        case 'top-left':
                            targetX = 0;
                            targetY = 0;
                            break;
                        case 'top-right':
                            targetX = window.innerWidth;
                            targetY = 0;
                            break;
                        case 'bottom-left':
                            targetX = 0;
                            targetY = window.innerHeight;
                            break;
                        case 'bottom-right':
                            targetX = window.innerWidth;
                            targetY = window.innerHeight;
                            break;
                        case 'left-center':
                            targetX = window.innerHeight / 2; // 左半边中心 = 50vh
                            targetY = window.innerHeight / 2; // 纵向中心 = 50vh
                            break;
                        case 'right-center':
                            targetX = window.innerWidth - window.innerHeight / 2; // 右半边中心
                            targetY = window.innerHeight / 2; // 纵向中心
                            break;
                        case 'top-center':
                            targetX = window.innerWidth / 2;
                            targetY = 0;
                            break;
                        case 'bottom-center':
                            targetX = window.innerWidth / 2;
                            targetY = window.innerHeight;
                            break;
                        default:
                            targetX = window.innerWidth / 2;
                            targetY = window.innerHeight / 2;
                    }
                }
                // 计算偏移量：目标位置 - 缩放后的图片中心坐标
                // p.x 和 p.y 是图片的原始像素坐标（从 0 到 imgWidth/imgHeight）
                // 需要先按缩放比例转换为屏幕坐标，然后计算偏移量
                // 缩放后的图片中心坐标 = (displayWidth / 2, displayHeight / 2)
                const displayCenterX = scaleRef.current.displayWidth / 2;
                const displayCenterY = scaleRef.current.displayHeight / 2;
                // 计算偏移量：目标位置 - 缩放后的图片中心
                positionAdjustmentX = targetX - displayCenterX;
                positionAdjustmentY = targetY - displayCenterY;
            }
            else {
                // 兼容旧的 className 方式
                if (className.includes('gathered-top-left')) {
                    positionAdjustmentX = -dimensionsRef.current.width / 2;
                    positionAdjustmentY = -dimensionsRef.current.height / 2;
                }
                else if (className.includes('gathered-top-right')) {
                    positionAdjustmentX = dimensionsRef.current.width / 2;
                    positionAdjustmentY = -dimensionsRef.current.height / 2;
                }
                else if (className.includes('gathered-bottom-left')) {
                    positionAdjustmentX = -dimensionsRef.current.width / 2;
                    positionAdjustmentY = dimensionsRef.current.height / 2;
                }
                else if (className.includes('gathered-bottom-right')) {
                    positionAdjustmentX = dimensionsRef.current.width / 2;
                    positionAdjustmentY = dimensionsRef.current.height / 2;
                }
                else if (className.includes('gathered-left-center')) {
                    const leftCenterX = window.innerHeight / 2;
                    const screenCenterY = window.innerHeight / 2;
                    positionAdjustmentX = leftCenterX - imageSizeRef.current.width / 2;
                    positionAdjustmentY =
                        screenCenterY - imageSizeRef.current.height / 2;
                }
            }
            // Calculate final positions
            // 如果聚集状态，需要将图片的像素坐标按缩放比例转换为屏幕坐标，然后加上偏移量
            // 如果非聚集状态，使用原始随机位置（已确保不重叠）
            // 聚集时的位置基于图片像素坐标，如果 gap 足够大，聚集时也不会重叠
            const finalX = active
                ? p.x * scaleRef.current.scaleX + positionAdjustmentX
                : p.originX;
            const finalY = active
                ? p.y * scaleRef.current.scaleY + positionAdjustmentY
                : p.originY;
            return (_jsx("span", { className: `logo-particle ${active ? 'gathered' : ''}`, style: {
                    width: particleSize,
                    height: particleSize,
                    backgroundColor: color,
                    opacity: opacity,
                    transform: `translate(${finalX}px, ${finalY}px)`,
                    transitionDuration: `${duration}ms`,
                    transitionDelay: `${randomDelay}ms`,
                } }, i));
        }) }));
};
export default LogoParticleGather;
