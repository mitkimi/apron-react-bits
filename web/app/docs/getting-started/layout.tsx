import type { Metadata } from "next";
import DocumentsLayout from '@/layouts/Documents';

export const metadata: Metadata = {
  title: "快速上手 | Apron React Bits",
  description: "Apron React Bits 组件库快速上手文档",
};

export default function GettingStartedLayout({
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