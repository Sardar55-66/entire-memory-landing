import React from 'react';
import { motion } from 'framer-motion';
import { MEMORIES } from '../data/content';
import { SectionTitle } from '../components/SectionTitle';
import { GoldDivider } from '../components/GoldDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Memories() {
  const { ref, initial, animate, variants } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="bg-card py-24 md:py-32 px-6" data-testid="section-memories">
      <motion.div 
        ref={ref}
        initial={initial}
        animate={animate}
        variants={variants.slideUp}
        className="max-w-7xl mx-auto flex flex-col items-center mb-16"
      >
        <SectionTitle>Общие моменты</SectionTitle>
        <GoldDivider />
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {MEMORIES.map((memory, index) => (
          <motion.div 
            key={index}
            variants={variants.slideUp}
            className="bg-background border border-border p-8 rounded shadow-sm flex flex-col"
          >
            <span className="font-serif text-5xl text-primary/40 leading-[0] mb-6">“</span>
            <p className="font-serif italic text-[0.95rem] text-charcoal leading-[1.75] flex-grow">
              {memory.quote}
            </p>
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="font-sans text-[0.8rem] uppercase tracking-wide text-primary font-medium">
                {memory.author}
              </p>
              <p className="font-sans text-[0.75rem] text-muted-foreground mt-1">
                {memory.role}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
