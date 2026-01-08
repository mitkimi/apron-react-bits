'use client';

import { useState, useEffect } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { PageFooter } from '@/components/PageFooter';
import LogoParticleGather from '../../packages/logo-particle-gather/src/LogoParticleGather';
import './home.scss';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

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
                scale={.4}
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="home-hero-content">
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}