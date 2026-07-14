import React from 'react';
import { motion } from 'framer-motion';
import { LARGE_QUOTE } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function QuoteSection() {
  const { ref, initial, animate, variants } = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center py-24 px-6 overflow-hidden bg-black" data-testid="section-quote">
      <div 
        className="absolute inset-0 bg-cover bg-center filter grayscale blur-[2px] scale-105"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/memorial-quote/1920/600)' }}
      />
      <div className="absolute inset-0 bg-[#140f0a] opacity-75 mix-blend-multiply"></div>
      
      <motion.div 
        ref={ref}
        initial={initial}
        animate={animate}
        variants={variants.slideUp}
        className="relative z-10 max-w-[720px] mx-auto text-center flex flex-col items-center"
      >
        <span className="font-serif text-7xl md:text-8xl text-primary opacity-40 leading-none mb-6">“</span>
        <p className="font-serif italic text-xl md:text-2xl text-ivory/90 leading-[1.85] mb-8">
          {LARGE_QUOTE.quote}
        </p>
        <p className="font-sans text-sm tracking-widest text-primary uppercase">
          — {LARGE_QUOTE.author}
        </p>
      </motion.div>
    </section>
  );
}
