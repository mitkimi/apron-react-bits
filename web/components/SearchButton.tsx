"use client";

import { useState, useEffect } from "react";
import './search-button.scss'; // 引入外部样式文件

export function SearchButton() {
  // 初始状态设为 false，确保服务器端和客户端首次渲染一致
  const [isMac, setIsMac] = useState(false);

  // 在客户端挂载后检测平台类型
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMac(navigator.platform.indexOf('Mac') > -1);
    }
  }, []);

  const handleSearchClick = () => {
    // 触发 Ctrl+K 或 Cmd+K 快捷键事件
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      ctrlKey: !isMac,
      metaKey: isMac,
      bubbles: true,
      cancelable: true
    });
    
    document.dispatchEvent(event);
  };

  const shortcutLabel = isMac ? '⌘' : 'Ctrl';
  const ariaLabel = isMac ? '搜索 (⌘+K)' : '搜索 (Ctrl+K)';

  return (
    <button 
      className="search-button"
      onClick={handleSearchClick}
      aria-label={ariaLabel}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <span className="search-text">搜索</span>
      <span className="search-shortcut" suppressHydrationWarning>
        <kbd className={isMac ? "square-key mac-command-key" : "square-key"}>
          {shortcutLabel}
        </kbd>
        <kbd className="square-key">K</kbd>
      </span>
    </button>
  );
}