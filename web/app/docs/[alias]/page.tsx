import { Documents } from '@/layouts/Documents';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { readFileSync } from 'fs';
import { join } from 'path';

export function generateStaticParams() {
  return [
    { alias: 'introduction' },
    { alias: 'manual' },
    { alias: 'installation' },
    { alias: 'developer' },
    { alias: 'contribute' },
  ];
}

const navigation = [
  {
    title: 'Apron React Bits',
    items: [
      { label: '项目简介', href: '/apron-react-bits/docs/introduction' },
    ],
  },
  {
    title: '使用',
    items: [
      { label: '安装', href: '/apron-react-bits/docs/installation' },
      { label: '手动添加', href: '/apron-react-bits/docs/manual' },
    ]
  },
  {
    title: '贡献',
    items: [
      { label: '开发者', href: '/apron-react-bits/docs/developer' },
      { label: '贡献代码', href: '/apron-react-bits/docs/contribute' },
    ]
  }
];


export default async function DocsPage(props: { params: Promise<{ alias: string }> }) {
  const params = await props.params;
  
  // Read markdown file
  let content = '';
  let errorInfo = '';
  
  try {
    const cwd = process.cwd();
    const filePath = join(cwd, 'content', 'docs', `${params.alias}.md`); // 现在从 content/docs 目录读取文档
    content = readFileSync(filePath, 'utf-8');
  } catch (error) {
    errorInfo = (error as Error).message || String(error);
    content = `# Page Not Found

The documentation for "${params.alias}" could not be found.

Expected file: \`content/docs/${params.alias}.md\`

Error: ${errorInfo}

Current working directory: ${process.cwd()}`;
  }
  return (
    <Documents navigation={navigation}>
      <MarkdownRenderer content={content} />
    </Documents>
  );
}