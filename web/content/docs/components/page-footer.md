# Page Footer 组件

PageFooter 是一个可定制的页面底部组件，包含版权信息和相关链接。

## 安装

```bash
npm install @apron-design/react-page-footer
```

## 基本使用

```tsx
import { PageFooter } from '@apron-design/react-page-footer';

function App() {
  return (
    <PageFooter />
  );
}
```

## 属性说明

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| className | string | undefined | 自定义CSS类名 |

## 使用示例

### 基本底部
```tsx
<PageFooter />
```

### 带自定义类名的底部
```tsx
<PageFooter className="custom-footer" />
```