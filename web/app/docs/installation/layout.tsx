import type { Metadata } from "next";
import DocumentsLayout from '@/layouts/Documents';

export const metadata: Metadata = {
  title: "安装 | Apron React Bits",
  description: "Apron React Bits 组件库安装文档",
};

export default function InstallationLayout({
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