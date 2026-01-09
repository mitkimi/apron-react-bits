# 贡献指南

感谢您有兴趣为 Apron React Bits 做出贡献！在开始之前，请阅读以下指南。

## 开发环境设置

1. Fork 仓库
2. 克隆您的 fork 到本地

```bash
git clone https://github.com/<your-username>/apron-react-bits.git
cd apron-react-bits
```

3. 安装依赖

```bash
npm install
```

4. 启动开发服务器

```bash
npm run dev:web
```

## 项目结构

```
apron-react-bits/
├── packages/           # 组件包
│   ├── cli/           # 命令行工具
│   └── logo-particle-gather/  # Logo 粒子聚集组件
├── web/              # 文档网站
│   ├── app/          # Next.js 应用
│   ├── components/   # UI 组件
│   ├── content/      # 文档内容
│   └── lib/          # 工具函数
└── ...
```

## 提交代码

1. 创建新分支

```bash
git checkout -b feature/your-feature-name
```

2. 提交更改

```bash
git add .
git commit -m "feat: add new feature"
```

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范，提交消息应该遵循以下格式：

- `feat`: 新功能
- `fix`: 错误修复
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建工具或其他

3. 推送到远程仓库

```bash
git push origin feature/your-feature-name
```

4. 创建 Pull Request

## 代码规范

- 使用 TypeScript 编写
- 遵循 ESLint 规则
- 组件使用函数式组件和 Hooks
- 使用 SCSS 编写样式
- 编写 JSDoc 注释

## 组件开发

1. 在 `packages/` 目录下创建新组件
2. 使用 TypeScript 编写组件
3. 编写 SCSS 样式文件
4. 导出组件到 index.ts
5. 在文档中添加使用示例

## 文档编写

文档使用 Markdown 格式编写，位于 `web/content/` 目录下。

## 测试

确保您的代码通过所有测试：

```bash
npm test
```

## 问题报告

如果发现错误或有改进建议，请在 GitHub 上提交 issue。请提供详细信息，包括：

- 问题描述
- 复现步骤
- 预期行为
- 实际行为
- 环境信息

## 许可证

通过贡献，您同意您的贡献将根据 MIT 许可证进行许可。