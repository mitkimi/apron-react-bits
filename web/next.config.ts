import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment
  // basePath is required for internal routing to work in subdirectory
  basePath: process.env.NODE_ENV === 'production' ? '/apron-react-bits' : undefined,
  // assetPrefix helps with static assets path
  assetPrefix: process.env.NODE_ENV === 'production' ? '/apron-react-bits' : undefined,
  
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  
  // Configure turbopack root directory to fix build issue
  turbopack: {
    root: path.resolve(process.cwd(), '..'),
  },
  
  // Move serverComponentsExternalPackages from experimental to top-level
  serverExternalPackages: ['sharp', 'onnxruntime-node'],
  
  // 配置 webpack（用于非 Turbopack 构建）
  webpack: (config, { dir, isServer, dev }) => {
    config.resolve = {
      ...config.resolve,
      symlinks: true,
    };
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    
    // For static exports, we need to handle asset prefixes properly
    // We'll add a plugin to handle HTML asset paths
    if (!isServer && !dev) { // Only in production builds for client-side bundles
      config.plugins = config.plugins || [];
      
      // Custom plugin to modify HTML files after generation
      class ModifyHtmlAssetsPlugin {
        apply(compiler: any) {
          compiler.hooks.emit.tapAsync('ModifyHtmlAssetsPlugin', (compilation: any, callback: any) => {
            Object.keys(compilation.assets).forEach((filename) => {
              if (filename.endsWith('.html')) {
                let source = compilation.assets[filename].source().toString();
                
                // Replace absolute asset paths with basePath prefixed paths
                // Only for assets that start with /assets/, /logo, or /facicon
                source = source.replace(
                  /(src|href|poster|data-src)=["'](\/(?:assets|logo|facicon)[^"']*)["']/g,
                  (match: string, attr: string, assetPath: string) => {
                    if (assetPath.startsWith('/assets/') || assetPath.startsWith('/logo') || assetPath.startsWith('/facicon')) {
                      return `${attr}="/apron-react-bits${assetPath}"`;
                    }
                    return match;
                  }
                );
                
                // Also handle preload links in head
                source = source.replace(
                  /(<link[^>]*rel=["']preload["'][^>]*as=["']image["'][^>]*href=["'])(\/(?:assets|logo|facicon)[^"']*)(["'])/g,
                  (match: string, prefix: string, assetPath: string, suffix: string) => {
                    return `${prefix}/apron-react-bits${assetPath}${suffix}`;
                  }
                );
                
                compilation.assets[filename] = {
                  source: () => source,
                  size: () => source.length
                };
              }
            });
            callback();
          });
        }
      }
      
      config.plugins.push(new ModifyHtmlAssetsPlugin());
    }
    
    return config;
  },
};

export default nextConfig;
