"use client";

import React, { useState, useEffect, ReactElement, useRef, ComponentType } from "react";
import { MarkdownRenderer } from "./MarkdownRenderer";
import * as ApronReactComponents from '@apron-design/react';
import * as LocalComponents from '@/components/bits';

import { transform } from '@babel/standalone';
import './DemoBlock.scss';

interface DemoBlockProps {
  componentCode: string;
}



export function DemoBlock({ componentCode }: DemoBlockProps) {
  const [renderedComponent, setRenderedComponent] = useState<ReactElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCodeApronLoaded, setIsCodeApronLoaded] = useState(false);
  const codeApronReactRef = useRef<any>(null);



  // 预加载 code-apron React 组件
  useEffect(() => {
    const loadCodeApronReact = async () => {
      if (typeof window !== 'undefined' && !codeApronReactRef.current) {
        try {
          codeApronReactRef.current = await import('@code-apron/react');
        } catch (err) {
          console.warn('Failed to load @code-apron/react:', err);
          codeApronReactRef.current = {};
        }
        setIsCodeApronLoaded(true);
      }
    };
    loadCodeApronReact();
  }, []);



  // 处理 React 代码
  const renderReactComponent = (code: string): ReactElement | null => {
    try {
      // 获取 code-apron 组件
      const codeApronComponents = codeApronReactRef.current || {};
      
      // 创建一个包含所有 apron-design React 组件和 code-apron 组件的安全环境
      // 注意：需要过滤掉 'default' 等保留关键字，因为它们不能作为函数参数名
      const filteredCodeApronComponents = Object.keys(codeApronComponents)
        .filter(key => key !== 'default' && key !== '__esModule')
        .reduce((obj, key) => {
          obj[key] = codeApronComponents[key];
          return obj;
        }, {} as any);
      
      const safeEnv = {
        React,
        useState,
        ...ApronReactComponents,
        ...LocalComponents,
        ...filteredCodeApronComponents
      };

      // 移除 import 语句，因为在安全环境中已经提供了所有组件
      const cleanedCode = code.replace(/import\s+.*?from\s+['"][^'"]*['"];?/g, '');

      // 使用 Babel 转译 JSX 代码
      const babelResult = transform(cleanedCode, {
        presets: [['react', { runtime: 'classic' }]],
        filename: 'demo.jsx'
      });

      const transformedCode = babelResult.code || '';
      
      // 处理 export default
      const finalCode = transformedCode.replace(/export\s+default\s+/, 'return ');

      // 创建一个函数来执行代码
      const executeFn = new Function(
        ...Object.keys(safeEnv),
        `
        "use strict";
        ${finalCode}
        `
      );
      
      // 执行代码并获取组件
      const Component = executeFn(...Object.values(safeEnv));
      
      // 渲染组件
      if (typeof Component === 'function') {
        // 如果是函数组件，创建实例
        return <Component />;
      } else if (Component && typeof Component === 'object') {
        // 如果是 JSX 元素，直接使用
        return Component;
      } else {
        // 默认显示
        return <div>组件演示区域</div>;
      }
    } catch (err) {
      throw err;
    }
  };





  

  // 执行代码并渲染组件
  useEffect(() => {
    const renderComponent = async () => {
      try {
        // 清除之前的错误
        setError(null);
        
        // React 代码处理 - 等待 code-apron 加载完成
        if (!isCodeApronLoaded) {
          setRenderedComponent(<div>正在加载组件库...</div>);
          return;
        }
        
        try {
          const component = renderReactComponent(componentCode);
          setRenderedComponent(component);
        } catch (err) {
          const errorMessage = err instanceof Error ? `组件渲染失败: ${err.message}` : '组件渲染失败';
          setError(errorMessage);
          setRenderedComponent(null);
        }
      } catch (err) {
        // 提供更友好的错误信息n
        let errorMessage = '组件渲染失败';
        if (err instanceof Error) {
          // 如果是 Babel 转译错误，提供更具体的错误信息
          if (err.message.includes('Expected corresponding JSX closing tag')) {
            errorMessage = 'JSX 语法错误：标签未正确闭合，请检查代码中的开始标签和结束标签是否匹配';
          } else {
            errorMessage = `组件渲染失败: ${err.message}`;
          }
        }
        setError(errorMessage);
        setRenderedComponent(null);
      }
    };

    renderComponent();
  }, [componentCode, isCodeApronLoaded]);





  return (
    <div className="demo-block">
      {/* 组件演示区域 - 直接渲染组件 */}
      <div className="demo-preview">
        {error ? (
          <div className="demo-error">{error}</div>
        ) : renderedComponent ? (
          renderedComponent
        ) : (
          <div>正在加载组件...</div>
        )}
      </div>
      

    </div>
  );
}
