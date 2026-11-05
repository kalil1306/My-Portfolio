import type { DiagramVariant } from "../../data/projects";

interface Pos {
  x: number;
  y: number;
}

const W = 124;
const H = 30;

const layouts: Record<DiagramVariant, { nodes: Pos[]; edges: [number, number][] }> = {
  layers: {
    nodes: [
      { x: 200, y: 28 },
      { x: 200, y: 76 },
      { x: 200, y: 124 },
      { x: 200, y: 172 },
    ],
    edges: [[0, 1], [1, 2], [2, 3]],
  },
  pipeline: {
    nodes: [
      { x: 75, y: 100 },
      { x: 200, y: 40 },
      { x: 200, y: 160 },
      { x: 325, y: 100 },
    ],
    edges: [[0, 1], [1, 2], [2, 3]],
  },
  hub: {
    nodes: [
      { x: 75, y: 40 },
      { x: 200, y: 100 },
      { x: 325, y: 40 },
      { x: 325, y: 160 },
    ],
    edges: [[0, 1], [1, 2], [1, 3]],
  },
  assets: {
    nodes: [
      { x: 75, y: 45 },
      { x: 325, y: 45 },
      { x: 75, y: 155 },
      { x: 325, y: 155 },
    ],
    edges: [[0, 1], [2, 3], [0, 2], [1, 3]],
  },
  spokes: {
    nodes: [
      { x: 200, y: 100 },
      { x: 75, y: 45 },
      { x: 325, y: 45 },
      { x: 200, y: 168 },
    ],
    edges: [[0, 1], [0, 2], [0, 3]],
  },
  gates: {
    nodes: [
      { x: 75, y: 30 },
      { x: 150, y: 80 },
      { x: 225, y: 130 },
      { x: 300, y: 175 },
    ],
    edges: [[0, 1], [1, 2], [2, 3]],
  },
  eventFlow: {
    nodes: [
      { x: 80, y: 38 },
      { x: 320, y: 38 },
      { x: 80, y: 162 },
      { x: 320, y: 162 },
    ],
    edges: [[0, 1], [1, 2], [2, 3]],
  },
};

interface ProjectDiagramProps {
  variant: DiagramVariant;
  labels: string[];
  /** Highlights node 0 style when true (larger visual in modal). */
  className?: string;
}

/** Original, conceptual architecture-style illustration. Not an actual production design. */
export function ProjectDiagram({ variant, labels, className = "" }: ProjectDiagramProps) {
  const { nodes, edges } = layouts[variant];
  return (
    <svg
      viewBox="0 0 400 200"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label={`Conceptual diagram: ${labels.join(", ")}`}
    >
      {edges.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#0EA5E9"
          strokeOpacity="0.7"
          strokeWidth="1.2"
          className="flow-line"
        />
      ))}
      {nodes.map((n, i) => (
        <g key={labels[i]}>
          <rect
            x={n.x - W / 2}
            y={n.y - H / 2}
            width={W}
            height={H}
            rx="8"
            fill="#16181D"
            stroke={i === 0 ? "#38BDF8" : "rgba(255,255,255,0.22)"}
            strokeWidth="1"
          />
          <text
            x={n.x}
            y={n.y + 3.5}
            textAnchor="middle"
            fontSize="10"
            fill="#F8FAFC"
            fontFamily="'JetBrains Mono Variable', monospace"
          >
            {labels[i]}
          </text>
        </g>
      ))}
    </svg>
  );
}

