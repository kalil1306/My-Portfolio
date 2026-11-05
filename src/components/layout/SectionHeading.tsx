import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { Reveal } from "../ui/Reveal";

interface SectionHeadingProps {
  label: string;
  id: string;
  children: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ label, id, children, intro, align = "left" }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const numeralY = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const num = label.split(" / ")[0];

  return (
    <div ref={ref} className="relative">
      <motion.span
        aria-hidden="true"
        style={reduce ? undefined : { y: numeralY }}
        className="pointer-events-none absolute -top-10 right-0 hidden select-none font-serif text-[11rem] italic leading-none text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.08)] md:block"
      >
        {num}
      </motion.span>
      <Reveal className={`relative max-w-4xl ${align === "center" ? "mx-auto text-center" : ""}`}>
        <p className="eyebrow mb-5 flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          {label}
        </p>
        <h2 id={id} className="heading text-balance">
          {children}
        </h2>
        {intro ? <p className="mt-6 max-w-2xl text-lg text-muted text-pretty">{intro}</p> : null}
      </Reveal>
    </div>
  );
}
