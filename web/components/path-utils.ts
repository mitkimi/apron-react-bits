/**
 * 根据环境添加正确的路径前缀
 * @param path - 原始路径
 * @returns 处理后的路径
 */
export function getAssetPath(path: string): string {
  if (typeof window !== 'undefined') {
    // 在浏览器中运行
    if (process.env.NODE_ENV === 'production') {
      return `/apron-react-bits${path}`;
    }
  } else {
    // 在服务端渲染时
    if (process.env.GITHUB_PAGES_BASE_PATH) {
      return `${process.env.GITHUB_PAGES_BASE_PATH}${path}`;
    } else if (process.env.NODE_ENV === 'production') {
      return `/apron-react-bits${path}`;
    }
  }
  return path;
}