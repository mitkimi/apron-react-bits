'use client';

import { usePathname } from 'next/navigation';
import { PageHeader } from '@/components/PageHeader';
import { PageFooter } from '@/components/PageFooter';
import { useEffect, useRef } from 'react';
import './Documents.scss';

interface NavItem {
  label: string;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

interface DocumentsProps {
  navigation: NavSection[];
  children: React.ReactNode;
}

export function Documents({ navigation, children }: DocumentsProps) {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // 保存和恢复侧边栏滚动位置
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    // 从 sessionStorage 恢复滚动位置
    const savedScrollTop = sessionStorage.getItem('sidebar-scroll-top');
    if (savedScrollTop) {
      sidebar.scrollTop = parseInt(savedScrollTop, 10);
    }

    // 保存滚动位置的函数
    const saveScrollPosition = () => {
      sessionStorage.setItem('sidebar-scroll-top', sidebar.scrollTop.toString());
    };

    // 监听滚动事件
    sidebar.addEventListener('scroll', saveScrollPosition);

    // 组件卸载时清理事件监听器
    return () => {
      sidebar.removeEventListener('scroll', saveScrollPosition);
    };
  }, []);

  return (
    <div className="documents-page">
      <PageHeader backgrounded />
      
      <div className="documents-content">
        <aside className="documents-sidebar" ref={sidebarRef}>
          <nav className="documents-nav">
            {navigation.map((section, index) => (
              <div className="nav-section" key={index}>
                <h3 className="nav-section-title">{section.title}</h3>
                <ul className="nav-list">
                  {section.items.map((item, itemIndex) => {
                    // Normalize paths for comparison (remove trailing slash)
                    const normalizedPathname = pathname.replace(/\/$/, '');
                    const normalizedHref = item.href.replace(/\/$/, '');
                    const isActive = normalizedPathname === normalizedHref;
                    return (
                      <li 
                        className={`nav-item ${isActive ? 'active' : ''}`} 
                        key={itemIndex}
                      >
                        <a href={item.href}>{item.label}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <main className="documents-main" id="document-container">
          <div className="documents-container">
            {children}
          </div>
          <PageFooter />
        </main>
      </div>
    </div>
  );
}