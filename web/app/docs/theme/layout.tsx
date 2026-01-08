import type { Metadata } from "next";
import DocumentsLayout from '@/layouts/Documents';

export const metadata: Metadata = {
  title: "主题 | Apron React Bits",
  description: "Apron React Bits 组件库主题文档",
};

export default function ThemeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DocumentsLayout>
      {children}
    </DocumentsLayout>
  );
}