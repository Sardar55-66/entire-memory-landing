import React from 'react';

export function SectionTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-serif text-3xl md:text-4xl text-center text-foreground ${className}`} data-testid="section-title">
      {children}
    </h2>
  );
}
