import { PageHeader } from '@/components/PageHeader';
import { PageFooter } from '@/components/PageFooter';

export default function Home() {
  return (
    <>
      <PageHeader backgrounded={80} />
      <main style={{ minHeight: 'calc(100vh - 200px)' }}>
        {/* Hero Section */}
        <section style={{ padding: '5rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Apron React Bits
            </h1>
            <p style={{ fontSize: '1.5rem', color: '#666', marginBottom: '2rem', maxWidth: '60rem', margin: '0 auto 2rem' }}>
              一个开源的React组件库
            </p>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}