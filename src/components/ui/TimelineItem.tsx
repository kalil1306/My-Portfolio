import { motion, useInView, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Milestone } from "../../data/experience";
import { Badge } from "./Badge";

interface TimelineItemProps {
  milestone: Milestone;
  isActive: boolean;
  isExpanded: boolean;
  isLast: boolean;
  onInView: () => void;
  onToggle: () => void;
}

export function TimelineItem({ milestone, isActive, isExpanded, isLast, onInView, onToggle }: TimelineItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  const reduce = useReducedMotion();
  // Notify parent when this item crosses the viewport centre.
  const centered = useInView(ref, { margin: "-35% 0px -35% 0px" });
  useEffect(() => {
    if (centered) onInView();
  }, [centered, onInView]);

  const panelId = `milestone-${milestone.number}`;
  return (
    <li ref={ref} className="relative grid grid-cols-[2.75rem_1fr] gap-x-4 sm:grid-cols-[3.5rem_1fr] sm:gap-x-8">
      <div className="relative flex flex-col items-center">
        <motion.span
          animate={{ scale: isActive ? 1.08 : 1 }}
          className={`z-10 grid size-11 shrink-0 place-items-center rounded-full border font-mono text-xs transition-colors duration-500 sm:size-14 sm:text-sm ${
            isActive ? "border-brand bg-brand text-white" : "border-line bg-card text-muted"
          }`}
        >
          {milestone.number}
        </motion.span>
        {!isLast ? <span aria-hidden="true" className="mt-2 w-px flex-1 bg-line" /> : null}
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pb-12 sm:pb-16"
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-controls={panelId}
          className={`w-full rounded-2xl border p-5 text-left transition-all duration-500 sm:p-7 ${
            isActive ? "border-brand/40 bg-card" : "border-line bg-card/50 hover:border-fg/40"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mono-label mb-2 text-accent">{milestone.period}</p>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{milestone.title}</h3>
              {milestone.subtitle ? <p className="mt-1 text-sm text-fg/80">{milestone.subtitle}</p> : null}
            </div>
            <ChevronDown
              aria-hidden="true"
              size={20}
              className={`mt-1 shrink-0 text-muted transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            />
          </div>
          <p className="mt-3 max-w-xl text-muted">{milestone.summary}</p>

          <div
            id={panelId}
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out-soft ${
              isExpanded ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="mono-label mb-3">FOCUS</p>
              <ul className="flex flex-wrap gap-2">
                {milestone.focus.map((f) => (
                  <li key={f}>
                    <Badge tone="accent">{f}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </button>
      </motion.div>
    </li>
  );
}
