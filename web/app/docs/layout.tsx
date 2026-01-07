import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "文档 | Apron React Bits",
  description: "Apron React Bits 组件库文档",
};

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}