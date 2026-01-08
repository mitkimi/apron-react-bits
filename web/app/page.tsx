'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { PageFooter } from '@/components/PageFooter';
import LogoParticleGather from '../../packages/logo-particle-gather/src/LogoParticleGather';
import './home.scss';
import { gsap } from 'gsap';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [showLogoContainer, setShowLogoContainer] = useState(true);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-prefers-color");
      setIsDark(theme === "dark");
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-prefers-color") {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-prefers-color"]
    });

    return () => observer.disconnect();
  }, []);

  // 动画效果
  useEffect(() => {
    if (logoContainerRef.current) {
      // 进入动画：立即开始，包含各种酷炫效果
      gsap.fromTo(logoContainerRef.current, 
        { 
          scale: 0.2,           // 初始缩放很小
          rotation: -15,        // 初始旋转角度
          opacity: 0,           // 完全透明
          y: -100              // 初始位置在上方
        },
        { 
          scale: 1,             // 最终正常大小
          rotation: 0,          // 最终无旋转
          opacity: 1,           // 完全不透明
          y: 0,                 // 最终正常位置
          duration: 2,          // 2秒内完成进入动画
          ease: "elastic.out(1, 0.3)",  // 弹性缓动效果
          onComplete: () => {
            // 进入动画完成后，设置5秒后淡出
            gsap.to(logoContainerRef.current!, {
              scale: 1,
              opacity: 0,
              duration: 1,            // 1秒内完成淡出
              ease: "power2.in",      // 向内加速效果
              delay: 1,               // 1秒后开始淡出
              onComplete: () => {
                // 淡出动画完成后，隐藏元素
                setShowLogoContainer(false);
              }
            });
          }
        }
      );
    }
  }, []);

  // 页面卸载时的离开动画
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (logoContainerRef.current) {
        gsap.to(logoContainerRef.current, {
          scale: 0.5,
          opacity: 0,
          duration: 1,          // 1秒内完成离开动画
          ease: "power2.in"     // 向内加速效果
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <PageHeader backgrounded={80} />
      <main className="home-main">
        {/* Hero Section */}
        <section className="home-hero">
          {/* Logo Particle Gather Background */}
          <div className="home-hero-background">
            <div style={{ width: '100%', height: '100%' }}>
              <LogoParticleGather
                src="/assets/images/apron-design.png"
                gap={30}
                minSize={6}
                maxSize={30}
                color={isDark ? "#ffffff" : "#000000"}
                duration={800}
                gatherPosition="center"
                delayInit={3000}
                scale={0.4}
              />
            </div>
          </div>
          {showLogoContainer && (
            <div ref={logoContainerRef} className="home-logo-container">
              <img src="/assets/images/apron-design.png" className="home-logo light-only" alt="Apron Design" />
              <img src="/assets/images/apron-design-dark.png" className="home-logo dark-only" alt="Apron Design" />
            </div>
          )}
          {/* Content */}
          <div className="home-hero-content">
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}