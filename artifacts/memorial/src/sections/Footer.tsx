import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FOOTER } from '../data/content';

export default function Footer() {
  const { ref, initial, animate, variants } = useScrollReveal({ threshold: 0.5 });

  return (
    <footer className="bg-foreground text-background py-16 px-6" data-testid="section-footer">
      <motion.div 
        ref={ref}
        initial={initial}
        animate={animate}
        variants={variants.fadeIn}
        className="max-w-md mx-auto text-center flex flex-col items-center"
      >
        <div className="w-2 h-2 rotate-45 bg-primary/80 mb-6"></div>
        <h2 className="font-serif italic text-lg text-ivory/70 mb-4">{FOOTER.title}</h2>
        <p className="font-sans text-sm tracking-widest text-primary uppercase mb-8">
          {FOOTER.name}
        </p>
        <div className="w-full h-[1px] bg-primary/20 mb-8 max-w-[200px]"></div>
        <p className="font-serif italic text-xs text-ivory/40 max-w-[280px]">
          {FOOTER.quote}
        </p>
        <p
          className="mt-10 font-sans text-[0.65rem] tracking-[0.35em] uppercase text-ivory/25 select-none"
          data-testid="footer-watermark"
          aria-hidden="true"
        >
          {FOOTER.watermark}
        </p>
      </motion.div>
    </footer>
  );
}
