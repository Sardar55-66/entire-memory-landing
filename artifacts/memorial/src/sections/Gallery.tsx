import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { GoldDivider } from '../components/GoldDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';

const IMAGES = [
  'https://picsum.photos/seed/gallery-1/800/1000',
  'https://picsum.photos/seed/gallery-2/800/600',
  'https://picsum.photos/seed/gallery-3/800/900',
  'https://picsum.photos/seed/gallery-4/800/600',
  'https://picsum.photos/seed/gallery-5/800/1100',
  'https://picsum.photos/seed/gallery-6/800/700',
  'https://picsum.photos/seed/gallery-7/800/850',
  'https://picsum.photos/seed/gallery-8/800/650',
  'https://picsum.photos/seed/gallery-9/800/950'
];

export default function Gallery() {
  const { ref, initial, animate, variants } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="bg-secondary py-24 md:py-32 px-6" data-testid="section-gallery">
      <motion.div 
        ref={ref}
        initial={initial}
        animate={animate}
        variants={variants.slideUp}
        className="max-w-7xl mx-auto flex flex-col items-center mb-12"
      >
        <SectionTitle>Запечатлённые мгновения</SectionTitle>
        <GoldDivider />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants.staggerContainer}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {IMAGES.map((src, index) => (
            <motion.div 
              key={index}
              variants={variants.fadeIn}
              className="break-inside-avoid relative overflow-hidden rounded shadow-sm group"
            >
              <img 
                src={src} 
                alt={`Воспоминание ${index + 1}`} 
                loading="lazy"
                className="w-full h-auto filter grayscale group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
