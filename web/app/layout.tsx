import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import { ClientProviders } from "./client-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apron React Bits · 一些动画组件库",
  description: "Apron React Bits 是一些完全开源的 C 端动画组件，为你的网站锦上添花。秩序之下，想象之上，解构复杂，聚合光芒。",
  keywords: ["组件库", "React组件库", "UI组件", "开源组件库", "前端组件", "设计系统", "Apron Design", "C端组件", "跨端开发", "用户界面"],
  icons: {
    icon: [
      { url: '/apron-react-bits/facicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/apron-react-bits/facicon.ico', sizes: '16x16', type: 'image/x-icon' },
    ],
    shortcut: '/apron-react-bits/logo.png',
    apple: '/apron-react-bits/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/apron-react-bits/facicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedMode = localStorage.getItem("themeMode");
                  let themeMode = "system";
                  
                  if (savedMode) {
                    themeMode = savedMode;
                  } else {
                    // 检查旧的 theme 设置
                    const oldTheme = localStorage.getItem("theme");
                    if (oldTheme) {
                      themeMode = oldTheme;
                    } else {
                      themeMode = "system";
                    }
                  }
                  
                  // 获取实际要应用的主题
                  let themeValue = "light";
                  if (themeMode === "system") {
                    themeValue = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                  } else {
                    themeValue = themeMode;
                  }
                  
                  document.documentElement.setAttribute("data-prefers-color", themeValue);
                  document.documentElement.setAttribute("apron-theme", themeValue);
                  const bgColor = themeValue === "dark" ? "#000000" : "#FFFFFF";
                  document.documentElement.style.backgroundColor = bgColor;
                  if (document.body) {
                    document.body.style.backgroundColor = bgColor;
                  }
                } catch (e) {
                  document.documentElement.setAttribute("data-prefers-color", "light");
                  document.documentElement.setAttribute("apron-theme", "light");
                  document.documentElement.style.backgroundColor = "#FFFFFF";
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
