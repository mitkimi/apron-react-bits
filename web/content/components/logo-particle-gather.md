# Logo 粒子聚集散开

在 [Ant Motion](https://motion.ant.design/index-cn) 动效站，有这么一个经典的效果：把一个 Logo 打散成粒子，然后并且可以实现漂浮、聚集时成为 Logo，散开时散落在页面上。
但由于"年久失修"：这个动效相关依赖不能用了，同样也不支持较新版本的 React，要想用这个效果就只能动手写一个了。


## 预览
:::demo
```tsx
import LogoParticleGather from '@/components/bits/LogoParticleGather';

function Demo() {
  return (
    <div style={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <LogoParticleGather
        src="/assets/images/apron-design.png"
        gap={10}
        minSize={2}
        maxSize={6}
        color="#1677ff"
        duration={600}
        scale={0.2}
      />
    </div>
  );
}
```
:::

## 用法

### 基本使用

最简单的使用方式：

```tsx
import LogoParticleGather from '@/components/bits/LogoParticleGather';

function App() {
  return (
    <LogoParticleGather 
      src="/assets/images/apron-design.png" 
      gap={30} 
      minSize={6} 
      maxSize={30} 
    />
  );
}
```

## Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| src | Logo 图片地址 | string | - | - |
| gap | 粒子采样密度 | number | 6 | - |
| minSize | 粒子最小大小 | number | 2 | - |
| maxSize | 粒子最大大小 | number | 6 | - |
| color | 粒子颜色 | string | '#1677ff' | - |
| duration | 动画时长 | number | 600 | - |
| className | 容器类名 | string | '' | - |
| alphaThreshold | 透明度阈值 | number | 128 | - |
| onParticleLoad | 粒子加载完成回调 | (count: number) => void | - | - |
| gatherPosition | 聚集位置 | GatherPosition | - | - |
| scale | 图片缩放比例 | number | 0.3 | - |
| delayInit | 初始化延迟时间(毫秒) | number | 0 | - |
| gather | 聚集状态 | boolean \| 'auto' | 'auto' | - |