import { GraduationCap } from "lucide-react";
import { SectionHeading } from "../layout/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section-y border-t border-line">
      <div className="container-x">
        <SectionHeading label="09 / Education" id="education-title">
          Academic foundation.
        </SectionHeading>
        <Reveal className="mt-12 max-w-3xl">
          <div className="grid grid-cols-[auto_1fr] gap-x-6 sm:gap-x-10">
            <div className="flex flex-col items-center">
              <span className="grid size-12 place-items-center rounded-full border border-brand/50 bg-card text-brand">
                <GraduationCap size={20} aria-hidden="true" />
              </span>
              <span aria-hidden="true" className="mt-2 w-px flex-1 bg-gradient-to-b from-brand/50 to-transparent" />
            </div>
            <article className="card p-6 sm:p-9">
              <p className="mono-label mb-3 text-accent">Graduated · May 2020</p>
              <h3 className="text-2xl font-semibold tracking-tight">Bachelor of Technology (B.Tech)</h3>
              <p className="mt-1 text-lg text-fg/80">Computer Science &amp; Engineering</p>
              <p className="mt-4 text-muted">Vel Tech University, Chennai</p>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

