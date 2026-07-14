import { useEffect, useState } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

export function useParallax(speedMultiplier: number = 0.4): MotionValue<string> {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return useTransform(
    scrollY,
    [0, windowHeight * 2],
    ['0px', `${windowHeight * 2 * speedMultiplier}px`]
  );
}
