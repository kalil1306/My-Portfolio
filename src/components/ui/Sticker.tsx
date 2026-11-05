/** Rotating circular text badge. Decorative. */
export function Sticker({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div aria-hidden="true" className={`relative size-28 sm:size-32 ${className}`}>
      <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0 size-full">
        <defs>
          <path id="sticker-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text fontSize="10.5" letterSpacing="2.6" fill="#14110F" fontFamily="'JetBrains Mono Variable', monospace" fontWeight="600">
          <textPath href="#sticker-circle">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-[22%] grid place-items-center rounded-full border border-fg bg-sun font-mono text-sm font-bold">
        KR
      </div>
    </div>
  );
}

