import type { NextConfig } from "next";
import path from 'path';

// Check if we're running a build command vs dev command
// We'll use a custom environment variable that can be set during CI/CD
const shouldUseBasePath = true;

const nextConfig: NextConfig = {
  // Apply basePath for GitHub Pages deployment
  basePath: '/apron-react-bits',
  
  // Set asset prefix for GitHub Pages deployment
  assetPrefix: '/apron-react-bits',
  
  // Disable type generation to fix build issue
  typedRoutes: false,
  
  // Enable turbopack with basic settings
  turbopack: {},
   
 
  
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
    BASE_PATH: '/apron-react-bits',
  },
  

  

  
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
