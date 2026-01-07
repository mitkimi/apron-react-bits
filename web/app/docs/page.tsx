import { PageHeader } from '@/components/PageHeader';
import { PageFooter } from '@/components/PageFooter';

const navigation = [
  {
    title: '使用指南',
    items: [
      { label: '快速上手', href: '/docs/quick-start' },
      { label: '安装指南', href: '/docs/installation' },
      { label: '深色模式', href: '/docs/dark-mode' },
    ],
  },
  {
    title: '组件',
    items: [
      { label: 'PageHeader', href: '/docs/components/page-header' },
      { label: 'Button', href: '/docs/components/button' },
    ],
  }
];

export default function DocsPage() {
  return (
    <>
      <PageHeader backgrounded={80} />
      <main style={{ flexGrow: 1, maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1>快速上手</h1>
        <p className="lead">快速开始使用 Apron React Bits 组件库</p>
        
        <h2>安装</h2>
        <pre><code>npm install @apron-design/react</code></pre>
        
        <h2>使用</h2>
        <p>在您的项目中导入组件：</p>
        <pre><code>import {`{ Button }`} from '@apron-design/react';</code></pre>
      </main>
      <PageFooter />
    </>
  );
}