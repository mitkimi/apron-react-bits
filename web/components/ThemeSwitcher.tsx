'use client';

import { useState, useEffect, useCallback, useRef } from "react";
import "./ThemeSwitcher.scss";

type ThemeMode = "light" | "dark" | "system";

export function ThemeSwitcher() {
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  // 获取系统主题偏好
  const getSystemTheme = useCallback((): "light" | "dark" => {
    if (typeof window !== 'undefined') {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }, []);

  // 应用主题
  const applyTheme = useCallback((mode: ThemeMode) => {
    let themeToApply: "light" | "dark" = "light";

    if (mode === "system") {
      themeToApply = getSystemTheme();
    } else {
      themeToApply = mode;
    }

    // 设置数据属性
    document.documentElement.setAttribute("data-prefers-color", themeToApply);
    document.documentElement.setAttribute("apron-theme", themeToApply);
    
    // 设置背景色
    const bgColor = themeToApply === "dark" ? "#000000" : "#FFFFFF";
    document.documentElement.style.backgroundColor = bgColor;
    document.body.style.backgroundColor = bgColor;
  }, [getSystemTheme]);

  // 初始化主题
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 从 localStorage 获取用户设置
    const savedMode = localStorage.getItem("themeMode") as ThemeMode | null;
    
    if (savedMode) {
      setThemeMode(savedMode);
    } else {
      // 如果没有保存的设置，检查旧的 theme 设置
      const oldTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      if (oldTheme) {
        setThemeMode(oldTheme);
      } else {
        setThemeMode("system");
      }
    }
  }, []);

  // 监听系统主题变化
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newSystemTheme = e.matches ? "dark" : "light";
      setSystemTheme(newSystemTheme);

      // 如果当前模式是系统模式，则应用新的系统主题
      if (themeMode === "system") {
        applyTheme("system");
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    
    // 设置初始系统主题
    setSystemTheme(getSystemTheme());

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [themeMode, applyTheme, getSystemTheme]);

  // 当主题模式改变时应用主题
  useEffect(() => {
    if (typeof window !== 'undefined') {
      applyTheme(themeMode);
      
      // 保存到 localStorage
      if (themeMode !== "system") {
        localStorage.setItem("themeMode", themeMode);
      } else {
        localStorage.removeItem("themeMode");
      }
    }
  }, [themeMode, applyTheme]);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const handleThemeChange = (mode: ThemeMode) => {
    setThemeMode(mode);
    setIsOpen(false); // 关闭下拉菜单
  };

  const getActiveIcon = () => {
    if (themeMode === "light") {
      return (
        <img
          src="/assets/icons/sun.svg"
          alt="浅色模式"
          className="theme-icon"
        />
      );
    } else if (themeMode === "dark") {
      return (
        <img
          src="/assets/icons/moon.svg"
          alt="深色模式"
          className="theme-icon"
        />
      );
    } else {
      return (
        <img
          src="/assets/icons/with-system.svg"
          alt="跟随系统"
          className="theme-icon theme-icon-system"
        />
      );
    }
  };

  const themeOptions = [
    { label: "浅色模式", value: "light", icon: "/assets/icons/sun.svg" },
    { label: "深色模式", value: "dark", icon: "/assets/icons/moon.svg" },
    { label: "跟随系统", value: "system", icon: "/assets/icons/with-system.svg" }
  ];

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="theme-switcher-wrapper" ref={dropdownRef}>
      <button 
        className="theme-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {getActiveIcon()}
      </button>
      
      {isOpen && (
        <div className="theme-dropdown-content">
          {themeOptions.map((option) => (
            <button
              key={option.value}
              className={`theme-dropdown-item ${themeMode === option.value ? 'active' : ''}`}
              onClick={() => handleThemeChange(option.value as ThemeMode)}
            >
              <img
                src={option.icon}
                alt={option.label}
                className={`theme-dropdown-icon ${option.value === 'system' ? 'theme-icon-system' : ''}`}
              />
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}