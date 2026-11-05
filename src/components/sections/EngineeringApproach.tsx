import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { processStages, type ProcessStage } from "../../data/process";
import { SectionHeading } from "../layout/SectionHeading";
import { Icon } from "../ui/Icon";

function StageIllustration({ stage }: { stage: ProcessStage }) {
  const ys = [50, 110, 170];
  return (
    <svg viewBox="0 0 400 220" className="h-auto w-full" role="img" aria-label={`Conceptual illustration for the ${stage.name} stage: ${stage.artifacts.join(", ")}`}>
      <rect x="290" y="80" width="90" height="60" rx="12" fill="#18263A" stroke="#0EA5E9" strokeWidth="1.3" />
      <text x="335" y="116" textAnchor="middle" fontSize="12" fill="#F8FAFC" fontWeight="600" fontFamily="'JetBrains Mono Variable', monospace">
        {stage.name}
      </text>
      {stage.artifacts.map((a, i) => (
        <g key={a}>
          <line x1="190" y1={ys[i]} x2="290" y2="110" stroke="#0EA5E9" strokeOpacity="0.6" strokeWidth="1.2" className="flow-line" />
          <rect x="20" y={ys[i] - 17} width="170" height="34" rx="9" fill="#16181D" stroke="rgba(255,255,255,0.2)" />
          <circle cx="38" cy={ys[i]} r="3.5" fill="#38BDF8" />
          <text x="52" y={ys[i] + 4} fontSize="11" fill="#F8FAFC" fontFamily="'JetBrains Mono Variable', monospace">
            {a}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function EngineeringApproach() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const stage = processStages[index];

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const last = processStages.length - 1;
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = i === last ? 0 : i + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = i === 0 ? last : i - 1;
    else return;
    e.preventDefault();
    setIndex(next);
    document.getElementById(`stage-${next}`)?.focus();
  };

  return (
    <section id="approach" aria-labelledby="approach-title" className="section-y border-t border-line bg-surface/40">
      <div className="container-x">
        <SectionHeading label="06 / How I Work" id="approach-title">
          Turning complex requirements
          <br />
          <span className="serif-accent">into reliable platform solutions.</span>
        </SectionHeading>
        <p className="mono-label mt-5">My personal engineering approach — not an official or proprietary methodology.</p>

        <div className="mt-12">
          <div className="relative">
            <div aria-hidden="true" className="absolute inset-x-0 top-[1.55rem] hidden h-px bg-line md:block" />
            <motion.div
              aria-hidden="true"
              className="absolute left-0 top-[1.55rem] hidden h-px bg-gradient-to-r from-brand to-accent md:block"
              animate={{ width: `${(index / (processStages.length - 1)) * 100}%` }}
              transition={{ duration: reduce ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <div role="tablist" aria-label="Engineering stages" className="relative grid grid-cols-3 gap-3 md:grid-cols-6">
              {processStages.map((s, i) => {
                const selected = i === index;
                const reached = i <= index;
                return (
                  <button
                    key={s.name}
                    id={`stage-${i}`}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls="stage-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setIndex(i)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className="group flex min-h-20 flex-col items-center gap-3 text-center"
                  >
                    <span
                      className={`z-10 grid size-12 place-items-center rounded-full border transition-all duration-500 ${
                        selected
                          ? "scale-110 border-brand bg-brand text-white"
                          : reached
                            ? "border-brand/60 bg-card text-brand"
                            : "border-line bg-card text-muted group-hover:border-fg/40"
                      }`}
                    >
                      <Icon name={s.icon} size={20} />
                    </span>
                    <span className={`text-sm transition-colors ${selected ? "text-fg" : "text-muted"}`}>
                      <span className="mr-1 font-mono text-[0.7rem] text-accent">{s.number}</span>
                      {s.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="stage-panel"
            role="tabpanel"
            aria-labelledby={`stage-${index}`}
            className="card mt-10 grid gap-8 overflow-hidden p-6 sm:p-10 md:grid-cols-2 md:items-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.name}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="contents"
              >
                <div>
                  <p className="eyebrow mb-4">Stage {stage.number}</p>
                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{stage.name}</h3>
                  <p className="mt-4 text-lg text-muted">{stage.description}</p>
                </div>
                <div className="rounded-2xl border border-line bg-surface p-4">
                  <StageIllustration stage={stage} />
                  <p className="mono-label mt-1 text-center text-[0.65rem]">Conceptual illustration</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

