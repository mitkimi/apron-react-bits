import type { Metadata } from "next";
import DocumentsLayout from '@/layouts/Documents';

export const metadata: Metadata = {
  title: "组件 | Apron React Bits",
  description: "Apron React Bits 组件库组件列表",
};

export default function ComponentsLayout({
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