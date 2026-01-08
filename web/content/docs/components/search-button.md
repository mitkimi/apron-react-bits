# Search Button 组件

SearchButton 是一个可定制的搜索按钮组件，提供搜索功能入口。

## 安装

```bash
npm install @apron-design/react-search-button
```

## 基本使用

```tsx
import { SearchButton } from '@apron-design/react-search-button';

function App() {
  return (
    <SearchButton />
  );
}
```

## 属性说明

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| className | string | undefined | 自定义CSS类名 |

## 使用示例

### 基本搜索按钮
```tsx
<SearchButton />
```

### 带自定义类名的搜索按钮
```tsx
<SearchButton className="custom-search-button" />
```