import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  /** Numeric target to count to; when null the static `display` text is shown. */
  value: number | null;
  display: string;
  suffix?: string;
}

export function AnimatedCounter({ value, display, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(value === null || reduce ? display : "0");

  useEffect(() => {
    if (!inView || value === null || reduce) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setCurrent(String(Math.round(v))),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} aria-label={`${display}${suffix}`}>
      <span aria-hidden="true">
        {current}
        {suffix}
      </span>
    </span>
  );
}

