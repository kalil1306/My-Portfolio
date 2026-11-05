import { ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import { experiences, type ExperienceEntry } from "../../data/experience";
import { SectionHeading } from "../layout/SectionHeading";
import { Reveal } from "../ui/Reveal";

function ExperienceCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const [open, setOpen] = useState(false);
  const listId = `resp-${index}`;
  const visible = open ? entry.responsibilities : entry.responsibilities.slice(0, entry.previewCount);
  const hidden = entry.responsibilities.length - entry.previewCount;

  return (
    <Reveal as="article" className="card overflow-hidden">
      <div className="grid gap-px bg-line md:grid-cols-[1fr_auto]">
        <div className="bg-card p-6 sm:p-9">
          <p className="mono-label mb-3 text-accent">
            {String(index + 1).padStart(2, "0")} · {entry.period}
          </p>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">{entry.company}</h3>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">{entry.role}</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted">
            <MapPin size={14} aria-hidden="true" /> {entry.location}
          </p>
          <p className="mt-5 text-sm text-muted">
            <span className="mono-label mr-2">FOCUS</span>
            <span className="text-fg/90">{entry.focus}</span>
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-px bg-line md:w-80 md:grid-cols-1">
          {entry.highlights.map((h) => (
            <li key={h.label} className="flex flex-col justify-center gap-1 bg-surface p-4 sm:p-6">
              <span className="text-2xl font-semibold tracking-tight text-accent sm:text-3xl">{h.value}</span>
              <span className="text-xs leading-snug text-muted">{h.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line bg-card p-6 sm:p-9">
        <h4 className="mono-label mb-5">RESPONSIBILITIES &amp; ACHIEVEMENTS</h4>
        <ul id={listId} className="space-y-3.5">
          {visible.map((r) => (
            <li key={r} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
              {r}
            </li>
          ))}
        </ul>
        {hidden > 0 ? (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={listId}
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-fg transition-colors hover:text-accent"
          >
            {open ? "Show less" : `Show ${hidden} more`}
            <ChevronDown
              size={16}
              aria-hidden="true"
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>
        ) : null}
      </div>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-y border-t border-line bg-surface/40">
      <div className="container-x">
        <SectionHeading label="04 / Professional Experience" id="experience-title">
          Where engineering meets
          <br />
          <span className="serif-accent">enterprise impact.</span>
        </SectionHeading>
        <div className="mt-14 space-y-8">
          {experiences.map((e, i) => (
            <ExperienceCard key={e.company} entry={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

