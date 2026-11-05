import {
  Activity,
  Bell,
  Cpu,
  Filter,
  GitBranch,
  Radio,
  Server,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

interface ArchStage {
  id: string;
  phase: "ingestion" | "processing" | "alert" | "orchestration";
  phaseLabel: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  badges: string[];
  description: string;
}

const phaseStyles: Record<
  ArchStage["phase"],
  { border: string; badge: string; glow: string; dot: string; accentText: string }
> = {
  ingestion: {
    border: "border-sky-400/40 hover:border-sky-400",
    badge: "border-sky-400/30 bg-sky-400/10 text-sky-300",
    glow: "bg-sky-500/15 text-sky-300 border-sky-400/40",
    dot: "bg-sky-400",
    accentText: "text-sky-300",
  },
  processing: {
    border: "border-indigo-400/40 hover:border-indigo-400",
    badge: "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
    glow: "bg-indigo-500/15 text-indigo-300 border-indigo-400/40",
    dot: "bg-indigo-400",
    accentText: "text-indigo-300",
  },
  alert: {
    border: "border-amber-400/40 hover:border-amber-400",
    badge: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    glow: "bg-amber-500/15 text-amber-300 border-amber-400/40",
    dot: "bg-amber-400",
    accentText: "text-amber-300",
  },
  orchestration: {
    border: "border-emerald-400/40 hover:border-emerald-400",
    badge: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    glow: "bg-emerald-500/15 text-emerald-300 border-emerald-400/40",
    dot: "bg-emerald-400",
    accentText: "text-emerald-300",
  },
};

const stages: ArchStage[] = [
  {
    id: "sources",
    phase: "ingestion",
    phaseLabel: "01 · Monitoring Sources",
    title: "Enterprise Monitoring Integrations",
    subtitle: "External telemetry & event producers",
    icon: Server,
    badges: ["SiteWatcher", "Spectrum", "OSSI", "SevOne"],
    description:
      "Upstream monitoring platforms generating infrastructure and application events along with additional information payloads.",
  },
  {
    id: "kafka",
    phase: "ingestion",
    phaseLabel: "02 · Event Ingestion",
    title: "Kafka Connection",
    subtitle: "Streaming event ingestion pipeline",
    icon: Radio,
    badges: ["Kafka Connection", "Event Stream Ingestion"],
    description:
      "Configured Kafka Connection to receive incoming monitoring event streams into the ServiceNow Event Management pipeline.",
  },
  {
    id: "connector",
    phase: "ingestion",
    phaseLabel: "03 · Push Connectivity",
    title: "Custom Push Connector",
    subtitle: "Connector & payload intake",
    icon: Cpu,
    badges: ["Custom Push Connector", "Payload Intake"],
    description:
      "Implemented a Custom Push Connector to accept incoming monitoring events and pass their payloads into ServiceNow Event Management.",
  },
  {
    id: "payload",
    phase: "processing",
    phaseLabel: "04 · Payload Processing",
    title: "Incoming Event Payload Processing",
    subtitle: "Structured event & metadata extraction",
    icon: Activity,
    badges: ["Event Additional Information", "Event Data Processing"],
    description:
      "Processes incoming event information and parses the additional information received in the event payload for downstream rule evaluation.",
  },
  {
    id: "rules",
    phase: "processing",
    phaseLabel: "05 · Event Processing Rules",
    title: "ServiceNow Event Rules",
    subtitle: "Filtering, thresholds & CI association",
    icon: Filter,
    badges: [
      "Event Generation Conditions",
      "Event Ignore Conditions",
      "Threshold Configuration",
      "CI Binding",
    ],
    description:
      "Controls how incoming events are processed: defines which events generate events, filters out ignored events, applies event thresholds, binds events to Configuration Items, and processes additional information.",
  },
  {
    id: "alerts",
    phase: "alert",
    phaseLabel: "06 · Alert Evaluation",
    title: "ServiceNow Alert Management Rules",
    subtitle: "Monitoring-source-specific alert rules",
    icon: Bell,
    badges: ["SiteWatcher", "Spectrum", "OSSI", "SevOne"],
    description:
      "Source-specific Alert Management Rules configured for SiteWatcher, Spectrum, OSSI and SevOne evaluate processed alerts and trigger the corresponding Subflow.",
  },
  {
    id: "subflow",
    phase: "orchestration",
    phaseLabel: "07 · Workflow Automation",
    title: "Configured Subflow Execution",
    subtitle: "Flow Designer reusable Subflows",
    icon: GitBranch,
    badges: ["Flow Designer", "Reusable Subflows"],
    description:
      "Executes reusable Flow Designer Subflows triggered by the matching Alert Management Rules.",
  },
  {
    id: "incident",
    phase: "orchestration",
    phaseLabel: "08 · Incident Orchestration",
    title: "Automated Incident Creation",
    subtitle: "ServiceNow Incident Management",
    icon: ShieldAlert,
    badges: ["Incident Creation", "Event-to-Incident Automation"],
    description:
      "Automates incident creation based on configured alert processing conditions, connecting Event Management with Incident Management through workflow automation.",
  },
];

export function EventManagementArchitecture() {
  const [activeId, setActiveId] = useState<string>(stages[4].id);
  const activeStage = stages.find((s) => s.id === activeId) ?? stages[4];
  const activeStyle = phaseStyles[activeStage.phase];

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0B101B] p-4 text-slate-100 shadow-xl sm:p-6">
      {/* Header & Legend */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/90 pb-4">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-sky-400">
            Interactive Architecture Flow · Hover or select any node
          </p>
          <h4 className="mt-1 text-base font-semibold tracking-tight text-white sm:text-lg">
            End-to-End Event Ingestion, Rule Processing &amp; Incident Orchestration
          </h4>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[0.7rem] font-mono text-slate-300">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-sky-400" /> Ingestion
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-indigo-400" /> Event Processing
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-amber-400" /> Alert Management
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-emerald-400" /> Incident Orchestration
          </span>
        </div>
      </div>

      {/* Interactive Inspector Banner */}
      <div
        aria-live="polite"
        className="mt-4 rounded-xl border border-slate-800 bg-[#111827] p-4 transition-colors"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className={`font-mono text-xs uppercase tracking-wider ${activeStyle.accentText}`}>
            {activeStage.phaseLabel} — {activeStage.title}
          </span>
          <span className="font-mono text-[0.68rem] text-slate-400">{activeStage.subtitle}</span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
          {activeStage.description}
        </p>
      </div>

      {/* Pipeline Nodes */}
      <div className="mt-5 flex flex-col items-center">
        {stages.map((stage, idx) => {
          const style = phaseStyles[stage.phase];
          const IconCmp = stage.icon;
          const isSelected = stage.id === activeId;

          return (
            <div key={stage.id} className="flex w-full flex-col items-center">
              <button
                type="button"
                onMouseEnter={() => setActiveId(stage.id)}
                onFocus={() => setActiveId(stage.id)}
                onClick={() => setActiveId(stage.id)}
                aria-pressed={isSelected}
                className={`group relative w-full rounded-xl border bg-[#11192A]/90 p-3.5 text-left transition-all duration-200 sm:p-4 ${
                  style.border
                } ${isSelected ? "ring-1 ring-white/30 bg-[#152036]" : ""}`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border ${style.glow}`}
                    >
                      <IconCmp size={17} aria-hidden="true" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`font-mono text-[0.65rem] uppercase tracking-wider ${style.accentText}`}>
                          {stage.phaseLabel}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm font-semibold text-white sm:text-base">
                        {stage.title}
                      </p>
                      <p className="text-xs text-slate-400">{stage.subtitle}</p>
                    </div>
                  </div>

                  <ul className="flex flex-wrap gap-1.5 sm:max-w-[52%] sm:justify-end">
                    {stage.badges.map((b) => (
                      <li
                        key={b}
                        className={`rounded-md border px-2.5 py-1 font-mono text-[0.68rem] leading-none ${style.badge}`}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </button>

              {/* Animated Flow Connector */}
              {idx < stages.length - 1 ? (
                <div aria-hidden="true" className="my-0.5 flex flex-col items-center">
                  <svg width="24" height="26" viewBox="0 0 24 26" className="overflow-visible">
                    <line
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                      stroke="#60A5FA"
                      strokeWidth="1.5"
                      strokeOpacity="0.65"
                      className="flow-line"
                    />
                    <polygon points="8,19 16,19 12,25" fill="#60A5FA" fillOpacity="0.85" />
                  </svg>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <p className="mt-4 border-t border-slate-800/80 pt-3 text-center font-mono text-[0.65rem] text-slate-400">
        Illustrative representation of the implementation — click or hover any stage above to inspect its role in the pipeline.
      </p>
    </div>
  );
}

