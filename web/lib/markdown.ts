// 用于动态加载markdown文件的工具函数
export async function getMarkdownContent(filePath: string): Promise<string> {
  try {
    // 在Next.js中动态导入markdown文件
    const content = await import(`@/content/docs/${filePath}.md`);
    return content.default || content;
  } catch (error) {
    console.error(`Failed to load markdown file: ${filePath}`, error);
    return '# Page Not Found\n\nThe requested documentation page could not be found.';
  }
}