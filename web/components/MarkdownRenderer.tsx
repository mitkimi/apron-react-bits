'use client';

import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';
import { FloatingToc } from '@/components/FloatingToc';
import { DemoBlock } from '@/components/DemoBlock';
import './MarkdownRenderer.scss';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('jsx', javascript);
hljs.registerLanguage('tsx', typescript);
hljs.registerLanguage('vue', xml);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', css);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('shell', bash); // Add shell support
hljs.registerLanguage('sh', bash);    // Add sh support
hljs.registerLanguage('json', json);

// Helper function to generate ID from text (same as FloatingToc)
const generateId = (text: string): string => {
  // Remove HTML tags before generating ID
  const cleanText = text.replace(/<[^>]*>/g, '');
  
  return cleanText
    .toLowerCase()
    .replace(/[\u{0080}-\u{FFFF}]/gu, '')
    .replace(/[^\w\u4e00-\u9fa5\s-]/g, '') // Allow Chinese characters
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '') || cleanText.toLowerCase().replace(/\s+/g, '-');
};

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  useEffect(() => {
    // Highlight code blocks
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
      
      // 特殊处理包管理器命令，但避免在注释中高亮
      const packageManagers = ['npm', 'yarn', 'pnpm', 'npx'];
      packageManagers.forEach(pkg => {
        // 只在非注释的文本节点中替换
        const walker = document.createTreeWalker(
          block,
          NodeFilter.SHOW_TEXT,
          {
            acceptNode: function(node) {
              // 检查父元素是否为注释类
              const parent = node.parentElement;
              if (parent && (parent.classList.contains('hljs-comment') || parent.classList.contains('hljs-quote'))) {
                return NodeFilter.FILTER_REJECT;
              }
              return NodeFilter.FILTER_ACCEPT;
            }
          }
        );
        
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
          textNodes.push(node);
        }
        
        textNodes.forEach(textNode => {
          const regex = new RegExp(`\\b(${pkg})\\b`, 'g');
          const text = textNode.textContent || '';
          const matches = text.match(regex);
          
          if (matches) {
            const span = document.createElement('span');
            let lastIndex = 0;
            let html = '';
            
            let match;
            while ((match = regex.exec(text)) !== null) {
              // 添加匹配前的文本
              html += text.substring(lastIndex, match.index);
              
              // 添加高亮的包管理器名称
              html += `<span class="hljs-name" name="${pkg}">${match[0]}</span>`;
              
              lastIndex = match.index + match[0].length;
            }
            
            // 添加剩余的文本
            html += text.substring(lastIndex);
            
            span.innerHTML = html;
            
            // 替换文本节点
            if (textNode.parentNode) {
              while (span.firstChild) {
                textNode.parentNode.insertBefore(span.firstChild, textNode);
              }
              textNode.parentNode.removeChild(textNode);
            }
          }
        });
      });
    });

    // Add copy buttons and language labels
    document.querySelectorAll('pre').forEach((pre) => {
      if (pre.querySelector('.copy-button')) return; // Already has button

      const code = pre.querySelector('code');
      const language = code?.className.match(/language-(\w+)/)?.[1] || 'text';

      // Language label
      const langLabel = document.createElement('span');
      langLabel.className = 'code-language';
      langLabel.textContent = language.toUpperCase();

      // Copy button
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.5 2.5h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <rect x="6.5" y="1.5" width="7" height="9" rx="1" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      `;
      button.title = 'Copy code';

      button.addEventListener('click', async () => {
        const codeText = code?.textContent || '';
        try {
          await navigator.clipboard.writeText(codeText);
          button.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          `;
          button.classList.add('copied');
          setTimeout(() => {
            button.innerHTML = `
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.5 2.5h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <rect x="6.5" y="1.5" width="7" height="9" rx="1" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            `;
            button.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy code:', err);
        }
      });

      pre.style.position = 'relative';
      pre.appendChild(langLabel);
      pre.appendChild(button);
    });
  }, [content]);

  // Process :::demo blocks
  const processDemoBlocks = (markdownContent: string): string => {
    // Match :::demo blocks with code blocks inside
    const demoRegex = /:::demo\s*```(?:jsx|tsx|vue)\s*([\s\S]*?)\s*```\s*:::/g;
    
    return markdownContent.replace(demoRegex, (match, content) => {
      // Extract component code (everything inside the demo block)
      const componentCode = content.trim();
      
      // Return a placeholder that will be replaced with the DemoBlock component
      return `<div class="demo-block-placeholder" data-code="${encodeURIComponent(componentCode)}"></div>`;
    });
  };

  // Process the content
  const processedContent = processDemoBlocks(content);

  return (
    <>
      <FloatingToc content={content} />
      <div className="markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            // Add ID attributes to headings
            h1: ({ children }) => {
              const text = children?.toString() || '';
              const id = generateId(text);
              return <h1 id={id}>{children}</h1>;
            },
            h2: ({ children }) => {
              const text = children?.toString() || '';
              const id = generateId(text);
              return <h2 id={id}>{children}</h2>;
            },
            h3: ({ children }) => {
              const text = children?.toString() || '';
              const id = generateId(text);
              return <h3 id={id}>{children}</h3>;
            },
            h4: ({ children }) => {
              const text = children?.toString() || '';
              const id = generateId(text);
              return <h4 id={id}>{children}</h4>;
            },
            h5: ({ children }) => {
              const text = children?.toString() || '';
              const id = generateId(text);
              return <h5 id={id}>{children}</h5>;
            },
            h6: ({ children }) => {
              const text = children?.toString() || '';
              const id = generateId(text);
              return <h6 id={id}>{children}</h6>;
            },
            // Handle div elements to render DemoBlock components
            div: ({ node, ...props }: any) => {
              // Check if this is a demo block placeholder
              if (props.className === 'demo-block-placeholder') {
                const code = props['data-code'];
                if (code) {
                  try {
                    const decodedCode = decodeURIComponent(code);
                    return <DemoBlock componentCode={decodedCode} />;
                  } catch (e) {
                    return <div>解析代码块时出错</div>;
                  }
                }
              }
              // Render normal divs
              return <div {...props} />;
            }
          }}
        >
          {processedContent}
        </ReactMarkdown>
      </div>
    </>
  );
}