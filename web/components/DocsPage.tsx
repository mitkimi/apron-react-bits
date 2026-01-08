import fs from 'fs';
import path from 'path';
import { DocumentPage } from '@/components/DocumentPage';

interface DocsPageProps {
  filePath: string;
  title: string;
  lead?: string;
}

// 服务器组件：读取并返回markdown内容
export default async function DocsPage({ filePath, title, lead }: DocsPageProps) {
  const content = await getMarkdownContent(filePath);
  
  return (
    <DocumentPage 
      title={title} 
      lead={lead}
      content={content} 
    />
  );
}

async function getMarkdownContent(filePath: string): Promise<string> {
  try {
    // 构建文件路径
    const fullPath = path.join(process.cwd(), 'content', 'docs', `${filePath}.md`);
    const content = fs.readFileSync(fullPath, 'utf8');
    return content;
  } catch (error) {
    console.error(`Failed to load markdown file: ${filePath}`, error);
    return '# Page Not Found\n\nThe requested documentation page could not be found.';
  }
}