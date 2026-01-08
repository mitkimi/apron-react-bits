'use client';

import React from 'react';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';

interface DocumentPageProps {
  title: string;
  lead?: string;
  content: string;
}

export function DocumentPage({ title, lead, content }: DocumentPageProps) {
  return (
    <main style={{ flexGrow: 1 }}>
      <div className="documents-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px 100px' }}>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        <MarkdownRenderer content={content} />
      </div>
    </main>
  );
}