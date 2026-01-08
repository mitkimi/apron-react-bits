# Theme Switcher 组件

ThemeSwitcher 是一个主题切换组件，允许用户在亮色和暗色模式之间切换。

## 安装

```bash
npm install @apron-design/react-theme-switcher
```

## 基本使用

```tsx
import { ThemeSwitcher } from '@apron-design/react-theme-switcher';

function App() {
  return (
    <ThemeSwitcher />
  );
}
```

## 属性说明

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| className | string | undefined | 自定义CSS类名 |

## 使用示例

### 基本主题切换器
```tsx
<ThemeSwitcher />
```

### 带自定义类名的主题切换器
```tsx
<ThemeSwitcher className="custom-theme-switcher" />
```