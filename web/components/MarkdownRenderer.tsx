'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        // 自定义组件映射
        h1: ({ node, ...props }) => <h1 {...props} style={{ fontSize: '48px', fontWeight: 700, color: '#000000', margin: '0 0 16px 0', lineHeight: '1.2', ...props.style }} />,
        h2: ({ node, ...props }) => <h2 {...props} style={{ fontSize: '32px', fontWeight: 600, color: '#000000', margin: '48px 0 24px 0', lineHeight: '1.3', ...props.style }} />,
        h3: ({ node, ...props }) => <h3 {...props} style={{ fontSize: '24px', fontWeight: 600, color: '#000000', margin: '36px 0 18px 0', lineHeight: '1.4', ...props.style }} />,
        p: ({ node, ...props }) => <p {...props} style={{ lineHeight: '1.6', color: '#333333', margin: '0 0 16px 0', ...props.style }} />,
        ul: ({ node, ...props }) => <ul {...props} style={{ marginLeft: '20px', marginBottom: '16px', ...props.style }} />,
        ol: ({ node, ...props }) => <ol {...props} style={{ marginLeft: '20px', marginBottom: '16px', ...props.style }} />,
        li: ({ node, ...props }) => <li {...props} style={{ marginTop: '8px', ...props.style }} />,
        a: ({ node, ...props }) => <a {...props} style={{ color: '#0070f3', textDecoration: 'none', ...props.style }} />,
        code: ({ node, inline, ...props }) => {
          if (inline) {
            return <code {...props} style={{ 
              backgroundColor: '#f5f5f5', 
              padding: '2px 6px', 
              borderRadius: '4px', 
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '0.9em',
              ...props.style 
            }} />;
          }
          return <code {...props} style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '16px', 
            borderRadius: '4px', 
            display: 'block',
            overflowX: 'auto',
            fontFamily: 'Monaco, Consolas, monospace',
            fontSize: '0.9em',
            ...props.style 
          }} />;
        },
        pre: ({ node, ...props }) => <pre {...props} style={{ margin: '16px 0', ...props.style }} />,
        table: ({ node, ...props }) => (
          <table 
            {...props} 
            style={{ 
              width: '100%', 
              borderCollapse: 'collapse', 
              marginTop: '16px', 
              marginBottom: '32px', 
              ...props.style 
            }} 
          />
        ),
        th: ({ node, ...props }) => (
          <th 
            {...props} 
            style={{ 
              textAlign: 'left', 
              padding: '8px', 
              borderBottom: '2px solid #e5e5e5',
              ...props.style 
            }} 
          />
        ),
        td: ({ node, ...props }) => (
          <td 
            {...props} 
            style={{ 
              textAlign: 'left', 
              padding: '8px', 
              borderBottom: '1px solid #e5e5e5',
              ...props.style 
            }} 
          />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote 
            {...props} 
            style={{ 
              borderLeft: '4px solid #0070f3', 
              paddingLeft: '16px', 
              marginLeft: '0', 
              fontStyle: 'italic', 
              color: '#666',
              ...props.style 
            }} 
          />
        )
      }}
    >
      {content}
    </ReactMarkdown>
  );
}