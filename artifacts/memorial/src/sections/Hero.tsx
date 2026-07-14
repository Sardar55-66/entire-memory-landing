import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import { HERO } from '../data/content';
import { GoldDivider } from '../components/GoldDivider';

export default function Hero() {
  const y = useParallax(0.4);

  return (
    <section className="relative w-full h-[100svh] overflow-hidden flex flex-col items-center justify-center bg-black" data-testid="section-hero">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div 
          className="w-full h-[120%] bg-cover bg-center absolute top-[-10%]"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/memorial-landscape/1920/1080)', filter: 'grayscale(100%)' }}
        />
        <div className="absolute inset-0 bg-[#3a2a10] mix-blend-multiply opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center px-4 w-full text-center mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 rounded-full overflow-hidden w-[180px] h-[180px] md:w-[240px] md:h-[240px]"
          style={{ boxShadow: '0 0 60px rgba(255,255,255,0.15)' }}
        >
          <img 
            src="https://picsum.photos/seed/portrait-alex/400/400" 
            alt="Alexander Morgan" 
            className="w-full h-full object-cover filter grayscale"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl text-ivory tracking-tight mb-2"
        >
          {HERO.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <GoldDivider className="py-4 opacity-70" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="font-sans text-xs md:text-sm text-gold tracking-[0.2em] uppercase mb-8"
        >
          {HERO.dates}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="font-serif italic text-lg text-ivory/80 max-w-md mx-auto"
        >
          {HERO.quote}
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 z-10 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-gold/60 w-6 h-6" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
