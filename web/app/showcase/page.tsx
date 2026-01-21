"use client";

import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { PageFooter } from "@/components/PageFooter";
import { SectionTitle } from "@/components/SectionTitle";
import { Tabs, TabList, Tab, TabPanel, Button } from "@apron-design/react";
import "./showcase.scss";

// 产品数据
const products = [
  {
    key: "yike-music",
    name: "一刻乐谱",
    icon: "/apron-react-bits/assets/who-are-using/yike-music.png",
    description: "一刻乐谱是一款专业的乐谱制作与分享小程序，为音乐爱好者和专业人士提供简单易用的乐谱购买、下载工具。支持多种乐器，尤其是双排键、管风琴等乐器。",
    screenshot: "/apron-react-bits/assets/showcases/iyikemusic.png",
    link: "https://iyikemusic.com"
  },
  // {
  //   key: "panda",
  //   name: "Panda",
  //   icon: "/assets/who-are-using/panda.png",
  //   iconDark: "/assets/who-are-using/panda-dark.png",
  //   description: "Panda 是一款智能数据分析平台，帮助企业快速洞察数据价值。通过简洁直观的可视化界面，让复杂的数据分析变得简单高效，赋能业务决策。",
  //   screenshot: "/assets/who-are-using/panda.png",
  //   link: "https://offontime.com/products/panda"
  // },
  {
    key: "tg",
    name: "TG 个人站",
    icon: "/apron-react-bits/assets/who-are-using/tg.png",
    iconDark: "/apron-react-bits/assets/who-are-using/tg-dark.png",
    description: "全栈工程师 · 后端工程师 · 前端工程师，潘钧挺的个人网站。",
    screenshot: "/apron-react-bits/assets/showcases/tg.png",
    link: "https://tg98.cn"
  },
  // {
  //   key: "momenta",
  //   name: "灯塔",
  //   icon: "/assets/who-are-using/momenta.png",
  //   description: "灯塔是一个基于区块链的智能合约平台，为开发者提供安全、透明、高效的智能合约服务。",
  //   screenshot: "/assets/showcases/momenta.png",
  //   link: "https://offontime.com/products/momenta"
  // },
  // {
  //   key: "soundpad",
  //   name: "SOUNDPAD",
  //   icon: "/assets/who-are-using/soundpad.png",
  //   description: "SOUNDPAD 是一款专业的音乐管理和演出工具。支持多种音频格式，多轨同时播放。适合晚会、音乐会、魔术专场等使用场景。",
  //   screenshot: "/assets/showcases/soundpad.png",
  //   link: "https://offontime.com/products/soundpad"
  // },
  {
    key: "teleprompter",
    name: "提词器",
    icon: "/apron-react-bits/assets/who-are-using/teleprompter.png",
    description: "提词器是一款专为视频创作者打造的智能提词应用，支持可调节的滚动速度、镜像模式和多种主题。让你的视频拍摄更加流畅自然，告别忘词尴尬。同时支持在线编辑、远程遥控等功能。",
    screenshot: "/apron-react-bits/assets/showcases/teleprompter.png",
    link: "https://offontime.com/products/teleprompter"
  },
  {
    key: "davinci",
    name: "DAVINCI",
    icon: "/apron-react-bits/assets/who-are-using/davinci.png",
    iconDark: "/apron-react-bits/assets/who-are-using/davinci-dark.png",
    description: "DAVINCI 是一个乳胶时装、紧身时装品牌，主打高品质、舒适、时尚的乳胶服装制品、莱卡服装制品、配饰等等。是都市年轻人追求的品牌。",
    screenshot: "/apron-react-bits/assets/showcases/davinci.png",
    link: "https://davincilatex.com"
  }
];

// 图标组件 - 使用 CSS 控制深色/浅色切换
function ProductIcon({ product, size, className }: { 
  product: typeof products[0]; 
  size: number; 
  className?: string;
}) {
  if (product.iconDark) {
    return (
      <span className={`theme-icon-wrapper ${className || ''}`}>
        <Image 
          src={product.icon} 
          alt={product.name} 
          width={size} 
          height={size} 
          className="icon-light"
        />
        <Image 
          src={product.iconDark} 
          alt={product.name} 
          width={size} 
          height={size} 
          className="icon-dark"
        />
      </span>
    );
  }
  return (
    <Image 
      src={product.icon} 
      alt={product.name} 
      width={size} 
      height={size} 
      className={className}
    />
  );
}

export default function Showcase() {
  return (
    <div className="min-h-screen">
      <PageHeader backgrounded={80} />
      <div className="showcase-hero-container">
        <SectionTitle tip="Apron 希望让大家快速构建有个性的产品和设计，以解决复杂业务带来的体验问题。">与每一份力量共赴山海</SectionTitle>
      </div>
      <div className="showcase-container">
        <div className="showcase-tabs-wrapper">
          <Tabs defaultActiveKey="yike-music" capsule>
            <TabList>
              {products.map((product) => (
                <Tab key={product.key} tabKey={product.key}>
                  <span className="tab-content">
                    <ProductIcon product={product} size={20} className="tab-icon" />
                    {product.name}
                  </span>
                </Tab>
              ))}
            </TabList>
            {products.map((product) => (
              <TabPanel key={product.key} tabKey={product.key}>
                <div className="product-panel">
                  <div className="product-info">
                    <div className="product-header">
                      <ProductIcon product={product} size={64} className="product-icon" />
                      <div className="product-title-container">
                        <h2 className="product-title">{product.name}</h2>
                      </div>
                    </div>
                    <p className="product-description">{product.description}</p>
                    <div className="product-actions">
                      <Button variant="primary" onClick={() => window.open(product.link, '_blank')}>
                        访问官网
                      </Button>
                    </div>
                  </div>
                  <div className="product-screenshot">
                    <div className="screenshot-frame">
                      <Image 
                        src={product.screenshot} 
                        alt={`${product.name} 截图`}
                        width={600}
                        height={400}
                        className="screenshot-image"
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}