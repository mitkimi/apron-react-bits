const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */ 
const nextConfig = { 
  // 使用现有的 GITHUB_PAGES_BASE_PATH 环境变量，保持与 GitHub Actions 配置的一致性
  basePath: process.env.GITHUB_PAGES_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/apron-react-bits' : ''), 
   
  // 设置资源前缀，确保静态资源路径正确
  assetPrefix: process.env.GITHUB_PAGES_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/apron-react-bits' : ''),
   
  // 构建输出目录
  distDir: 'out', 
   
  output: 'export', // This enables static export
  // 确保图片和资源路径正确
  images: {
    unoptimized: true, // GitHub Pages 需要未优化的图片
  },
  
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}; 

module.exports = withMDX(nextConfig);