import React, { useCallback, useEffect, useRef, useState } from 'react';
import './LogoParticleGather.scss';

interface ContainerDimensions {
  width: number;
  height: number;
}

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number; // 粒子大小，用于重叠检测
}

export type GatherPosition =
  | { x: number | string; y: number | string } // 自定义坐标，支持数字(px)或字符串(如 '50vh', '50%')
  | 'center' // 屏幕中心
  | 'top-left' // 左上角
  | 'top-right' // 右上角
  | 'bottom-left' // 左下角
  | 'bottom-right' // 右下角
  | 'left-center' // 左半边纵向居中
  | 'right-center' // 右半边纵向居中
  | 'top-center' // 顶部横向居中
  | 'bottom-center'; // 底部横向居中

export type GatherState = boolean | 'auto';

export interface LogoParticleGatherProps {
  src: string;
  gap?: number; // 粒子采样密度
  minSize?: number; // 粒子最小大小
  maxSize?: number; // 粒子最大大小
  color?: string; // 粒子颜色
  duration?: number; // 动画时长
  className?: string;
  alphaThreshold?: number; // 透明度阈值
  onParticleLoad?: (count: number) => void; // 粒子加载完成回调
  gatherPosition?: GatherPosition; // 聚集位置，优先级高于 className
  scale?: number; // 图片缩放比例，默认 0.3（30% 视口高度）
  delayInit?: number; // 初始化延迟时间，单位毫秒，默认为0
  gather?: GatherState; // 聚集状态：'auto'为自动，boolean为固定状态
}

