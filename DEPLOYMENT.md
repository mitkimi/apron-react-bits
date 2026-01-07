# GitHub Pages 部署指南

## 自动部署（推荐）

项目已配置 GitHub Actions workflow，当你推送代码到 `main` 或 `master` 分支时，会自动构建并部署到 GitHub Pages。

### 首次部署步骤

1. **启用 GitHub Pages**
   - 进入仓库的 Settings > Pages
   - Source 选择 "GitHub Actions"

2. **推送代码**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **查看部署状态**
   - 在仓库的 Actions 标签页查看部署进度
   - 部署完成后，网站会在 `https://mitkimi.github.io/apron-react-bits/` 可用

## 手动部署

如果你想手动部署：

1. **构建项目**
   ```bash
   # 安装依赖
   yarn install

   # 构建 logo-particle-gather 包
   yarn build:logo-particle-gather

   # 构建 Next.js 应用
   yarn build:web
   ```

2. **部署到 GitHub Pages**
   - 构建产物在 `web/out` 目录
   - 可以使用 `gh-pages` 包或其他方式部署

## 配置说明

### basePath 配置

如果仓库名不是 `apron-react-bits`，或者你想部署到不同的路径，可以修改：

1. **修改 next.config.js**
   ```javascript
   basePath: '/your-repo-name'
   ```

2. **或者通过环境变量**
   ```bash
   GITHUB_PAGES_BASE_PATH=/your-repo-name yarn build:web
   ```

### 部署到根域名

如果你想部署到 `username.github.io`（不需要子路径）：

1. **修改 next.config.js**
   ```javascript
   basePath: ''
   ```

2. **修改 .github/workflows/deploy.yml**
   ```yaml
   env:
     GITHUB_PAGES_BASE_PATH: ''
   ```

## 故障排除

### 资源路径错误

如果图片或资源加载失败，检查：
- `basePath` 是否正确配置
- 资源路径是否使用了绝对路径（应该使用相对路径或 Next.js 的 Image 组件）

### 构建失败

- 确保所有依赖都已安装
- 检查 `logo-particle-gather` 包是否已构建
- 查看 GitHub Actions 日志获取详细错误信息

