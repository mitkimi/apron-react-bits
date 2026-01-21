"use client";

import { useState, useEffect } from "react";
import { Row, Col, Skeleton, Space, Switch, Badge, Button, Rate, Avatar, AvatarGroup } from "@apron-design/react";
import "./Window.scss";
import AOS from "aos";

export function Window() {
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

  useEffect(() => {
    // Refresh AOS when component mounts to ensure animations work
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-right">
      <div className={`window ${isDark ? 'dark' : 'light'}`} >
        <div className="window-header">
          <div className="window-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
          <div className="window-address-bar">
            apron.design
          </div>
        </div>
        <div className="window-content">
          <div className="window-content-header">
            apron.design | An opensource toC design system.
          </div>
          <div className="window-components">
            <Row gutter={24} style={{ height: '100%' }}>
              <Col span={8}>
                <div className="component-section">
                  <div className="window-logo">
                    apron.design
                  </div>
                  <div className="skeleton-list">
                    <Skeleton.Element variant="rectangular" style={{ width: '100%', height: '40px', marginBottom: '10px' }} />
                    <Skeleton.Element variant="rectangular" style={{ width: '100%', height: '40px', marginBottom: '10px' }} />
                    <Skeleton.Element variant="rectangular" style={{ width: '100%', height: '40px' }} />
                  </div>
                  <div className="switch-section">
                    <Switch size="small" variant="secondary" defaultChecked />
                    <Switch size="small" variant="primary" />
                  </div>
                  <div className="rating-section">
                    <Rate value={3} allowControl allowHalf />
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div className="component-section">
                  <div className="button-list">
                    <Space orientation="vertical" size={10}>
                      <Button variant="primary">Primary Button</Button>
                      <Button variant="default">Default Button</Button>
                      <Button variant="secondary">Main Button</Button>
                      <Button variant="primary" disabled>Disabled Button</Button>
                      <Button variant="primary" danger>Danger Button</Button>
                    </Space>
                  </div>
                  
                  <div className="badge-section">
                    <Badge count={15}>
                      <div className="badge-box"></div>
                    </Badge>
                    <Badge dot>
                      <div className="badge-box"></div>
                    </Badge>
                    <div className="badge-new">
                      <div className="badge-box">NEW</div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div className="component-section">
                  <div className="color-grid">
                    <div className="color-column">
                      <div className="color-item color-gray-100"></div>
                      <div className="color-item color-gray-80"></div>
                      <div className="color-item color-gray-60"></div>
                      <div className="color-item color-gray-40"></div>
                      <div className="color-item color-gray-20"></div>
                    </div>
                    <div className="color-column">
                      <div className="color-item" style={{ backgroundColor: '#4C9EEA' }}></div>
                      <div className="color-item" style={{ backgroundColor: '#4C9EEA', opacity: 0.8 }}></div>
                      <div className="color-item" style={{ backgroundColor: '#4C9EEA', opacity: 0.6 }}></div>
                      <div className="color-item" style={{ backgroundColor: '#4C9EEA', opacity: 0.4 }}></div>
                      <div className="color-item" style={{ backgroundColor: '#4C9EEA', opacity: 0.2 }}></div>
                    </div>
                    <div className="color-column">
                      <div className="color-item" style={{ backgroundColor: '#1BBA48' }}></div>
                      <div className="color-item" style={{ backgroundColor: '#1BBA48', opacity: 0.8 }}></div>
                      <div className="color-item" style={{ backgroundColor: '#1BBA48', opacity: 0.6 }}></div>
                      <div className="color-item" style={{ backgroundColor: '#1BBA48', opacity: 0.4 }}></div>
                      <div className="color-item" style={{ backgroundColor: '#1BBA48', opacity: 0.2 }}></div>
                    </div>
                  </div>
                  <div className="avatar-section">
                    <AvatarGroup>
                      <Avatar style={{ backgroundColor: '#5B9FFF', fontSize: '24px', color: '#FFFFFF' }}>A</Avatar>
                      <Avatar>
                        <svg viewBox="0 0 16 16" width="24" height="24" fill="currentColor">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </Avatar>
                      <Avatar src="/apron-react-bits/assets/images/cat.png" />
                      <Avatar src="/apron-react-bits/assets/images/mitkimi.jpg" />
                      <Avatar style={{ backgroundColor: '#4CAF50', color: '#FFFFFF' }}>kimi</Avatar>
                    </AvatarGroup>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}