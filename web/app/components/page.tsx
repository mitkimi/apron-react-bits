'use client';

import { PageHeader } from '@/components/PageHeader';
import { PageFooter } from '@/components/PageFooter';
import Link from 'next/link';
import { useState } from 'react';

export default function ComponentsPage() {
  const components = [
    {
      name: 'Logo Particle Gather',
      description: '一个粒子动画组件，可以将图片分解成粒子并实现聚集和散开效果',
      path: '/docs/components/logo-particle-gather'
    },
    {
      name: 'Page Header',
      description: '页面头部组件，包含导航和主题切换功能',
      path: '/docs/components/page-header'
    },
    {
      name: 'Page Footer',
      description: '页面底部组件，包含版权信息和链接',
      path: '/docs/components/page-footer'
    },
    {
      name: 'Theme Switcher',
      description: '主题切换组件，支持浅色、深色和自动模式',
      path: '/docs/components/theme-switcher'
    },
    {
      name: 'Search Button',
      description: '搜索按钮组件，用于触发搜索功能',
      path: '/docs/components/search-button'
    }
  ];

  return (
    <>
      <PageHeader backgrounded={80} />
      <main style={{ flexGrow: 1 }}>
        <div className="documents-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px 100px' }}>
          <h1>组件列表</h1>
          <p className="lead">Apron React Bits 提供的组件集合</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {components.map((component, index) => (
              <ComponentCard 
                key={index} 
                name={component.name} 
                description={component.description} 
                path={component.path} 
              />
            ))}
          </div>
        </div>
      </main>
      <PageFooter />
    </>
  );
}

function ComponentCard({ name, description, path }: { name: string; description: string; path: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  return (
    <div 
      style={{ 
        border: '1px solid #e5e5e5', 
        borderRadius: '8px', 
        padding: '24px', 
        backgroundColor: '#ffffff',
        transition: 'box-shadow 0.2s ease',
        boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.08)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-prefers-color="dark"
    >
      <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#000000' }}>{name}</h3>
      <p style={{ margin: '0 0 16px 0', color: '#666666', lineHeight: '1.5' }}>{description}</p>
      <Link 
        href={path} 
        style={{ 
          color: '#0070f3', 
          textDecoration: linkHovered ? 'underline' : 'none', 
          fontSize: '14px',
          fontWeight: '500'
        }}
        onMouseEnter={() => setLinkHovered(true)}
        onMouseLeave={() => setLinkHovered(false)}
      >
        查看详情 →
      </Link>
    </div>
  );
}