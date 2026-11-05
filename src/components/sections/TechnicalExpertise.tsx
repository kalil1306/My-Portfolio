import { useState } from "react";
import { skillCategories } from "../../data/skills";
import { SectionHeading } from "../layout/SectionHeading";
import { Icon } from "../ui/Icon";
import { SkillCard } from "../ui/SkillCard";

export function TechnicalExpertise() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0];

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const last = skillCategories.length - 1;
    let next = i;
    if (e.key === "ArrowRight") next = i === last ? 0 : i + 1;
    else if (e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActiveId(skillCategories[next].id);
    document.getElementById(`tab-${skillCategories[next].id}`)?.focus();
  };

  return (
    <section id="expertise" aria-labelledby="expertise-title" className="section-y border-t border-line">
      <div className="container-x">
        <SectionHeading label="03 / Technical Toolkit" id="expertise-title">
          Deep platform knowledge.
          <br />
          <span className="serif-accent">A broader engineering mindset.</span>
        </SectionHeading>

        <div className="mt-14">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {skillCategories.map((c, i) => {
              const selected = c.id === activeId;
              return (
                <button
                  key={c.id}
                  id={`tab-${c.id}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`panel-${c.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(c.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`flex min-h-12 shrink-0 items-center gap-2.5 rounded-full border px-5 text-sm transition-all duration-300 ${
                    selected
                      ? "border-brand bg-brand/15 text-fg"
                      : "border-line text-muted hover:border-fg/40 hover:text-fg"
                  }`}
                >
                  <span className="font-mono text-[0.7rem] text-accent">{c.index}</span>
                  {c.label}
                </button>
              );
            })}
          </div>

          <div
            key={active.id}
            id={`panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="mt-8 rounded-3xl border border-line bg-surface/60 p-5 sm:p-8"
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-xl border border-line bg-card text-accent">
                <Icon name={active.icon} size={22} />
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{active.label}</h3>
                <p className="text-sm text-muted">{active.summary}</p>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {active.skills.map((s, i) => (
                <SkillCard key={s.name} skill={s} icon={active.icon} index={i} />
              ))}
            </ul>
            <p className="mono-label mt-6 text-[0.68rem]">Hover, focus or tap a card for a short description.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

