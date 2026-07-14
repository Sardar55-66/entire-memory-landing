import React from 'react';
import { motion } from 'framer-motion';
import { BIOGRAPHY } from '../data/content';
import { SectionTitle } from '../components/SectionTitle';
import { GoldDivider } from '../components/GoldDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Biography() {
  const { ref, variants, initial, animate } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="bg-card py-24 md:py-32 px-6" data-testid="section-biography">
      <motion.div 
        ref={ref}
        initial={initial}
        animate={animate}
        variants={variants.staggerContainer}
        className="max-w-[680px] mx-auto flex flex-col items-center"
      >
        <motion.div variants={variants.slideUp} className="w-full text-center">
          <SectionTitle>A Life Well Lived</SectionTitle>
          <GoldDivider />
        </motion.div>

        <div className="mt-8 space-y-6 text-foreground/90 font-sans text-[1.0625rem] leading-[1.9]">
          {BIOGRAPHY.map((paragraph, index) => (
            <motion.p key={index} variants={variants.slideUp}>
              {index === 0 ? (
                <>
                  <span className="float-left text-6xl md:text-[5rem] font-serif text-primary leading-none mr-4 mt-2 mb-[-1rem]">
                    {paragraph.charAt(0)}
                  </span>
                  {paragraph.slice(1)}
                </>
              ) : (
                paragraph
              )}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
