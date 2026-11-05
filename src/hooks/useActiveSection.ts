import { useEffect, useState } from "react";

/**
 * Tracks which section is currently crossing the upper-middle part of the viewport.
 * Evaluates section boundaries on scroll and resize so rapid jumps, short sections,
 * and reaching the bottom of the page are always accurately reflected.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      rafId = 0;
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;

      // At the very top of the page, always highlight the first section
      if (scrollY < 40 && ids.length > 0) {
        setActive(ids[0]);
        return;
      }

      // At the bottom of the page, highlight the last section
      if (scrollY + viewportH >= docH - 40 && ids.length > 0) {
        setActive(ids[ids.length - 1]);
        return;
      }

      // Probe line at 35% of the viewport height from the top
      const probe = scrollY + viewportH * 0.35;
      let current = ids[0] ?? "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= probe) {
          current = id;
        } else {
          break;
        }
      }

      setActive(current);
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|")]);

  return active;
}
