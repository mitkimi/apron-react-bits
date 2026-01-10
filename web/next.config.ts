import type { NextConfig } from "next";
import path from 'path';

// Check if we're running a build command vs dev command
// We'll use a custom environment variable that can be set during CI/CD
const shouldUseBasePath = process.env.GITHUB_PAGES_BASE_PATH === '/apron-react-bits';

const nextConfig: NextConfig = {
  // Conditionally apply basePath based on environment variable
  basePath: process.env.GITHUB_PAGES_BASE_PATH || '',
  
  // Set asset prefix for GitHub Pages deployment
  assetPrefix: process.env.GITHUB_PAGES_BASE_PATH || '',
  
  // Disable type generation to fix build issue
  typedRoutes: false,
  
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  
  // For static export
  output: 'export',
  
  images: {
    unoptimized: true, // Important for static exports
  },
  

  
  // Move serverComponentsExternalPackages from experimental to top-level
  serverExternalPackages: ['sharp', 'onnxruntime-node'],
  
  env: {
    BASE_PATH: process.env.GITHUB_PAGES_BASE_PATH || '',
  },
  

  
  // Enable turbopack explicitly to avoid conflicts
  turbopack: {},
  
  // Configure webpack for compatibility
  webpack: (config, { isServer }) => {
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
