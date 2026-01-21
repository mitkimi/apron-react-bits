import type { NextConfig } from "next";
import path from 'path';

// Always use base path for GitHub Pages deployment at https://mitkimi.github.io/apron-react-bits/
const useBasePath = true;

const nextConfig: NextConfig = {
  // Apply basePath for GitHub Pages deployment in subdirectory
  basePath: '/apron-react-bits',
  assetPrefix: '/apron-react-bits',
  
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  
  // For static export
  output: 'export',
  
  images: {
    unoptimized: true, // Important for static exports
    path: '/apron-react-bits/_next/image',
  },
  
  // Configure turbopack root directory to fix build issue
  turbopack: {
    root: path.resolve(process.cwd(), '..'),
  },
  
  // Move serverComponentsExternalPackages from experimental to top-level
  serverExternalPackages: ['sharp', 'onnxruntime-node'],
  
  // 配置 webpack
  webpack: (config, { dir, isServer, dev, webpack }) => {
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
