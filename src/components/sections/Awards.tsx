import { Medal, Trophy } from "lucide-react";
import { awards } from "../../data/awards";
import { SectionHeading } from "../layout/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Awards() {
  return (
    <section id="awards" aria-labelledby="awards-title" className="section-y border-t border-line bg-surface/40">
      <div className="container-x">
        <SectionHeading label="08 / Recognition" id="awards-title">
          Recognition that
          <br />
          <span className="serif-accent">reflects the work.</span>
        </SectionHeading>
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {awards.map((a, i) => {
            const gold = a.tone === "gold";
            const Cmp = gold ? Trophy : Medal;
            return (
              <Reveal as="li" key={a.title} delay={i * 0.1}>
                <article
                  className={`card relative h-full overflow-hidden p-7 sm:p-10 ${gold ? "border-gold/30" : "border-silver/25"}`}
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${
                      gold ? "via-gold" : "via-silver"
                    }`}
                  />
                  <div
                    className={`mb-8 grid size-14 place-items-center rounded-full border ${
                      gold ? "border-gold/40 text-gold" : "border-silver/40 text-silver"
                    }`}
                  >
                    <Cmp size={24} aria-hidden="true" strokeWidth={1.5} />
                  </div>
                  {a.year ? <p className={`mono-label mb-3 ${gold ? "text-gold" : "text-silver"}`}>{a.year}</p> : null}
                  <h3 className="text-2xl font-semibold tracking-tight text-balance">
                    {a.title}
                    {a.year ? ` — ${a.year}` : ""}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">{a.description}</p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

