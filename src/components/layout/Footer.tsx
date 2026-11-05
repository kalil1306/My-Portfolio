import { ArrowUp, Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { GitHubIcon, LinkedInIcon } from "../ui/Icon";

const linkCls =
  "inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-fg";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="container-x py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="grid size-11 place-items-center rounded-xl border border-line bg-card font-mono text-sm font-semibold">
              {profile.monogram}
            </span>
            <p className="mt-5 text-lg font-medium tracking-tight">Designed with intention. Engineered with precision.</p>
            <p className="mt-3 text-sm text-muted">{profile.name}</p>
            <p className="text-sm text-muted">ServiceNow Consultant | Chennai, India</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-1 md:flex-col md:gap-x-0">
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  <LinkedInIcon size={15} /> LinkedIn
                </a>
              </li>
              {profile.github ? (
                <li>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    <GitHubIcon size={15} /> GitHub
                  </a>
                </li>
              ) : null}
              <li>
                <a href={`mailto:${profile.email}`} className={linkCls}>
                  <Mail size={15} aria-hidden="true" /> Email
                </a>
              </li>
              <li>
                <a href="#home" className={linkCls}>
                  <ArrowUp size={15} aria-hidden="true" /> Back to top
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mono-label mt-12 border-t border-line pt-6">
          © {year} {profile.name}. All rights reserved. Not affiliated with or endorsed by ServiceNow, Verizon or Stellantis.
        </p>
      </div>
    </footer>
  );
}

