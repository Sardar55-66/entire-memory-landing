import React from 'react';

export function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-6 ${className}`} aria-hidden="true" data-testid="gold-divider">
      <div className="h-[1px] w-12 bg-primary/40"></div>
      <div className="w-2 h-2 rotate-45 bg-primary/60 border border-primary"></div>
      <div className="h-[1px] w-12 bg-primary/40"></div>
    </div>
  );
}
