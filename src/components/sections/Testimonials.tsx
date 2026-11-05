import { motion, useReducedMotion } from "motion/react";
import { Mail } from "lucide-react";
import { useState } from "react";
import { testimonials } from "../../data/testimonials";
import { profile } from "../../data/profile";
import { SectionHeading } from "../layout/SectionHeading";
import { Button } from "../ui/Button";
import { LinkedInIcon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";

const tilts = [-1.8, 1.2, -0.8, 1.6, -1.2, 0.9];

function NoteBoard() {
  const [focused, setFocused] = useState<number | null>(null);
  const reduce = useReducedMotion();
  return (
    <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, i) => {
        const isFocused = focused === i;
        const dimmed = focused !== null && !isFocused;
        return (
          <li key={`${t.name}-${i}`}>
            <motion.button
              type="button"
              onClick={() => setFocused(isFocused ? null : i)}
              aria-pressed={isFocused}
              animate={{
                rotate: reduce || isFocused ? 0 : tilts[i % tilts.length],
                scale: isFocused ? 1.03 : 1,
                opacity: dimmed ? 0.5 : 1,
              }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="card w-full p-7 text-left"
            >
              <blockquote className="text-lg leading-relaxed">“{t.quote}”</blockquote>
              <p className="mt-6 text-sm font-medium">{t.name}</p>
              <p className="mono-label">{t.role}</p>
            </motion.button>
          </li>
        );
      })}
    </ul>
  );
}

export function Testimonials() {
  const hasTestimonials = testimonials.length > 0;
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="section-y border-t border-line bg-surface/40">
      <div className="container-x">
        <SectionHeading label="10 / Collaboration" id="testimonials-title">
          Great engineering is
          <br />
          <span className="serif-accent">a team effort.</span>
        </SectionHeading>

        {hasTestimonials ? (
          <NoteBoard />
        ) : (
          <Reveal className="mt-14">
            <div className="card relative max-w-3xl overflow-hidden p-7 sm:p-10">
              <p className="eyebrow mb-4">Recommendations</p>
              <p className="text-xl leading-relaxed text-balance sm:text-2xl">
                Professional recommendations from colleagues, managers and stakeholders are available on request.
              </p>
              <p className="mt-4 text-muted">
                I only publish testimonials that have been shared directly and with permission.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={`mailto:${profile.email}?subject=${encodeURIComponent("Request for professional recommendations")}`}
                  variant="primary"
                  icon={<Mail size={15} aria-hidden="true" />}
                >
                  Request Recommendations
                </Button>
                <Button href={profile.linkedin} icon={<LinkedInIcon size={15} />}>
                  View on LinkedIn
                </Button>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

