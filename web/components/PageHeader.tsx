"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { SearchButton } from './SearchButton'; // 添加导入
import { ThemeSwitcher } from './ThemeSwitcher'; // 添加导入
import "./PageHeader.scss";

type ThemeMode = "light" | "dark" | "system";

interface PageHeaderProps {
  backgrounded?: number | boolean;
}

export function PageHeader({ backgrounded }: PageHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // 初始化主题 - 在客户端首次渲染时执行
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem("themeMode") as ThemeMode | null;
      let themeMode: ThemeMode = "system";
      
      if (savedMode) {
        themeMode = savedMode;
      } else {
        // 检查旧的 theme 设置
        const oldTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (oldTheme) {
          themeMode = oldTheme;
        } else {
          themeMode = "system";
        }
      }
      
      // 获取实际要应用的主题
      let themeValue: "light" | "dark" = "light";
      if (themeMode === "system") {
        themeValue = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      } else {
        themeValue = themeMode;
      }
      
      document.documentElement.setAttribute("data-prefers-color", themeValue);
      document.documentElement.setAttribute("apron-theme", themeValue);
      
      // 设置背景色
      const bgColor = themeValue === "dark" ? "#000000" : "#FFFFFF";
      document.documentElement.style.backgroundColor = bgColor;
      document.body.style.backgroundColor = bgColor;
    }
  }, []);

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

  // 判断导航项是否应该高亮
  const isNavActive = (href: string) => {
    // 根路径特殊处理
    if (href === '/' && pathname === '/') {
      return true;
    }
      
    // 对于根路径，不匹配其他路径
    if (href === '/') {
      return false;
    }
      
    // 移除尾部斜杠进行比较
    const normalizedHref = href.replace(/\/\$/, '');
    const normalizedPathname = pathname.replace(/\/\$/, '');
      
    // 如果是精确匹配
    if (normalizedHref === normalizedPathname) {
      return true;
    }
      
    // 如果是前缀匹配（处理二级页面）
    if (normalizedPathname.startsWith(normalizedHref) && normalizedHref !== '') {
      return true;
    }
      
    return false;
  };

  // 导航项配置
  const navItems = [
    { href: '/docs', label: '文档' },
    { href: '/components', label: '组件' },
    { href: '/showcase', label: '展示' },
    { href: 'https://apron.design', label: '回到 Apron Design' }
  ];

  return (
    <header className={`page-header ${showBackground ? "page-header--backgrounded" : ""}`}>
      <div className="page-header-container">
        <div className="page-header-left">
          <Link href="/" className="page-header-logo">
            {/* 使用 CSS 控制 logo 切换，避免 hydration 错误 */}
            <Image
              src="/apron-react-bits/assets/images/logo-light.svg"
              alt="Logo"
              fill
              priority
              className="logo-light"
            />
            <Image
              src="/apron-react-bits/assets/images/logo-dark.svg"
              alt="Logo"
              fill
              priority
              className="logo-dark"
            />
          </Link>
          
          {/* 将搜索按钮放在 logo 右边 */}
          <SearchButton />
        </div>
        
        <div className="page-header-actions">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`page-header-nav-link ${isNavActive(item.href) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          
          <Link 
            href="https://github.com/mitkimi/apron-react-bits"
            target="_blank"
            rel="noopener noreferrer"
            className="page-header-icon-button"
            aria-label="GitHub"
          >
            <Image
              src="/apron-react-bits/assets/icons/github.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="page-header-icon"
            />
          </Link>
          
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}