import { stats } from "../../data/profile";
import { SectionHeading } from "../layout/SectionHeading";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { Reveal } from "../ui/Reveal";

const paragraphs = [
  "I am a performance-driven ServiceNow Consultant with nearly six years of experience delivering enterprise service management solutions.",
  "My journey spans platform development, enterprise integrations, CMDB & CSDM data modeling, ITOM Discovery, ITAM lifecycle management and technical squad guidance.",
  "I enjoy transforming complex technical requirements into maintainable, scalable and OOTB-aligned solutions.",
  "Beyond development, I focus on engineering governance, knowledge sharing, mentoring and building solutions that deliver measurable business outcomes.",
];

const statTones = [
  { box: "border-brand/40 bg-brand/15 text-fg", num: "text-brand", label: "text-muted" },
  { box: "border-line bg-card text-fg", num: "text-accent", label: "text-muted" },
  { box: "border-line bg-card text-fg", num: "text-accent", label: "text-muted" },
  { box: "border-brand/30 bg-surface text-fg", num: "text-brand", label: "text-muted" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y border-t border-line">
      <div className="container-x">
        <SectionHeading label="01 / About" id="about-title">
          Engineering systems.
          <br />
          Leading people.
          <br />
          <span className="serif-accent">Delivering impact.</span>
        </SectionHeading>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="space-y-6 text-lg leading-relaxed text-muted">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className={i === 0 ? "text-xl text-fg/90" : undefined}>{p}</p>
              </Reveal>
            ))}
          </div>

          <dl className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className={`card card-pop flex flex-col justify-between gap-8 p-6 sm:p-7 ${statTones[i].box} ${
                  i === 0 || i === 3 ? "col-span-2" : ""
                }`}
              >
                <dd className={`order-1 text-5xl font-bold tracking-tighter sm:text-6xl ${statTones[i].num}`}>
                  <AnimatedCounter value={s.value} display={s.display} suffix={s.suffix} />
                </dd>
                <dt className={`order-2 text-sm font-medium ${statTones[i].label}`}>{s.label}</dt>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