// 将字符串值转换为像素值
const parseValue = (
  value: number | string,
  dimension: 'width' | 'height',
): number => {
  if (typeof value === 'number') {
    return value;
  }

  const str = String(value).trim();

  // 处理百分比
  if (str.endsWith('%')) {
    const percent = parseFloat(str);
    return (
      (dimension === 'width' ? window.innerWidth : window.innerHeight) *
      (percent / 100)
    );
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

const LogoParticleGather: React.FC<LogoParticleGatherProps> = ({
  src,
  gap = 6,
  minSize = 2,
  maxSize = 6,
  color = '#1677ff',
  duration = 600,
  className = '',
  alphaThreshold = 128,
  onParticleLoad,
  gatherPosition,
  scale = 0.3, // 默认缩放为视口高度的 30%
  delayInit = 0, // 默认无延迟
  gather = 'auto', // 默认为自动模式
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [active, setActiveInternal] = useState<boolean>(gather === 'auto' ? false : !gather); // 默认为聚集状态（active=false），除非gather设置为false
  const [leaveTimeoutId, setLeaveTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const autoSwitchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // 无论delayInit值如何，都设置定时器来更新初始化状态
  // 如果delayInit为0，也会立即触发状态更新
  // 使用独立的effect处理初始化逻辑，避免processImage的循环依赖
  useEffect(() => {
    if (delayInit > 0) {
      // 如果有延迟初始化，则延迟执行
      const timer = setTimeout(() => {
        setIsInitialized(true);
      }, delayInit);
      return () => clearTimeout(timer);
    } else {
      setIsInitialized(true);
    }
  }, [delayInit]); // 只依赖delayInit

  // 当isInitialized变为true且图像源变化时，处理图像
  useEffect(() => {
    if (isInitialized) {
      processImage();
    }
  }, [isInitialized, src, gap, alphaThreshold, scale, gatherPosition]); // 依赖isInitialized和其他影响图像处理的参数
  
  // 根据gather属性控制最终的active状态
  const effectiveActive = React.useMemo(() => {
    if (typeof gather === 'boolean') {
      // 当gather为boolean时，直接使用该值（false=聚集，true=散开）
      // 注意：这里的逻辑是反向的，因为active=true时粒子散开，active=false时粒子聚集
      return !gather; // gather=true(聚集)时，active=false；gather=false(散开)时，active=true
    }
    // 当gather为'auto'时，使用内部状态
    return active;
  }, [gather, active]);
  
  // 当gather属性改变时，更新内部active状态（仅在auto模式下）
  React.useEffect(() => {
    if (gather === 'auto') {
      // 在auto模式下，允许通过setActiveInternal来控制状态
      // 设置初始状态为聚集（active=false）
      setActiveInternal(false);
    } else if (typeof gather === 'boolean') {
      // 当从auto模式切换到boolean模式时，更新内部状态
      setActiveInternal(!gather);
    }
  }, [gather]);
  
  // auto模式下每8秒自动切换gather状态
  useEffect(() => {
    if (gather === 'auto') {
      // 初始状态为聚集，然后开始自动切换
      setActiveInternal(false);
      
      const startAutoSwitch = () => {
        const switchGatherState = () => {
          setActiveInternal(prev => !prev); // 切换聚集/散开状态
        };
        
        // 每8秒切换一次状态
        return setInterval(switchGatherState, 8000);
      };
      
      let intervalId: NodeJS.Timeout | null = startAutoSwitch();
      
      // 清理函数
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
        if (autoSwitchTimeoutRef.current) {
          clearTimeout(autoSwitchTimeoutRef.current);
          autoSwitchTimeoutRef.current = null;
        }
      };
    }
    
    // 如果不是auto模式，则不需要自动切换
    return () => {
      if (autoSwitchTimeoutRef.current) {
        clearTimeout(autoSwitchTimeoutRef.current);
        autoSwitchTimeoutRef.current = null;
      }
    };
  }, [gather]);
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensionsRef = useRef<ContainerDimensions>({ width: 0, height: 0 });
  const imageSizeRef = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const scaleRef = useRef<{
    scaleX: number;
    scaleY: number;
    displayWidth: number;
    displayHeight: number;
  }>({
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
          const aspectRatio =
            imageSizeRef.current.width / imageSizeRef.current.height;
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
      // 获取容器的实际尺寸
      const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
      const containerHeight = containerRef.current?.offsetHeight || window.innerHeight;
      
      // 更新 dimensionsRef
      dimensionsRef.current = {
        width: containerWidth,
        height: containerHeight,
      };

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
      const ctx = canvas.getContext('2d')!;
      canvas.width = imgWidth;
      canvas.height = imgHeight;

      ctx.clearRect(0, 0, imgWidth, imgHeight);
      ctx.drawImage(img, 0, 0, imgWidth, imgHeight);

      const imageData = ctx.getImageData(0, 0, imgWidth, imgHeight).data;
      const points: Particle[] = [];

      // 用于检查点是否重叠的辅助函数
      const checkOverlap = (
        x: number,
        y: number,
        size: number,
        existingPoints: Particle[],
      ): boolean => {
        for (const point of existingPoints) {
          const distance = Math.sqrt(
            Math.pow(x - point.originX, 2) + Math.pow(y - point.originY, 2),
          );
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

      // 在容器范围内均匀随机分布，确保粒子分布到所有象限
      // 使用容器尺寸而不是整个屏幕尺寸
      const spreadWidth = containerWidth;
      const spreadHeight = containerHeight;

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
      const particlePoints: Array<{ x: number; y: number }> = [];
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
        // 在容器范围内随机分布
        // 先为粒子生成随机大小（用于重叠检测）
        const particleSize = Math.random() * (maxSize - minSize) + minSize;
        const margin = particleSize / 2;
        // 初始化默认位置（容器中心）
        let originX: number = spreadWidth / 2;
        let originY: number = spreadHeight / 2;
        let attempts = 0;

        // 尝试生成不重叠的位置
        let foundPosition = false;
        for (attempts = 0; attempts < maxAttempts; attempts++) {
          // 在容器范围内完全随机分布
          // 确保粒子能分布到所有象限（左上、右上、左下、右下）
          // 使用均匀随机分布，确保每个区域都有粒子
          // 直接生成在容器范围内的随机坐标
          originX = margin + Math.random() * (spreadWidth - margin * 2);
          originY = margin + Math.random() * (spreadHeight - margin * 2);

          // 确保坐标在有效范围内（双重检查）
          originX = Math.max(margin, Math.min(spreadWidth - margin, originX));
          originY = Math.max(margin, Math.min(spreadHeight - margin, originY));

          // 检查是否重叠
          if (!checkOverlap(originX, originY, particleSize, points)) {
            foundPosition = true;
            break;
          }
        }

        // 如果找不到不重叠的位置，使用最后一次尝试的位置（允许轻微重叠）
        if (!foundPosition) {
          originX = margin + Math.random() * (spreadWidth - margin * 2);
          originY = margin + Math.random() * (spreadHeight - margin * 2);
          originX = Math.max(margin, Math.min(spreadWidth - margin, originX));
          originY = Math.max(margin, Math.min(spreadHeight - margin, originY));
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

      // 设置粒子数据
      setParticles(points);

      // 调用粒子加载完成回调
      if (onParticleLoad) {
        onParticleLoad(points.length);
      }
    };
  }, [src, gap, alphaThreshold, onParticleLoad, scale, gatherPosition, delayInit]);

  useEffect(() => {
    processImage();
  }, [processImage]);

  // 组件卸载时清理定时器
  useEffect(() => {
    return () => {
      if (leaveTimeoutId) {
        clearTimeout(leaveTimeoutId);
      }
    };
  }, [leaveTimeoutId]);

  return (
    <div
      ref={containerRef}
      className={`logo-particle-gather-container ${className} ${isInitialized ? 'initialized' : 'uninitialized'}`}
    >
      {/* 热区：只在logo聚集位置响应鼠标事件 */}
      {scaleRef.current.displayWidth > 0 && scaleRef.current.displayHeight > 0 && (
        <div
          className="logo-hotspot"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: `${scaleRef.current.displayWidth}px`,
            height: `${scaleRef.current.displayHeight}px`,
            transform: `translate(${(dimensionsRef.current.width - scaleRef.current.displayWidth) / 2}px, ${(dimensionsRef.current.height - scaleRef.current.displayHeight) / 2}px)`,
            cursor: 'pointer',
            zIndex: 10,
            pointerEvents: 'auto',
          }}
          onMouseEnter={() => {
            // 只在auto模式下响应鼠标事件
            if (gather === 'auto') {
              // 清除可能存在的离开延迟定时器
              if (leaveTimeoutId) {
                clearTimeout(leaveTimeoutId);
                setLeaveTimeoutId(null);
              }
              // 清除自动切换的定时器，防止冲突
              if (autoSwitchTimeoutRef.current) {
                clearTimeout(autoSwitchTimeoutRef.current);
                autoSwitchTimeoutRef.current = null;
              }
              setActiveInternal(false); // 鼠标进入热区时聚集
            }
          }}
          onMouseLeave={() => {
            // 只在auto模式下响应鼠标事件
            if (gather === 'auto') {
              // 设置500ms延迟再散开
              const timeoutId = setTimeout(() => {
                setActiveInternal(true); // 鼠标离开热区后散开
              }, 500);
              setLeaveTimeoutId(timeoutId);
            }
          }}
        />
      )}
      {particles.map((p, i) => {
        // Calculate random delay for each particle
        const randomDelay = Math.random() * (duration * 0.3); // 0-30% of duration in ms

        // 使用粒子保存的大小（在生成时已确定）
        const particleSize = p.size;

        // Generate random opacity between 5% and 30%
        const randomOpacity = Math.random() * (0.3 - 0.05) + 0.05;

        // 现在在容器级别处理透明度，所以粒子的opacity就是其随机opacity值
        const opacity = randomOpacity;

        // Calculate position adjustments based on gatherPosition or className
        let positionAdjustmentX = 0;
        let positionAdjustmentY = 0;

        if (gatherPosition) {
          // 使用 gatherPosition 属性（优先级更高）
          let targetX: number;
          let targetY: number;

          if (typeof gatherPosition === 'object') {
            // 自定义坐标
            targetX = parseValue(gatherPosition.x, 'width');
            targetY = parseValue(gatherPosition.y, 'height');
          } else {
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
        } else {
          // 兼容旧的 className 方式
          if (className.includes('gathered-top-left')) {
            positionAdjustmentX = -dimensionsRef.current.width / 2;
            positionAdjustmentY = -dimensionsRef.current.height / 2;
          } else if (className.includes('gathered-top-right')) {
            positionAdjustmentX = dimensionsRef.current.width / 2;
            positionAdjustmentY = -dimensionsRef.current.height / 2;
          } else if (className.includes('gathered-bottom-left')) {
            positionAdjustmentX = -dimensionsRef.current.width / 2;
            positionAdjustmentY = dimensionsRef.current.height / 2;
          } else if (className.includes('gathered-bottom-right')) {
            positionAdjustmentX = dimensionsRef.current.width / 2;
            positionAdjustmentY = dimensionsRef.current.height / 2;
          } else if (className.includes('gathered-left-center')) {
            const leftCenterX = window.innerHeight / 2;
            const screenCenterY = window.innerHeight / 2;
            positionAdjustmentX = leftCenterX - imageSizeRef.current.width / 2;
            positionAdjustmentY =
              screenCenterY - imageSizeRef.current.height / 2;
          } else {
            // 默认情况：没有设置 gatherPosition 和 className 时，图片从容器左上角开始
            // positionAdjustmentX 和 positionAdjustmentY 保持为 0
            // 这样 p.x=0, p.y=0 的粒子会显示在容器的 (0, 0) 位置
            positionAdjustmentX = 0;
            positionAdjustmentY = 0;
          }
        }

        // Calculate final positions
        // 如果 active 为 true，粒子散开到随机位置 (p.originX, p.originY)
        // 如果 active 为 false，粒子聚集到 logo 位置 (p.x * scale + adjustment)
        const finalX = effectiveActive
          ? p.originX  // 散开状态：使用随机位置
          : p.x * scaleRef.current.scaleX + positionAdjustmentX; // 聚集状态：使用 logo 位置
        const finalY = effectiveActive
          ? p.originY  // 散开状态：使用随机位置
          : p.y * scaleRef.current.scaleY + positionAdjustmentY; // 聚集状态：使用 logo 位置

        return (
          <span
            key={i}
            className={`logo-particle ${effectiveActive ? 'scattered' : 'gathered'}`}
            style={{
              width: particleSize,
              height: particleSize,
              backgroundColor: color,
              opacity: opacity,
              transform: `translate(${finalX}px, ${finalY}px)`,
              transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
              transitionDelay: `${randomDelay}ms`,
            }}
          />
        );
      })}
    </div>
  );
};

export default LogoParticleGather;
