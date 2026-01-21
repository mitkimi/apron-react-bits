import { Documents } from '@/layouts/Documents';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { readFileSync } from 'fs';
import { join } from 'path';

export function generateStaticParams() {
  return [
    { alias: 'getting-started' },
    { alias: 'button' },
    { alias: 'logo-particle-gather' },
  ];
}

const navigation = [
  {
    title: '',
    items: [
      { label: '开始使用', href: '/components/getting-started' },
    ],
  },
  {
    title: '通用',
    items: [
      { label: '暂无', href: '#' },
    ],
  },
  {
    title: '背景',
    items: [
      { label: 'Logo 粒子聚集散开', href: '/components/logo-particle-gather' },
    ],
  },
];

export default async function ComponentsPage(props: { params: Promise<{ alias: string }> }) {
  const params = await props.params;
  
  // Read markdown file
  let content = '';
  let errorInfo = '';
  
  try {
    const cwd = process.cwd();
    const filePath = join(cwd, 'content', 'components', `${params.alias}.md`);
    content = readFileSync(filePath, 'utf-8');
  } catch (error) {
    errorInfo = (error as Error).message || String(error);
    content = `# Page Not Found

The documentation for "${params.alias}" could not be found.

Expected file: \`content/components/${params.alias}.md\`

Error: ${errorInfo}

Current working directory: ${process.cwd()}`;
  }

  return (
    <Documents navigation={navigation}>
      <MarkdownRenderer content={content} />
    </Documents>
  );
}