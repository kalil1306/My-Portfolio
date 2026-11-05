import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "default" | "accent";
  className?: string;
}

export function Badge({ children, tone = "default", className = "" }: BadgeProps) {
  const tones = {
    default: "border-line bg-surface text-muted",
    accent: "border-brand/35 bg-brand/10 text-accent",
  };
  return (
    <span
      className={`mono-label inline-flex items-center rounded-full border px-3 py-1 leading-none ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
