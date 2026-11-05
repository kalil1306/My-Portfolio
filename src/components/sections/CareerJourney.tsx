import { motion, useScroll, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { milestones } from "../../data/experience";
import { SectionHeading } from "../layout/SectionHeading";
import { TimelineItem } from "../ui/TimelineItem";

export function CareerJourney() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });

  return (
    <section id="journey" aria-labelledby="journey-title" className="section-y border-t border-line bg-surface/40">
      <div className="container-x">
        <SectionHeading label="02 / My Journey" id="journey-title">
          From platform development
          <br />
          <span className="serif-accent">to enterprise engineering leadership.</span>
        </SectionHeading>

        <div className="relative mt-16 max-w-3xl">
          {/* Animated progress rail, aligned to the centre of the number column */}
          <div aria-hidden="true" className="absolute bottom-0 left-[1.3rem] top-5 w-px bg-line sm:left-[1.7rem]">
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-brand to-accent"
              style={{ scaleY: reduce ? 1 : scrollYProgress }}
            />
          </div>
          <ol ref={listRef} className="relative">
            {milestones.map((m, i) => (
              <TimelineItem
                key={m.number}
                milestone={m}
                isActive={active === i}
                isExpanded={expanded === i}
                isLast={i === milestones.length - 1}
                onInView={() => setActive(i)}
                onToggle={() => {
                  setActive(i);
                  setExpanded((e) => (e === i ? null : i));
                }}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

