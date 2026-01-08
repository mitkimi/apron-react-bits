"use client";
import Image from "next/image";
import { Row, Col, Link } from "@apron-design/react";
import { useState, useEffect } from "react";
import "./PageFooter.scss";

export function PageFooter() {
  const [isDark, setIsDark] = useState(false);
  const currentYear = new Date().getFullYear();

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
    <footer className="page-footer">
      {/* 第一块版心 */}
      <div className="page-footer-main">
        <Row gutter={40}>
          <Col span={8}>
            <div className="footer-info">
              <div className="footer-logo">
                <Image
                    src={isDark ? "/assets/images/logo-dark.svg" : "/assets/images/logo-light.svg"}
                    alt="Logo"
                    width={238}
                    height={50}
                    priority
                  />
              </div>
              <div className="version">
                Apron React Bits
              </div>
              <div className="version-tips">
                <p>一个开源的组件集合。</p>
                <p>这不是一个典型的组件库，<Link href="//apron.design">Apron Design</Link> 才是那个组件库。</p>
                <p>这些组件旨在通过为您的项目增添创意，帮助您脱颖而出，并在视觉上引人注目。</p>
              </div>
            </div>
            <div className="footer-company">北京按时下班科技有限公司 开源</div>
          </Col>
          <Col span={16}>
            <Row gutter={40}>
              <Col span={6}>
                <div className="footer-title">Apron Design</div>
                <div className="footer-content">
                  <Link href="//apron.design">首页</Link>
                  <Link href="//apron.design/react">React</Link>
                  <Link href="//apron.design/vue-next">Vue3</Link>
                  <Link href="//apron.design/miniprogram">微信小程序</Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="footer-title">文档</div>
                <div className="footer-content">
                  <Link href="/docs/installation">安装</Link>
                  <Link href="/docs/usage">使用</Link>
                  <Link href="/docs/components">组件</Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="footer-title">案例展示</div>
                <div className="footer-content">
                  <Link href="/showcases">案例展示</Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="footer-title">资源和社区</div>
                <div className="footer-content">
                  <Link href="https://github.com/mitkimi/apron-react-bits" target="_blank">Github</Link>
                  <Link href="https://github.com/mitkimi/apron-react-bits/issues">常见问题</Link>
                  <Link href="https://github.com/mitkimi/apron-react-bits/blob/main/changelog.md">更新日志</Link>
                  <Link href="//apron.design/guide/feedback">反馈与建议</Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* 第二块版心 */}
      <div className="page-footer-bottom">
        <div className="page-footer-copyright">
          &copy; Copyright Apron React Bits with Apron Design 2025~{currentYear}. Opensource by MIT.
        </div>
        <div className="page-footer-icp">
          京ICP备2022031289号
        </div>
      </div>
    </footer>
  );
}