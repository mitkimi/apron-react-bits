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
  
  // Enable turbopack with default settings to avoid workspace root inference issue
  turbopack: {},
   
 
  
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  
  // For static export
  output: 'export',
  
  images: {
    unoptimized: true, // Important for static exports
    path: '/apron-react-bits/_next/image',
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
    
    // Add DefinePlugin to expose the base path during build
    if (!isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.BASE_PATH': JSON.stringify('/apron-react-bits'),
        })
      );
    }
    
    // For static export with basePath, we need to ensure all asset references
    // are prefixed correctly. This is a complex issue with Next.js static export.
    // The approach here is to modify the public path for static assets.
    if (!isServer) {
      // Update the public path for static assets in the client-side bundles
      config.output = {
        ...config.output,
        publicPath: '/apron-react-bits/_next/',
      };
    }
    
    return config;
  },
};

export default nextConfig;
