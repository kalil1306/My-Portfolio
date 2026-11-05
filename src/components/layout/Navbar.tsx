import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "../../data/profile";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { Button } from "../ui/Button";
import { LinkedInIcon } from "../ui/Icon";

interface NavbarProps {
  activeId: string;
}

export function Navbar({ activeId }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [overrideId, setOverrideId] = useState<string | null>(null);
  const overrideTimeoutRef = useRef<number | undefined>(undefined);
  const currentActiveId = overrideId ?? activeId;
  const progress = useScrollProgress();
  const reduce = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setOverrideId(null);
  }, [activeId]);

  useEffect(() => () => window.clearTimeout(overrideTimeoutRef.current), []);

  const handleNavClick = (id: string) => {
    setOverrideId(id);
    window.clearTimeout(overrideTimeoutRef.current);
    overrideTimeoutRef.current = window.setTimeout(() => {
      setOverrideId(null);
    }, 900);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled || open ? "border-line bg-bg/90 backdrop-blur-md" : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            aria-label={`${profile.name} — back to top`}
            className="text-xl font-extrabold tracking-tight text-fg sm:text-2xl"
          >
            ARK
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navItems.map((item) => {
                const isActive = currentActiveId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={`relative py-2 text-sm font-medium transition-colors ${
                        isActive ? "text-brand" : "text-fg/85 hover:text-brand"
                      }`}
                    >
                      {item.label}
                      {isActive ? (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand"
                          transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                        />
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href="#contact"
              onClick={() => handleNavClick("contact")}
              variant="secondary"
              className="hidden sm:inline-flex"
            >
              Contact me
            </Button>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-lg border border-line text-fg lg:hidden"
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-brand to-accent"
          style={{ scaleX: progress }}
        />
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto border-t border-line bg-bg lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile" className="container-x py-8">
              <ul className="flex flex-col">
                {navItems.map((item, i) => (
                  <li key={item.id} className="border-b border-line">
                    <a
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={`#${item.id}`}
                      onClick={() => {
                        handleNavClick(item.id);
                        setOpen(false);
                      }}
                      aria-current={currentActiveId === item.id ? "location" : undefined}
                      className={`flex min-h-14 items-center justify-between text-2xl font-medium tracking-tight ${
                        currentActiveId === item.id ? "text-brand" : "text-muted"
                      }`}
                    >
                      {item.label}
                      <span className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <Button
                  href="#contact"
                  onClick={() => {
                    handleNavClick("contact");
                    setOpen(false);
                  }}
                  variant="primary"
                  size="lg"
                >
                  Contact me
                </Button>
                <Button href={profile.linkedin} size="lg" icon={<LinkedInIcon size={16} />}>
                  LinkedIn
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
