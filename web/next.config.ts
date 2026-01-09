import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment
  // If deploying to https://<username>.github.io/<repo>/
  // basePath and assetPrefix are set conditionally based on environment
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/apron-react-bits',
    assetPrefix: '/apron-react-bits',
  } : {}),
  
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  
  // 配置 Turbopack（Next.js 16 默认使用）
  turbopack: {},
  
  // 配置 webpack（用于非 Turbopack 构建）
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};

export default nextConfig;
