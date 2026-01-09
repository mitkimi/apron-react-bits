import { redirect } from 'next/navigation';

export default function ComponentsRedirect() {
  // 自动跳转到第一个子页面
  redirect('/components/getting-started');
}