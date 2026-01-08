# Page Header 组件

PageHeader 是一个可定制的页面头部组件，提供导航和主题切换功能。

## 安装

```bash
npm install @apron-design/react-page-header
```

## 基本使用

```tsx
import { PageHeader } from '@apron-design/react-page-header';

function App() {
  return (
    <PageHeader />
  );
}
```

## 属性说明

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| backgrounded | number \| boolean | false | 背景透明度，0-100之间，true为80 |
| className | string | undefined | 自定义CSS类名 |

## 使用示例

### 带背景透明度的头部
```tsx
<PageHeader backgrounded={80} />
```

### 完全透明的头部
```tsx
<PageHeader />
```

### 带自定义类名的头部
```tsx
<PageHeader className="custom-header" />
```