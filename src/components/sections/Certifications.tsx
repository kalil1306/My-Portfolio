import { credentialGroups } from "../../data/certifications";
import { SectionHeading } from "../layout/SectionHeading";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="cert-title" className="section-y border-t border-line">
      <div className="container-x">
        <SectionHeading label="07 / Certifications" id="cert-title">
          Continuous learning.
          <br />
          <span className="serif-accent">Recognized expertise.</span>
        </SectionHeading>

        <div className="mt-14 space-y-14">
          {credentialGroups.map((group, gi) => (
            <div key={group.id}>
              <Reveal className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="flex items-center gap-3 text-lg font-semibold tracking-tight">
                  <Icon name={group.icon} className="text-accent" size={20} />
                  {group.label}
                </h3>
                <p className="mono-label">{group.note}</p>
              </Reveal>
              <ul className={`grid gap-4 sm:grid-cols-2 ${group.items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
                {group.items.map((item, i) => (
                  <Reveal as="li" key={item.name} delay={i * 0.06 + gi * 0.02}>
                    <div
                      className={`group card card-pop relative flex h-full min-h-36 flex-col justify-between gap-6 p-6 ${
                        group.id === "learning" ? "border-dashed bg-transparent" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="grid size-10 place-items-center rounded-lg border border-line bg-bg/60 text-brand transition-colors group-hover:text-accent">
                          <Icon name={group.icon} size={18} />
                        </span>
                        {item.detail ? <span className="mono-label rounded-full border border-line px-2.5 py-1">{item.detail}</span> : null}
                      </div>
                      <p className="font-medium leading-snug">{item.name}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

