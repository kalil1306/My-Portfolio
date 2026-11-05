import { useScroll, useSpring } from "motion/react";

/** Page-level scroll progress as a smoothed 0–1 motion value (no React re-renders). */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  return useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
}

