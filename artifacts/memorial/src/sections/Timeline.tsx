import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE } from '../data/content';
import { SectionTitle } from '../components/SectionTitle';
import { GoldDivider } from '../components/GoldDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';

function TimelineItem({ item, index }: { item: any, index: number }) {
  const { ref, initial, animate, variants } = useScrollReveal({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      ref={ref}
      initial={initial}
      animate={animate}
      variants={isEven ? variants.slideRight : variants.slideLeft}
      className={`relative flex items-center justify-between md:justify-normal w-full mb-16 last:mb-0 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="hidden md:block w-5/12" />
      
      <div className="z-20 flex items-center bg-primary rounded-full w-4 h-4 shadow-[0_0_0_4px_hsl(var(--background)),_0_0_0_8px_hsla(42,40%,55%,0.2)] absolute left-[-8px] md:left-1/2 md:-ml-[8px]" />
      
      <div className="w-full md:w-5/12 pl-8 md:pl-0">
        <div className={`flex flex-col bg-card border border-border p-6 rounded shadow-sm ${
          isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'
        }`}>
          <span className="font-serif text-2xl text-primary mb-1">{item.year}</span>
          <h3 className="font-sans font-semibold text-foreground text-lg mb-2">{item.title}</h3>
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const { ref, initial, animate, variants } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="bg-background py-24 md:py-32 px-6 overflow-hidden" data-testid="section-timeline">
      <motion.div 
        ref={ref}
        initial={initial}
        animate={animate}
        variants={variants.slideUp}
        className="max-w-4xl mx-auto flex flex-col items-center mb-16"
      >
        <SectionTitle>A Journey in Time</SectionTitle>
        <GoldDivider />
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        {/* The center line */}
        <div className="absolute left-[0px] md:left-1/2 top-0 bottom-0 w-[1px] bg-primary/30 md:-ml-[0.5px]" />
        
        <div className="flex flex-col relative w-full">
          {TIMELINE.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
