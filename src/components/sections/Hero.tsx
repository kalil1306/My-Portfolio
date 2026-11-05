import { motion, useReducedMotion } from "motion/react";
import { Download, Mail, Phone } from "lucide-react";
import { heroKeywords, profile } from "../../data/profile";
import { Button } from "../ui/Button";
import { GitHubIcon, LinkedInIcon } from "../ui/Icon";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (i: number) => ({
    initial: reduce ? false : ({ opacity: 0, y: 20 } as const),
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: EASE },
  });

  const socialIconCls =
    "grid size-9 place-items-center rounded-full border border-line bg-surface/60 text-brand transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white";

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-dvh items-end overflow-hidden pt-24 lg:items-center lg:pt-20"
    >
      <div aria-hidden="true" className="dot-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-1/4 size-[32rem] rounded-full bg-brand/10 blur-[120px]"
      />

      <div className="container-x relative grid w-full items-center gap-10 lg:grid-cols-[1.22fr_0.78fr] lg:gap-4">
        {/* Left column: reference-style greeting, bold name with blue accent + cursor bar, bio, social icons, and buttons */}
        <div className="pb-12 pt-6 lg:py-16">
          <motion.p {...fade(0)} className="text-lg font-bold tracking-tight text-fg sm:text-xl">
            Hi, There!
          </motion.p>

          <motion.h1 id="hero-title" {...fade(1)} className="display mt-3">
            <span className="text-fg">I&apos;m </span>
            <span className="text-brand">Kalilur Rahman</span>
            <span
              aria-hidden="true"
              className="cursor-bar ml-1.5 inline-block h-[0.88em] w-[5px] translate-y-[0.08em] bg-brand align-baseline"
            />
          </motion.h1>

          <motion.p {...fade(2)} className="mt-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-accent sm:text-sm">
            {profile.name} · {profile.title} · ITOM, ITAM &amp; CMDB Specialist
          </motion.p>

          <motion.p {...fade(3)} className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Nearly six years of experience building and delivering enterprise ServiceNow solutions across ITSM, ITOM,
            ITAM, CMDB and CSDM. I combine hands-on platform development, enterprise integrations and technical team
            guidance to deliver scalable, reliable and OOTB-aligned solutions.
          </motion.p>

          <motion.ul {...fade(4)} aria-label="Key technologies" className="mt-5 flex flex-wrap gap-2">
            {heroKeywords.map((k) => (
              <li
                key={k}
                className="rounded-md border border-line bg-surface/80 px-3 py-1 font-mono text-xs text-muted"
              >
                {k}
              </li>
            ))}
          </motion.ul>

          {/* Social / contact icon row matching the reference layout */}
          <motion.div {...fade(5)} className="mt-6 flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={socialIconCls}
            >
              <LinkedInIcon size={15} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email" className={socialIconCls}>
              <Mail size={15} aria-hidden="true" />
            </a>
            <a href={profile.phoneHref} aria-label="Call phone number" className={socialIconCls}>
              <Phone size={15} aria-hidden="true" />
            </a>
            {profile.github ? (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className={socialIconCls}
              >
                <GitHubIcon size={15} />
              </a>
            ) : null}
          </motion.div>

          {/* Reference-style dual CTA buttons: solid blue "Hire me" + outlined blue "Download CV" */}
          <motion.div {...fade(6)} className="mt-7 flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary" size="lg">
              Hire me
            </Button>
            <Button
              href={profile.resumeUrl}
              download={profile.resumeFilename}
              variant="secondary"
              size="lg"
              icon={<Download size={16} aria-hidden="true" />}
            >
              Download CV
            </Button>
          </motion.div>
        </div>

        {/* Right column: cutout portrait anchored cleanly to the bottom like the reference image */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          className="relative flex items-end justify-center self-end lg:justify-end"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 bottom-0 h-4/5 rounded-t-full bg-gradient-to-t from-brand/15 via-brand/5 to-transparent blur-2xl"
          />
          <img
            src="/kalil-portrait.png"
            alt={`${profile.name} — ${profile.title}`}
            className="relative z-10 block h-auto max-h-[540px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.65)] sm:max-h-[600px] lg:max-h-[680px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
