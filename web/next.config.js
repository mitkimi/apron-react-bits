/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This enables static export
  // 如果部署到 GitHub Pages 子路径，需要设置 basePath
  // 例如：如果仓库名是 apron-react-bits，URL 会是 https://username.github.io/apron-react-bits/
  // 可以通过环境变量 GITHUB_PAGES_BASE_PATH 来配置，默认为 '/apron-react-bits'
  basePath: process.env.GITHUB_PAGES_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/apron-react-bits' : ''),
  // 确保图片和资源路径正确
  images: {
    unoptimized: true, // GitHub Pages 需要未优化的图片
  },
};

module.exports = nextConfig;