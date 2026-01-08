'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { PageFooter } from '@/components/PageFooter';
import './Documents.scss';

interface NavItem {
  label: string;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

interface DocumentsLayoutProps {
  children: React.ReactNode;
  navigation?: NavSection[];
}

export default function DocumentsLayout({ children, navigation }: DocumentsLayoutProps) {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // 默认导航结构
  const defaultNavigation: NavSection[] = [
    {
      title: '开始',
      items: [
        { label: '快速上手', href: '/docs/getting-started' },
        { label: '安装', href: '/docs/installation' },
        { label: '主题', href: '/docs/theme' },
      ],
    },
    {
      title: '组件',
      items: [
        { label: 'Logo Particle Gather', href: '/docs/components/logo-particle-gather' },
        { label: 'Page Header', href: '/docs/components/page-header' },
        { label: 'Page Footer', href: '/docs/components/page-footer' },
        { label: 'Theme Switcher', href: '/docs/components/theme-switcher' },
        { label: 'Search Button', href: '/docs/components/search-button' },
      ],
    },
  ];

  const navStructure = navigation || defaultNavigation;

  return (
    <div className="documents-page">
      <PageHeader backgrounded={80} />
      
      <div className="documents-content">
        <aside className="documents-sidebar">
          <nav className="documents-nav">
            {navStructure.map((section, index) => (
              <div key={index} className="nav-section">
                <h3 className="nav-section-title">{section.title}</h3>
                <ul className="nav-list">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={`nav-item ${pathname === item.href ? 'active' : ''}`}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
        
        <main className="documents-main">
          <div className="documents-container">
            {children}
          </div>
        </main>
      </div>
      
      <PageFooter />
    </div>
  );
}