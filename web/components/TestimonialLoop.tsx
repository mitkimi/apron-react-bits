'use client';

import React from 'react';
import { LogoLoop, LogoItem } from './LogoLoop';
import './TestimonialLoop.css';

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  role: 'developer' | 'designer';
}

export interface TestimonialLoopProps {
  testimonials: Testimonial[];
  speed?: number;
  direction?: 'up' | 'down';
  width?: number | string;
  gap?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__body">
        <p className="testimonial-card__quote">"{testimonial.quote}"</p>
      </div>
      <div className="testimonial-card__footer">
        <div className="testimonial-card__info">
          <span className="testimonial-card__name-company">
            {testimonial.name}@{testimonial.company}
          </span>
        </div>
      </div>
    </div>
  );
};

export const TestimonialLoop: React.FC<TestimonialLoopProps> = ({
  testimonials,
  speed = 50,
  direction = 'up',
  width = '100%',
  gap = 16,
  pauseOnHover = true,
  className
}) => {
  const logoItems: LogoItem[] = testimonials.map((testimonial, index) => ({
    node: <TestimonialCard testimonial={testimonial} key={index} />,
    ariaLabel: `Testimonial from ${testimonial.name} at ${testimonial.company}`
  }));

  return (
    <div className={`testimonial-loop ${className || ''}`}>
      <LogoLoop
        logos={logoItems}
        speed={speed}
        direction={direction}
        width={width}
        logoHeight={100}
        gap={gap}
        pauseOnHover={pauseOnHover}
        ariaLabel="User testimonials"
      />
    </div>
  );
};

export default TestimonialLoop;
