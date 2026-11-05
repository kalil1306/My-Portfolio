import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";
import { Badge } from "./Badge";
import { ProjectDiagram } from "./ProjectDiagram";

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="group card card-pop relative flex h-full flex-col overflow-hidden">
      <div className="relative border-b border-line bg-surface p-5">
        <ProjectDiagram
          variant={project.diagram.variant}
          labels={project.diagram.labels}
          className="opacity-90 transition-opacity group-hover:opacity-100"
        />
        <span className="mono-label absolute bottom-2 left-5 text-[0.62rem] uppercase tracking-widest opacity-70">
          {project.architectureType ? "Illustrative architecture" : "Conceptual diagram"}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {project.cardHeader ? (
          <div className="mb-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {project.cardHeader}
            </span>
          </div>
        ) : (
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="font-mono text-sm text-accent">{project.number}</span>
            <span className="mono-label text-right">{project.category}</span>
          </div>
        )}
        <h3 className="text-xl font-semibold leading-snug tracking-tight">{project.title}</h3>
        {project.subtitleLine ? (
          <p className="mt-2 font-mono text-xs text-brand">{project.subtitleLine}</p>
        ) : null}
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
        {project.impact ? (
          <p className="mt-4 rounded-lg border border-brand/25 bg-brand/[0.07] px-3 py-2 text-sm text-brand">
            {project.impact}
          </p>
        ) : null}
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
            </li>
          ))}
          {project.tags.length > 4 ? (
            <li>
              <Badge>+{project.tags.length - 4}</Badge>
            </li>
          ) : null}
        </ul>
        <button
          type="button"
          onClick={onOpen}
          aria-haspopup="dialog"
          className="mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-6 text-sm font-medium text-fg transition-colors after:absolute after:inset-0 after:content-[''] hover:text-accent"
        >
          {project.ctaLabel ?? "View Case Study"}
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
          <span className="sr-only"> — {project.title}</span>
        </button>
      </div>
    </article>
  );
}
