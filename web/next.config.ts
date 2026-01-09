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
  
  // Configure turbopack root directory to fix build issue
  turbopack: {
    root: path.resolve(process.cwd(), '..'),
  },
  
  // Move serverComponentsExternalPackages from experimental to top-level
  serverExternalPackages: ['sharp', 'onnxruntime-node'],
  
  // 配置 webpack（用于非 Turbopack 构建）
  webpack: (config, { dir }) => {
    config.resolve = {
      ...config.resolve,
      symlinks: true,
    };
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};

export default nextConfig;
