'use client';

import { useEffect, useState } from "react";
import { SearchButton } from './SearchButton';
import { ThemeSwitcher } from './ThemeSwitcher';
import './PageHeader.scss';

interface PageHeaderProps {
  backgrounded?: number | boolean;
}

export function PageHeader({ backgrounded }: PageHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // 如果 backgrounded 是数字，监听滚动事件
    if (typeof backgrounded === "number" && typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY >= backgrounded);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // 初始检查

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [backgrounded]);

  // 确定是否显示背景
  const showBackground = 
    backgrounded === true || 
    (typeof backgrounded === "number" && isScrolled);

  // 导航项配置
  const navItems = [
    { href: '/docs', label: '文档' },
    { href: '/components', label: '组件' },
    { href: '/showcase', label: '展示' },
    { href: '//apron.design', label: '回到 Apron Design' }
  ];

  useEffect(() => {
    // 更新导航项的活动状态
    const updateActiveNav = () => {
      if (typeof window === 'undefined') return;
      
      const currentPath = window.location.pathname;
      
      // 移除所有活动状态
      const navLinks = document.querySelectorAll('.page-header-nav-link');
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      
      // 添加当前页面的活动状态
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
          // 根路径特殊处理
          if (href === '/' && currentPath === '/') {
            link.classList.add('active');
            return;
          }
          
          // 对于根路径，不匹配其他路径
          if (href === '/') {
            return;
          }
          
          // 移除尾部斜杠进行比较
          const normalizedHref = href.replace(/\/$/, '');
          const normalizedPathname = currentPath.replace(/\/$/, '');
          
          // 如果是精确匹配
          if (normalizedHref === normalizedPathname) {
            link.classList.add('active');
            return;
          }
          
          // 如果是前缀匹配（处理二级页面）
          if (normalizedPathname.startsWith(normalizedHref) && normalizedHref !== '') {
            link.classList.add('active');
          }
        }
      });
    };
    
    // 初始更新
    updateActiveNav();
    
    // 监听 URL 变化（如果使用客户端路由）
    const handleUrlChange = () => {
      updateActiveNav();
    };
    
    window.addEventListener('popstate', handleUrlChange);
    
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  return (
    <header className={`page-header ${showBackground ? "page-header--backgrounded" : ""}`}>
      <div className="page-header-container">
        <div className="page-header-left">
          <a href="/" className="page-header-logo-img">
            {/* 使用 CSS 控制 logo 切换 */}
            <img
              src="/assets/images/logo-light.svg"
              alt="Logo"
              className="logo-light"
            />
            <img
              src="/assets/images/logo-dark.svg"
              alt="Logo"
              className="logo-dark"
            />
          </a>
          <a href="/" className="page-header-logo-text">
            <span className="logo-text">React Bits</span>
          </a>
          
          {/* 将搜索按钮放在 logo 右边 */}
          <SearchButton />
        </div>
        
        <div className="page-header-actions">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="page-header-nav-link"
            >
              {item.label}
            </a>
          ))}
          
          <a 
            href="https://github.com/mitkimi/apron-react-bits"
            target="_blank"
            rel="noopener noreferrer"
            className="page-header-icon-button"
            aria-label="GitHub"
          >
            <img
              src="/assets/icons/github.svg"
              alt="GitHub"
              className="page-header-icon"
            />
          </a>
          
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}