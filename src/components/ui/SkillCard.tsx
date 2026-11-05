import { useId, useState } from "react";
import type { Skill } from "../../data/skills";
import { Icon } from "./Icon";

interface SkillCardProps {
  skill: Skill;
  icon: string;
  index: number;
}

export function SkillCard({ skill, icon, index }: SkillCardProps) {
  const tipId = useId();
  const [show, setShow] = useState(false);
  return (
    <li
      className="relative"
      style={{ animation: `skill-in 0.5s ${Math.min(index * 30, 400)}ms both var(--ease-out-soft)` }}
    >
      <button
        type="button"
        aria-describedby={tipId}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        onClick={() => setShow((s) => !s)}
        onKeyDown={(e) => e.key === "Escape" && setShow(false)}
        className="group flex h-full min-h-14 w-full items-center gap-3 rounded-xl border border-line bg-card px-4 py-3 text-left text-sm text-fg transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/60 hover:bg-brand/10"
      >
        <Icon
          name={icon}
          size={18}
          className="shrink-0 text-brand transition-transform duration-300 group-hover:scale-110 group-hover:text-accent"
        />
        <span className="leading-snug">{skill.name}</span>
      </button>
      <div
        id={tipId}
        role="tooltip"
        className={`pointer-events-none absolute inset-x-0 bottom-full z-20 mb-2 rounded-lg border border-line bg-bg px-3 py-2.5 text-xs leading-relaxed text-muted shadow-lg transition-all duration-200 ${
          show ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
      >
        {skill.description}
      </div>
    </li>
  );
}

