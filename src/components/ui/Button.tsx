import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 ease-out-soft select-none whitespace-nowrap";
const sizes = { md: "min-h-10 px-5 text-sm", lg: "min-h-12 px-7 text-[0.95rem]" } as const;
const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_8px_24px_-6px_rgb(14_165_233/0.55)] hover:bg-accent active:scale-[0.98]",
  secondary:
    "border border-brand/70 bg-transparent text-brand hover:border-brand hover:bg-brand/10 active:scale-[0.98]",
  ghost:
    "text-muted hover:text-fg",
};

interface CommonProps {
  variant?: Variant;
  size?: keyof typeof sizes;
  icon?: ReactNode;
  children: ReactNode;
}

type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: AnchorProps | NativeButtonProps) {
  const { variant = "secondary", size = "md", icon, children, className = "", ...rest } = props;
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (typeof rest.href === "string") {
    const { href, target, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        target={target ?? (external ? "_blank" : undefined)}
        rel={external ? "noopener noreferrer" : undefined}
        className={cls}
        {...anchorRest}
      >
        {children}
        {icon}
      </a>
    );
  }
  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={cls} {...buttonRest}>
      {children}
      {icon}
    </button>
  );
}
