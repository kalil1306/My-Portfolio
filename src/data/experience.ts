export interface Milestone {
  number: string;
  period: string;
  title: string;
  subtitle?: string;
  summary: string;
  focus: string[];
}

export const milestones: Milestone[] = [
  {
    number: "01",
    period: "2020",
    title: "The Foundation",
    subtitle: "B.Tech in Computer Science & Engineering",
    summary: "Vel Tech University, Chennai. Graduated May 2020.",
    focus: ["Computer Science & Engineering", "Vel Tech University, Chennai", "Graduated May 2020"],
  },
  {
    number: "02",
    period: "December 2020",
    title: "Entering the Enterprise Ecosystem",
    subtitle: "ServiceNow Developer / ICT Service Specialist",
    summary: "Joined Stellantis (Fiat Chrysler Automobiles) and began building on the ServiceNow platform.",
    focus: ["ITSM", "Service Catalog", "IntegrationHub", "HRSD", "Platform Operations"],
  },
  {
    number: "03",
    period: "During Stellantis",
    title: "Growing into Technical Leadership",
    subtitle: "Acting Team Lead",
    summary: "Stepped into interim leadership alongside hands-on engineering.",
    focus: [
      "Guided 5+ developers",
      "Led technical discussions",
      "Supported offshore delivery",
      "Handled technical escalations",
      "Improved engineering practices",
    ],
  },
  {
    number: "04",
    period: "May 2024",
    title: "Senior ServiceNow Consulting",
    subtitle: "Senior ServiceNow Consultant / Technical Lead",
    summary: "Joined Verizon India Pvt Ltd to work on ITOM, ITAM, CMDB and CSDM data foundation initiatives.",
    focus: ["ITOM", "ITAM", "CMDB", "CSDM", "IntegrationHub ETL", "Event Management", "Platform engineering"],
  },
  {
    number: "05",
    period: "Present",
    title: "Building Scalable Enterprise Solutions",
    summary:
      "Focused on platform engineering, workflow automation, data governance, developer mentoring and reliable ServiceNow implementations.",
    focus: ["Platform engineering", "Automation", "Data governance", "Technical mentoring", "Reliable implementations"],
  },
];

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  focus: string;
  responsibilities: string[];
  /** Number of responsibilities visible before expanding. */
  previewCount: number;
  highlights: { value: string; label: string }[];
}

export const experiences: ExperienceEntry[] = [
  {
    company: "Verizon India Pvt Ltd",
    role: "Senior ServiceNow Consultant / Technical Lead",
    period: "May 2024 – Present",
    location: "Chennai, India",
    focus: "ITOM, ITAM, CMDB & CSDM Implementation",
    previewCount: 4,
    responsibilities: [
      "Supported enterprise CSDM implementation across Foundation, Crawl, Walk and Run phases.",
      "Aligned business services with underlying infrastructure and reduced reporting ambiguities by 40%.",
      "Implemented ServiceNow ITOM Event Management integrations using Kafka Connection and Custom Push Connector, configuring event processing rules, threshold conditions, CI binding and source-specific Alert Management Rules for SiteWatcher, Spectrum, OSSI and SevOne to trigger automated incident creation through reusable Subflows.",
      "Implemented IntegrationHub ETL and IRE rules for automated CI data ingestion.",
      "Replaced legacy point-to-point imports with automated CI ingestion from SQL databases and complex file feeds.",
      "Worked across critical CMDB classes including Load Balancers, IP Devices and Servers.",
      "Configured ITOM Discovery patterns and MID Server environments.",
      "Streamlined configuration validation and troubleshooting through containerized environments.",
      "Led SAM Pro and HAM lifecycle management initiatives.",
      "Worked with Workspace ONE integration teams for automated zero-touch software installations and concession device tracking.",
      "Led sprint planning, story refinement and backlog estimation.",
      "Enforced code reviews and OOTB platform engineering standards.",
      "Conducted technical risk assessments and platform upgrade evaluations.",
    ],
    highlights: [
      { value: "40%", label: "Reporting ambiguity reduction" },
      { value: "CI", label: "Enterprise CI ingestion automation" },
      { value: "MID", label: "Scalable Discovery and MID Server architecture" },
    ],
  },
  {
    company: "Stellantis — Fiat Chrysler Automobiles",
    role: "ServiceNow Developer / ICT Service Specialist (Acting Team Lead)",
    period: "December 2020 – May 2024",
    location: "Chennai, India",
    focus: "ITSM, IntegrationHub, HRSD & Platform Operations",
    previewCount: 4,
    responsibilities: [
      "Developed custom IntegrationHub Spokes and reusable Subflows connecting ServiceNow with SharePoint and Microsoft Teams.",
      "Eliminated manual document-routing activities and reduced resolution latency by 35%.",
      "Served as Acting Team Lead during operational and delivery cycles.",
      "Guided 5+ developers through technical challenges.",
      "Served as a technical escalation point for client stakeholders.",
      "Designed complex Service Catalog portfolios.",
      "Implemented dynamic workflows, multi-tier approvals and Record Producers.",
      "Optimized platform performance using Archive Rules and data-purging jobs.",
      "Improved query response times by 25%.",
      "Developed ATF regression test suites for family upgrades.",
      "Supported zero post-release incidents across the documented upgrade testing work.",
      "Managed deployments through scoped Update Sets, Import Sets and Transform Maps.",
      "Implemented HRSD workflows, targeted communications and Performance Analytics dashboards.",
    ],
    highlights: [
      { value: "35%", label: "Resolution latency reduction" },
      { value: "25%", label: "Query response time improvement" },
      { value: "5+", label: "Developers guided" },
    ],
  },
];

