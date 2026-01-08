# 安装

本指南将详细介绍如何安装和配置 Apron React Bits 组件库。

## 系统要求

- Node.js 14 或更高版本
- npm 或 yarn 包管理器

## 安装

### 使用 npm

```bash
npm install @apron-design/react
```

### 使用 yarn

```bash
yarn add @apron-design/react
```

## 基本设置

安装完成后，您可以在项目中导入所需组件：

```tsx
import { Button, Card } from '@apron-design/react';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Card>
        <h3>Card Title</h3>
        <p>Card content</p>
      </Card>
    </div>
  );
}
```

## 深色模式支持

组件库默认支持深色模式，您可以通过 CSS 类或主题上下文进行控制。

## 下一步

- 查看 [快速上手](/docs/getting-started) 开始使用组件
- 了解 [主题系统](/docs/theme) 定制外观