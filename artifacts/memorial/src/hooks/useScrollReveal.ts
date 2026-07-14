import { useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

export const animationVariants: {
  fadeIn: Variants;
  slideUp: Variants;
  slideLeft: Variants;
  slideRight: Variants;
  staggerContainer: Variants;
} = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.8 },
    },
  },
};

interface UseScrollRevealProps {
  threshold?: number;
  once?: boolean;
}

export function useScrollReveal({ threshold = 0.15, once = true }: UseScrollRevealProps = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return {
    ref,
    variants: animationVariants,
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
    viewport: { once, amount: threshold },
  };
}
