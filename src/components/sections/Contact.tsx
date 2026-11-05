import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, Download, Mail, Phone } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "../../data/profile";
import { SectionHeading } from "../layout/SectionHeading";
import { Button } from "../ui/Button";
import { GitHubIcon, LinkedInIcon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for non-secure contexts / older browsers.
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }
}

interface CopyRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  onCopied: (message: string) => void;
}

function CopyRow({ icon, label, value, href, onCopied }: CopyRowProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const handle = async () => {
    const ok = await copyText(value);
    onCopied(ok ? `${label} copied to clipboard` : `Copy failed — please select the ${label.toLowerCase()} manually`);
    if (ok) {
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="flex items-center gap-3 border-b border-line py-5 last:border-b-0">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-bg/60 text-accent">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="mono-label">{label}</p>
        {href ? (
          <a href={href} className="block truncate text-base font-medium hover:text-accent sm:text-lg">
            {value}
          </a>
        ) : (
          <p className="truncate text-base font-medium sm:text-lg">{value}</p>
        )}
      </div>
      <button
        type="button"
        onClick={handle}
        aria-label={`Copy ${label.toLowerCase()}`}
        className="grid min-h-11 min-w-11 place-items-center rounded-full border border-line px-3 text-muted transition-colors hover:border-brand/60 hover:text-fg"
      >
        {copied ? <Check size={16} className="text-accent" aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      </button>
    </div>
  );
}

export function Contact() {
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);
  const notify = useCallback((message: string) => {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2600);
  }, []);
  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y relative overflow-hidden border-t border-line">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-brand/[0.07] to-transparent" />
      <div className="container-x relative">
        <SectionHeading label="11 / Let's Connect" id="contact-title">
          Let&apos;s build something
          <br />
          <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">meaningful together.</span>
        </SectionHeading>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="max-w-md text-lg leading-relaxed text-muted">
              Interested in ServiceNow development, ITOM/ITAM implementations, CMDB &amp; CSDM, enterprise integrations
              or technical collaboration? I&apos;d be happy to connect.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={`mailto:${profile.email}`} variant="primary" size="lg" icon={<Mail size={16} aria-hidden="true" />}>
                Send an Email
              </Button>
              <Button href={profile.linkedin} size="lg" icon={<LinkedInIcon size={16} />}>
                Connect on LinkedIn
              </Button>
              <Button
                href={profile.resumeUrl}
                download={profile.resumeFilename}
                size="lg"
                icon={<Download size={16} aria-hidden="true" />}
              >
                Download Resume
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card px-5 sm:px-8">
              <CopyRow icon={<Mail size={18} aria-hidden="true" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} onCopied={notify} />
              <CopyRow icon={<Phone size={18} aria-hidden="true" />} label="Phone" value={profile.phone} href={profile.phoneHref} onCopied={notify} />
              <div className="flex items-center gap-3 border-b border-line py-5 last:border-b-0">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-bg/60 text-accent">
                  <LinkedInIcon />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="mono-label">LinkedIn</p>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="block truncate text-base font-medium hover:text-accent sm:text-lg">
                    linkedin.com/in/kalilur-rahman
                  </a>
                </div>
              </div>
              {profile.github ? (
                <div className="flex items-center gap-3 py-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-bg/60 text-accent">
                    <GitHubIcon />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="mono-label">GitHub</p>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="block truncate text-base font-medium hover:text-accent sm:text-lg">
                      {profile.github.replace(/^https?:\/\//, "")}
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>

      <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4">
        <AnimatePresence>
          {toast ? (
            <motion.p
              key={toast}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex items-center gap-2 rounded-full border border-accent/30 bg-surface px-5 py-3 text-sm shadow-lg"
            >
              <Check size={15} className="text-accent" aria-hidden="true" />
              {toast}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}

