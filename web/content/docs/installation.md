# 安装

## 环境要求

- Node.js >= 16.0.0
- npm 或 yarn
- React 18+

## 通过 npm 安装

```bash
npm install @apron-design/react
```

## 通过 yarn 安装

```bash
yarn add @apron-design/react
```

## 通过 pnpm 安装

```bash
pnpm add @apron-design/react
```

## 基本使用

```tsx
import { Button } from '@apron-design/react';
import '@apron-design/react/dist/style.css';

function App() {
  return <Button>Click me</Button>;
}
```

## 在 Next.js 中使用

在 Next.js 项目中，您可以在 `app/layout.tsx` 文件中导入样式：

```tsx
import '@apron-design/react/dist/style.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## 在 Create React App 中使用

在 `src/index.js` 或 `src/App.js` 文件中导入样式：

```tsx
import '@apron-design/react/dist/style.css';
```

## 按需导入

为了减少包体积，您可以按需导入组件：

```tsx
import { Button } from '@apron-design/react';
import '@apron-design/react/dist/button.css';
```

## 类型支持

组件库提供了完整的 TypeScript 类型定义，无需额外安装。