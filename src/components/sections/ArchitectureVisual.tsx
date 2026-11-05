import { motion, useReducedMotion } from "motion/react";

interface NodeDef {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  primary?: boolean;
}

const nodes: NodeDef[] = [
  { id: "disc", label: "Discovery", x: 80, y: 105, w: 104 },
  { id: "mid", label: "MID Server", x: 80, y: 285, w: 116 },
  { id: "ire", label: "IRE", x: 225, y: 195, w: 70 },
  { id: "cmdb", label: "CMDB", x: 360, y: 300, w: 110, primary: true },
  { id: "csdm", label: "CSDM", x: 430, y: 105, w: 90 },
  { id: "src", label: "SQL / Files", x: 80, y: 470, w: 112 },
  { id: "hub", label: "IntegrationHub ETL", x: 250, y: 440, w: 170 },
  { id: "itam", label: "ITAM", x: 470, y: 450, w: 84 },
];

const edges: [string, string][] = [
  ["disc", "mid"],
  ["mid", "ire"],
  ["ire", "cmdb"],
  ["cmdb", "csdm"],
  ["src", "hub"],
  ["hub", "cmdb"],
  ["cmdb", "itam"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

/** Original SVG illustration: abstract, conceptual enterprise data architecture. */
export function ArchitectureVisual() {
  const reduce = useReducedMotion();
  return (
    <figure className="relative mx-auto w-full max-w-[34rem]" aria-label="Conceptual enterprise architecture illustration">
      <svg viewBox="0 0 560 560" className="h-auto w-full" role="img" aria-label="Abstract diagram of discovery, MID server, IRE, CMDB, CSDM, ITAM and IntegrationHub ETL connected by data pipelines">
        <defs>
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2536F2" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#2536F2" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="360" cy="300" r="170" fill="url(#core-glow)" />
        <circle cx="360" cy="300" r="120" fill="none" stroke="rgba(20,17,15,0.12)" />
        <circle cx="360" cy="300" r="190" fill="none" stroke="rgba(20,17,15,0.18)" strokeDasharray="2 6" />

        {edges.map(([a, b]) => {
          const A = byId[a];
          const B = byId[b];
          const d = `M${A.x} ${A.y} L${B.x} ${B.y}`;
          return (
            <g key={`${a}-${b}`}>
              <path d={d} stroke="#2536F2" strokeOpacity="0.85" strokeWidth="1.3" fill="none" className="flow-line" />
              {!reduce ? (
                <circle r="3" fill="#D2431B">
                  <animateMotion dur={`${4 + (a.length % 3)}s`} repeatCount="indefinite" path={d} />
                </circle>
              ) : null}
            </g>
          );
        })}

        {nodes.map((n, i) => (
          <motion.g
            key={n.id}
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: `${n.x}px ${n.y}px`, transformBox: "view-box" }}
          >
            <rect
              x={n.x - n.w / 2 + 3}
              y={n.y - (n.primary ? 24 : 19) + 3}
              width={n.w}
              height={n.primary ? 48 : 38}
              rx={n.primary ? 14 : 10}
              fill="#14110F"
            />
            <rect
              x={n.x - n.w / 2}
              y={n.y - (n.primary ? 24 : 19)}
              width={n.w}
              height={n.primary ? 48 : 38}
              rx={n.primary ? 14 : 10}
              fill={n.primary ? "#E6E9FF" : "#FFFFFF"}
              stroke={n.primary ? "#2536F2" : "#14110F"}
              strokeWidth={n.primary ? 1.5 : 1}
            />
            <text
              x={n.x}
              y={n.y + (n.primary ? 5 : 4)}
              textAnchor="middle"
              fontSize={n.primary ? 14 : 11.5}
              fontWeight={n.primary ? 600 : 500}
              fill="#14110F"
              fontFamily="'JetBrains Mono Variable', monospace"
            >
              {n.label}
            </text>
          </motion.g>
        ))}

        {[
          { t: "ci_relationships", x: 300, y: 205 },
          { t: "identify → reconcile", x: 215, y: 255 },
          { t: "etl_pipeline", x: 330, y: 400 },
        ].map((l, i) => (
          <g key={l.t} className="float-label" style={{ animationDelay: `${i * 1.3}s` }}>
            <text x={l.x} y={l.y} fontSize="9.5" fill="#D2431B" fillOpacity="1" fontFamily="'JetBrains Mono Variable', monospace">
              {l.t}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mono-label mt-2 text-center text-[0.65rem] uppercase tracking-widest opacity-70">
        Conceptual architecture illustration
      </figcaption>
    </figure>
  );
}

