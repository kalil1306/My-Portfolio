import { Asterisk } from "lucide-react";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  tone?: "ink" | "sun";
}

/** Infinite, pausable keyword ticker. Decorative: hidden from assistive tech. */
export function Marquee({ items, reverse = false, tone = "ink" }: MarqueeProps) {
  const toneCls = tone === "ink" ? "bg-surface/80 text-fg/90" : "bg-brand/10 text-accent";
  const row = items.map((item) => (
    <span key={item} className="flex shrink-0 items-center gap-8 px-4 font-sans text-xl font-bold tracking-tight sm:text-2xl">
      {item}
      <Asterisk aria-hidden="true" size={22} className="text-brand" />
    </span>
  ));
  return (
    <div aria-hidden="true" className={`marquee overflow-hidden border-y border-line py-3.5 sm:py-4 ${toneCls}`}>
      <div className={`marquee-track ${reverse ? "rev" : ""}`}>
        <div className="flex">{row}</div>
        <div className="flex">{row}</div>
      </div>
    </div>
  );
}

