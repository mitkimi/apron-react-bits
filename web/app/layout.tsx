import '../index.scss';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apron React Bits",
  description: "一个开源的React组件库",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}