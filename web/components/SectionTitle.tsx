import React from 'react';
import './SectionTitle.scss';

export interface SectionTitleProps {
  tip?: string;
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

export function SectionTitle({ tip, align = 'center', children }: SectionTitleProps) {
  return (
    <div className={`section-title section-title--${align}`}>
      <h2 className="section-title__text">{children}</h2>
      <div className="section-title__divider"></div>
      {tip && <p className="section-title__tip">{tip}</p>}
    </div>
  );
}

export default SectionTitle;
