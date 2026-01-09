# 开发者指南

本指南面向想要深入了解 Apron React Bits 内部实现或进行二次开发的开发者。

## 架构设计

Apron React Bits 采用 monorepo 架构，使用 npm workspaces 管理多个包。

### 核心概念

- **组件独立**: 每个组件都是独立的包，可以单独安装使用
- **样式解耦**: 样式与组件逻辑分离，便于定制
- **主题系统**: 支持 CSS 变量进行主题定制
- **无障碍设计**: 遵循 WAI-ARIA 标准

### 技术栈

- **构建工具**: Vite
- **语言**: TypeScript
- **样式**: SCSS
- **包管理**: npm workspaces
- **测试**: Jest + React Testing Library

## 组件 API 设计原则

### Props 设计

1. **一致性**: 相似功能的组件使用相同的 prop 名称
2. **可预测性**: prop 名称应该清晰表达其功能
3. **默认值**: 提供合理的默认值
4. **类型安全**: 使用 TypeScript 确保类型安全

### 事件处理

- 使用 React 标准事件命名约定
- 提供事件回调函数
- 保持事件对象的完整性

### 样式定制

组件支持以下定制方式：

1. **CSS 变量**: 通过 CSS 变量定制主题
2. **className**: 通过 className prop 添加自定义样式
3. **style**: 通过 style prop 添加内联样式

## 主题系统

Apron React Bits 使用 CSS 变量实现主题系统。

### 预设主题

- light: 浅色主题
- dark: 深色主题
- system: 跟随系统偏好

### 自定义主题

```css
:root {
  --apron-color-primary: #0070f3;
  --apron-color-secondary: #79ffe1;
  --apron-radius: 8px;
}
```

## 性能优化

### 按需加载

组件库支持按需加载，减少包体积。

### 虚拟化

对于大量数据的组件，使用虚拟化技术优化渲染性能。

### Memoization

使用 React.memo 和 useMemo 优化渲染性能。

## 可访问性

所有组件都遵循 WAI-ARIA 标准，支持键盘导航和屏幕阅读器。

### 键盘导航

- Tab: 在可聚焦元素间导航
- Enter/Space: 激活按钮或切换状态
- Arrow keys: 在选项间导航
- Escape: 关闭弹出组件

## 国际化

组件库支持国际化，使用 React Intl 进行文本翻译。

## 测试策略

### 单元测试

使用 Jest 和 React Testing Library 编写单元测试。

### 集成测试

测试组件间的交互和复杂功能。

### 可访问性测试

确保组件符合无障碍标准。

## 构建流程

1. TypeScript 编译
2. SCSS 编译
3. 代码压缩
4. 类型声明生成

## 发布流程

1. 版本号递增
2. 构建所有包
3. 发布到 npm
4. 更新文档

## 调试技巧

在开发过程中，可以使用 React DevTools 进行调试。

## 贡献

如果您想为项目做出贡献，请参阅贡献指南。