import { redirect } from 'next/navigation';

export default function DocsRedirect() {
  // 自动跳转到第一个子页面
  redirect('/docs/introduction');
}