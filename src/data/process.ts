export interface ProcessStage {
  number: string;
  name: string;
  icon: string;
  description: string;
  artifacts: [string, string, string];
}

export const processStages: ProcessStage[] = [
  {
    number: "01",
    name: "Discover",
    icon: "search",
    description: "Understand business requirements, technical constraints and existing platform architecture.",
    artifacts: ["Requirements", "Constraints", "Current platform"],
  },
  {
    number: "02",
    name: "Design",
    icon: "compass",
    description: "Define the technical design, data model alignment and OOTB-first implementation approach.",
    artifacts: ["Solution design", "Technical design doc", "Approach"],
  },
  {
    number: "03",
    name: "Build",
    icon: "hammer",
    description: "Develop scalable ServiceNow solutions using platform capabilities and reusable components.",
    artifacts: ["Platform capabilities", "Reusable components", "Scoped build"],
  },
  {
    number: "04",
    name: "Integrate",
    icon: "plug",
    description: "Connect enterprise systems using IntegrationHub, REST APIs and structured data pipelines.",
    artifacts: ["IntegrationHub", "REST APIs", "Data pipelines"],
  },
  {
    number: "05",
    name: "Validate",
    icon: "shield",
    description: "Perform testing, code reviews, regression validation and technical risk assessments.",
    artifacts: ["Code review", "Regression tests", "Risk assessment"],
  },
  {
    number: "06",
    name: "Deliver",
    icon: "rocket",
    description: "Deploy governed solutions and support maintainability, knowledge sharing and continuous improvement.",
    artifacts: ["Governed release", "Knowledge sharing", "Continuous improvement"],
  },
];

