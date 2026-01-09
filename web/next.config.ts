import type { NextConfig } from "next";
import path from 'path';

// Check if we're running a build command vs dev command
// We'll use a custom environment variable that can be set during CI/CD
const shouldUseBasePath = process.env.USE_BASE_PATH === 'true';

const nextConfig: NextConfig = {
  // Conditionally apply basePath based on environment variable
  basePath: shouldUseBasePath ? '/apron-react-bits' : '',
  
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  
  // For static export
  output: 'export',
  
  images: {
    unoptimized: true, // Important for static exports
  },
  
  // Configure turbopack root directory to fix build issue
  turbopack: {
    root: path.resolve(process.cwd(), '..'),
  },
  
  // Move serverComponentsExternalPackages from experimental to top-level
  serverExternalPackages: ['sharp', 'onnxruntime-node'],
  
  env: {
    BASE_PATH: shouldUseBasePath ? '/apron-react-bits' : '',
  },
  
  // 配置 webpack
  webpack: (config, { dir, isServer, dev }) => {
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
