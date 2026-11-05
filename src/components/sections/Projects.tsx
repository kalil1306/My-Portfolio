import { useCallback, useState } from "react";
import { projects, type Project } from "../../data/projects";
import { SectionHeading } from "../layout/SectionHeading";
import { Badge } from "../ui/Badge";
import { EventManagementArchitecture } from "../ui/EventManagementArchitecture";
import { Modal } from "../ui/Modal";
import { ProjectCard } from "../ui/ProjectCard";
import { ProjectDiagram } from "../ui/ProjectDiagram";
import { Reveal } from "../ui/Reveal";

function CaseStudyBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-6">
      <h3 className="eyebrow mb-3">{title}</h3>
      <div className="text-[0.95rem] leading-relaxed text-muted">{children}</div>
    </section>
  );
}

function CaseStudy({ project }: { project: Project }) {
  const { caseStudy: cs } = project;
  return (
    <div>
      <header className="p-6 pb-2 pr-20 sm:p-10 sm:pb-4 sm:pr-24">
        <p className="mono-label mb-3 text-accent">
          Case study {project.number} · {project.category}
        </p>
        <h2 id="case-study-title" className="text-2xl font-semibold tracking-tight text-balance sm:text-4xl">
          {project.title}
        </h2>
      </header>
      <div className="px-6 pb-8 sm:px-10 sm:pb-10">
        {project.architectureType === "eventManagement" ? (
          <div className="my-6">
            <EventManagementArchitecture />
          </div>
        ) : (
          <div className="my-6 rounded-2xl border border-line bg-surface p-5">
            <ProjectDiagram variant={project.diagram.variant} labels={project.diagram.labels} />
            <p className="mono-label mt-2 text-center text-[0.65rem]">
              Conceptual diagram — illustrative only, not an actual production design.
            </p>
          </div>
        )}

        <CaseStudyBlock title="Project overview">
          <div className="space-y-3">
            {cs.overview.split("\n\n").map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </CaseStudyBlock>
        <CaseStudyBlock title="Business context">
          <p>{cs.businessContext}</p>
        </CaseStudyBlock>
        <CaseStudyBlock title="Engineering challenge">
          <p>{cs.challenge}</p>
        </CaseStudyBlock>
        <CaseStudyBlock title="Solution approach">
          {cs.approachSteps ? (
            <ol className="space-y-2.5">
              {cs.approachSteps.map((step, idx) => (
                <li key={step} className="flex gap-3">
                  <span className="font-mono text-xs font-semibold text-accent">
                    {String(idx + 1).padStart(2, "0")}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p>{cs.approach}</p>
          )}
        </CaseStudyBlock>
        <CaseStudyBlock title="Technical implementation">
          {cs.technicalSections ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {cs.technicalSections.map((sec) => (
                <div key={sec.title} className="rounded-xl border border-line bg-bg/70 p-4 sm:p-5">
                  <h4 className="font-semibold text-fg">{sec.title}</h4>
                  {sec.intro ? <p className="mt-2 text-xs leading-relaxed text-muted">{sec.intro}</p> : null}
                  <ul className="mt-3 space-y-2">
                    {sec.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm">
                        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {sec.note ? (
                    <p className="mt-3 border-t border-line pt-2.5 font-mono text-xs text-brand">
                      {sec.note}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          ) : (
            <ul className="space-y-2.5">
              {cs.implementation.map((i) => (
                <li key={i} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                  {i}
                </li>
              ))}
            </ul>
          )}
        </CaseStudyBlock>
        <CaseStudyBlock title="Technologies used">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li key={t}>
                <Badge tone="accent">{t}</Badge>
              </li>
            ))}
          </ul>
        </CaseStudyBlock>
        <CaseStudyBlock title={cs.valueBullets ? "Business / engineering value" : "Outcome & measurable impact"}>
          {cs.valueBullets ? (
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {cs.valueBullets.map((v) => (
                <li key={v} className="flex items-start gap-2.5 text-fg">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-fg">{cs.outcome}</p>
          )}
        </CaseStudyBlock>

        <p className="mono-label border-t border-line pt-5 text-[0.68rem] leading-relaxed">
          Summarised from documented responsibilities and achievements. Client-specific and confidential details are
          intentionally omitted; this work may have been delivered as part of a wider team.
        </p>
      </div>
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-y border-t border-line">
      <div className="container-x">
        <SectionHeading label="05 / Selected Engineering Work" id="projects-title">
          Complex challenges.
          <br />
          Thoughtful engineering.
          <br />
          <span className="serif-accent">Measurable outcomes.</span>
        </SectionHeading>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.number} delay={(i % 3) * 0.08}>
              <ProjectCard project={p} onOpen={() => setSelected(p)} />
            </Reveal>
          ))}
        </ul>
      </div>

      <Modal open={selected !== null} onClose={close} titleId="case-study-title">
        {selected ? <CaseStudy project={selected} /> : null}
      </Modal>
    </section>
  );
}
