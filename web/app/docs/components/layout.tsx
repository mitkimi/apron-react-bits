import type { Metadata } from "next";
import DocumentsLayout from '@/layouts/Documents';

export const metadata: Metadata = {
  title: "组件文档 | Apron React Bits",
  description: "Apron React Bits 组件库组件文档",
};

export default function ComponentDocsLayout({
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