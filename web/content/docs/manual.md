# 使用手册

本手册详细介绍了 Apron React Bits 组件库的使用方法和最佳实践。

## 快速开始

### 安装

```bash
npm install @apron-design/react
```

### 基本用法

```tsx
import { Button } from '@apron-design/react';
import '@apron-design/react/dist/style.css';

function App() {
  return <Button variant="primary">Hello World</Button>;
}
```

## 组件分类

### 基础组件

- **Button**: 按钮，用于触发操作
- **Icon**: 图标，提供常用的 UI 图标
- **Typography**: 排版，提供文本样式

### 表单组件

- **Input**: 输入框，用于文本输入
- **Select**: 选择器，用于选择选项
- **Checkbox**: 复选框，用于多选
- **Radio**: 单选框，用于单选
- **Switch**: 开关，用于切换状态

### 反馈组件

- **Alert**: 警告提示，展示重要信息
- **Message**: 全局提示，提供操作反馈
- **Modal**: 对话框，展示重要信息或获取用户输入
- **Notification**: 通知提醒，展示通知信息

### 布局组件

- **Grid**: 栅格，用于页面布局
- **Space**: 间距，用于组件间间距
- **Card**: 卡片，用于内容展示
- **Divider**: 分割线，用于内容分隔

### 导航组件

- **Breadcrumb**: 面包屑，显示当前位置
- **Dropdown**: 下拉菜单，提供下拉选项
- **Menu**: 菜单，提供导航选项
- **Pagination**: 分页，用于分页导航

## 主题定制

### 默认主题

组件库提供默认主题，开箱即用。

### 深色模式

组件库内置深色模式支持，可通过 CSS 类或 JavaScript API 切换。

```tsx
// 通过 CSS 类切换
document.body.classList.add('apron-theme-dark');

// 通过 JavaScript API
import { setTheme } from '@apron-design/react';
setTheme('dark');
```

### 自定义主题

通过 CSS 变量自定义主题：

```css
:root {
  /* 颜色变量 */
  --apron-color-primary: #1890ff;
  --apron-color-success: #52c41a;
  --apron-color-warning: #faad14;
  --apron-color-error: #f5222d;
  
  /* 尺寸变量 */
  --apron-radius: 4px;
  --apron-font-size-base: 14px;
  --apron-border-width: 1px;
}
```

## 响应式设计

组件库支持响应式设计，适配不同屏幕尺寸。

### 断点

- xs: <576px
- sm: ≥576px
- md: ≥768px
- lg: ≥992px
- xl: ≥1200px
- xxl: ≥1600px

## 无障碍访问

### 键盘导航

所有交互组件都支持键盘导航，包括 Tab、Enter、Space、Arrow Keys 等。

### 屏幕阅读器

组件库遵循 ARIA 标准，支持屏幕阅读器。

## 性能优化

### 按需引入

推荐按需引入组件以减小包体积。

### 服务端渲染

组件库完全支持 SSR，可以在服务端渲染。

## 错误处理

### 错误边界

组件库使用错误边界捕获组件渲染错误。

### 控制台日志

在开发环境下提供详细的错误信息。

## 最佳实践

### 组件嵌套

避免过度嵌套组件，保持代码简洁。

### 状态管理

对于复杂状态，推荐使用状态管理库。

### 样式覆盖

通过 CSS 变量或 className prop 进行样式定制，避免直接修改组件内部样式。

## 常见问题

### 组件不渲染

检查是否正确导入了样式文件。

### 样式冲突

确保没有其他 CSS 框架覆盖了组件样式。

### 类型错误

确保使用了正确的 TypeScript 版本。

## 迁移指南

### 从 v1 到 v2

- 更换了构建工具
- 更新了 API
- 改进了无障碍支持

## 支持

如需技术支持，请查阅文档或提交 issue。