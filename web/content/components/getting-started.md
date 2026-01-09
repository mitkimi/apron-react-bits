# 组件库快速上手

欢迎使用 Apron React Bits 组件库！本指南将帮助您快速开始使用我们的组件。

## 安装

使用 npm 安装：

```bash
npm install @apron-design/react
```

或者使用 yarn：

```bash
yarn add @apron-design/react
```

## 第一个组件

安装完成后，您可以开始使用组件库中的组件：

```tsx
import { Button } from '@apron-design/react';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('Hello World!')}>
      Click Me
    </Button>
  );
}
```

## 导入样式

确保导入组件库的样式文件：

```tsx
// 在入口文件中导入全局样式
import '@apron-design/react/dist/style.css';
```

## 按需导入

为了减小打包体积，您可以按需导入组件：

```tsx
// 只导入特定组件
import { Button, Input } from '@apron-design/react';

// 导入组件样式
import '@apron-design/react/dist/button.css';
import '@apron-design/react/dist/input.css';
```

## 主题支持

组件库内置主题支持：

```tsx
// 默认支持浅色和深色主题
// 通过 CSS 类切换主题
<body className="apron-theme-dark">
  {/* 应用内容 */}
</body>
```

## TypeScript 支持

组件库提供完整的 TypeScript 类型定义：

```tsx
import { ButtonProps } from '@apron-design/react';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## 组件示例

以下是一些常用组件的示例：

### 按钮组件

```tsx
import { Button } from '@apron-design/react';

function ButtonExample() {
  return (
    <div>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}
```

### 输入框组件

```tsx
import { Input } from '@apron-design/react';

function InputExample() {
  return (
    <Input placeholder="请输入内容" />
  );
}
```

## 下一步

- 查看 [完整文档](/) 了解所有组件
- 浏览 [组件列表](/components) 获取详细信息
- 学习 [高级用法](/advanced) 掌握更多技巧