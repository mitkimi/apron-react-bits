# GitHub Pages 部署说明

## 部署到 GitHub Pages

此项目已经配置了 GitHub Actions 自动部署。当您推送代码到 main 或 master 分支时，GitHub Actions 会自动构建并部署到 GitHub Pages。

## 工作流程

- 工作流文件：`.github/workflows/deploy.yml`
- 触发条件：推送到 main/master 分支或手动触发
- 构建环境：Ubuntu latest
- 部署目标：GitHub Pages

## 配置说明

- `GITHUB_PAGES_BASE_PATH` 环境变量在 GitHub Actions 中设置为 `/apron-react-bits`
- `basePath` 在生产环境中设置为 `/apron-react-bits`，以匹配 GitHub Pages 的子路径部署
- 所有静态资源（图片、图标等）会自动添加正确的路径前缀

## 本地测试生产构建

如果需要在本地测试生产构建（模拟 GitHub Pages 环境）：
```bash
GITHUB_PAGES_BASE_PATH=/apron-react-bits npm run build
npx serve@latest out
```

或者测试根路径构建（不带子路径）：
```bash
NODE_ENV=production npm run build
npx serve@latest out
```

## 注意事项

- 确保在 GitHub Pages 设置中启用了 GitHub Actions 部署
- `out` 目录中包含 `.nojekyll` 文件以避免 Jekyll 处理
- 使用 `basePath` 确保所有资源路径正确