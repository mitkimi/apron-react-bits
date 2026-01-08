# Logo Particle Gather 组件

一个独特的粒子动画组件，可以将图片分解成粒子并实现聚集和散开效果。

## 安装

```bash
npm install @apron-design/react-logo-particle-gather
```

## 基本使用

最简单的使用方式：

```tsx
import { LogoParticleGather } from '@apron-design/react-logo-particle-gather';

function App() {
  return (
    <LogoParticleGather 
      src="/path/to/image.png" 
      gap={30} 
      minSize={6} 
      maxSize={30} 
    />
  );
}
```

## 属性说明

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| src | string | - | 图片源地址 |
| gap | number | 30 | 粒子之间的间距 |
| minSize | number | 6 | 粒子最小尺寸 |
| maxSize | number | 30 | 粒子最大尺寸 |
| gather | boolean \| 'auto' | 'auto' | 聚集模式：true为始终聚集，false为始终散开，'auto'为自动切换 |
| delayInit | boolean | false | 是否延迟初始化动画 |
| darkModeImage | string | undefined | 深色模式下的图片路径 |
| className | string | undefined | 自定义CSS类名 |

## 使用示例

### 基本示例
```tsx
<LogoParticleGather 
  src="/path/to/image.png" 
  gap={30} 
  minSize={6} 
  maxSize={30} 
/>
```

### 自动切换模式
```tsx
<LogoParticleGather 
  src="/path/to/image.png" 
  gap={30} 
  minSize={6} 
  maxSize={30} 
  gather="auto"
/>
```

### 始终聚集模式
```tsx
<LogoParticleGather 
  src="/path/to/image.png" 
  gap={30} 
  minSize={6} 
  maxSize={30} 
  gather={true}
/>
```

### 延迟初始化
```tsx
<LogoParticleGather 
  src="/path/to/image.png" 
  gap={30} 
  minSize={6} 
  maxSize={30} 
  delayInit={true}
/>
```