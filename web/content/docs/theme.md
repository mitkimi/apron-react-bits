# 主题

Apron React Bits 提供了灵活的主题系统，支持亮色和暗色模式，并允许自定义样式。

## 深色模式

组件库默认支持深色模式，系统会根据用户的偏好自动切换。

### 手动切换主题

您可以使用 `ThemeSwitcher` 组件来手动切换主题：

```tsx
import { ThemeSwitcher } from '@apron-design/react';

function App() {
  return (
    <header>
      <ThemeSwitcher />
    </header>
  );
}
```

## 自定义主题

您可以通过 CSS 变量来自定义主题颜色：

```css
:root {
  --apron-primary-color: #0070f3;
  --apron-secondary-color: #7928ca;
  --apron-background-color: #ffffff;
  --apron-text-color: #000000;
}

[data-theme="dark"] {
  --apron-background-color: #000000;
  --apron-text-color: #ffffff;
}
```

## 主题配置

在您的应用中，您可以使用主题上下文来全局控制主题：

```tsx
import { ThemeProvider } from '@apron-design/react';

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
```

## CSS 类支持

组件会自动应用相应的主题类：

- `apron-theme-light` - 亮色主题
- `apron-theme-dark` - 暗色主题