export type DiagramVariant = "layers" | "pipeline" | "hub" | "assets" | "spokes" | "gates" | "eventFlow";

export interface TechnicalSection {
  title: string;
  intro?: string;
  items: string[];
  note?: string;
}

export interface Project {
  number: string;
  title: string;
  category: string;
  /** Optional custom header label on the project card (e.g. "01 / ITOM EVENT MANAGEMENT") */
  cardHeader?: string;
  /** Optional dot-separated subtitle displayed on the project card */
  subtitleLine?: string;
  /** Optional custom CTA label on the project card */
  ctaLabel?: string;
  /** Optional interactive architecture diagram variant for the case study modal */
  architectureType?: "eventManagement";
  description: string;
  tags: string[];
  impact?: string;
  diagram: { variant: DiagramVariant; labels: string[] };
  caseStudy: {
    overview: string;
    businessContext: string;
    challenge: string;
    approach: string;
    approachSteps?: string[];
    implementation: string[];
    technicalSections?: TechnicalSection[];
    outcome: string;
    valueBullets?: string[];
  };
}

export const projects: Project[] = [
  {
    number: "01",
    cardHeader: "01 / ITOM EVENT MANAGEMENT",
    title: "Intelligent Event Management & Automated Incident Orchestration",
    category: "ServiceNow ITOM | Event Management | Kafka Integration | Alert Management | Flow Designer",
    subtitleLine: "Kafka Integration · Event Processing · Alert Management · Incident Automation",
    ctaLabel: "Explore Case Study",
    architectureType: "eventManagement",
    description:
      "Designed and implemented an event ingestion and processing workflow in ServiceNow Event Management using Kafka Connection and a Custom Push Connector, automating incident creation through Alert Management Rules and reusable Subflows.",
    tags: [
      "ServiceNow ITOM Event Management",
      "Kafka Connection",
      "Custom Push Connector",
      "Event Rules",
      "Event Additional Information",
      "Event Thresholds",
      "CI Binding",
      "Alert Management Rules",
      "Flow Designer",
      "Subflows",
      "Incident Management",
    ],
    diagram: {
      variant: "eventFlow",
      labels: ["Kafka & Push Conn.", "Event Rules & CI", "Alert Mgmt Rules", "Subflow → Incident"],
    },
    caseStudy: {
      overview:
        "Implemented a ServiceNow ITOM Event Management solution integrating Kafka-based event ingestion with custom push connectivity, configurable event processing rules and source-specific alert management automation.\n\nThe solution processes monitoring events, evaluates event generation and ignore conditions, applies thresholds, associates events with Configuration Items and triggers automated incident creation through configured Alert Management Rules and reusable Subflows.",
      businessContext:
        "Designed and implemented an event ingestion and processing workflow in ServiceNow Event Management using Kafka Connection and a Custom Push Connector. The implementation processes incoming event payloads, including additional information, configures event processing rules, evaluates event conditions, applies thresholds, establishes CI binding, and automates incident creation through Alert Management Rules and reusable Subflows.",
      challenge:
        "Establishing a structured event processing workflow for multiple monitoring sources while ensuring that incoming event payloads are evaluated against configurable event conditions, thresholds and CI associations.",
      approach:
        "Implemented a structured end-to-end pipeline from Kafka event ingestion and custom push connectivity through Event Rules, source-specific Alert Management Rules, and reusable Flow Designer Subflows.",
      approachSteps: [
        "Established event ingestion using Kafka Connection and Custom Push Connector.",
        "Processed incoming event payloads and additional information.",
        "Configured Event Management Rules to determine event generation and ignore conditions.",
        "Defined event thresholds and CI binding.",
        "Created source-specific Alert Management Rules.",
        "Connected Alert Management Rules to reusable Subflows.",
        "Enabled automated incident creation through the configured workflow.",
      ],
      implementation: [
        "Configured Kafka Connection and implemented a Custom Push Connector to ingest monitoring events and their additional information payloads.",
        "Configured Event Management Rules covering event generation conditions, ignore conditions, event thresholds, CI binding and additional information processing.",
        "Configured Alert Management Rules for SiteWatcher, Spectrum, OSSI and SevOne to evaluate processed alerts.",
        "Connected Alert Management Rules to reusable Flow Designer Subflows for automated incident creation.",
      ],
      technicalSections: [
        {
          title: "A. Event Ingestion",
          items: [
            "Configured Kafka Connection for event ingestion.",
            "Implemented a Custom Push Connector.",
            "Received incoming monitoring events and their associated additional information payloads.",
            "Processed the incoming event information within ServiceNow Event Management.",
          ],
        },
        {
          title: "B. Event Rule Configuration",
          intro: "Configured Event Management Rules to control how incoming events should be processed:",
          items: [
            "Defining which incoming events should generate events.",
            "Configuring conditions to identify events that should be ignored.",
            "Configuring event thresholds.",
            "Defining CI binding to associate incoming events with the relevant Configuration Items.",
            "Processing the additional information received in the event payload.",
          ],
          note: "Emphasizes structured filtering, event processing conditions, threshold configuration and accurate CI association.",
        },
        {
          title: "C. Alert Management Rules",
          intro:
            "Configured Alert Management Rules for the following monitoring integrations to evaluate processed alerts and trigger the corresponding Subflow for automated incident creation:",
          items: ["SiteWatcher", "Spectrum", "OSSI", "SevOne"],
        },
        {
          title: "D. Automated Incident Creation",
          items: [
            "Configured reusable Subflow execution through Alert Management Rules.",
            "Automated incident creation based on the configured alert processing conditions.",
            "Connected Event Management and incident creation through workflow automation.",
          ],
        },
      ],
      outcome:
        "Delivered an end-to-end event ingestion, rule processing, alert management and automated incident creation workflow across enterprise monitoring integrations.",
      valueBullets: [
        "Centralized event ingestion.",
        "Structured event processing.",
        "Configurable event filtering.",
        "Threshold-based event handling.",
        "CI association for event context.",
        "Monitoring-source-specific alert management.",
        "Automated incident creation.",
        "Reduced dependency on manual incident creation.",
      ],
    },
  },
  {
    number: "02",
    title: "Enterprise CMDB & CSDM Implementation",
    category: "CMDB / CSDM / Data Foundation",
    description:
      "Designed and supported enterprise CSDM implementation across Foundation, Crawl, Walk and Run phases, improving alignment between business services and underlying infrastructure.",
    tags: ["CSDM", "CMDB", "Service Modeling", "CI Relationships", "Data Foundation", "Data Governance"],
    impact: "40% reduction in reporting ambiguities",
    diagram: { variant: "layers", labels: ["Business Service", "Service Offering", "Application Service", "Infrastructure CIs"] },
    caseStudy: {
      overview:
        "Enterprise CSDM implementation work at Verizon India, spanning the Foundation, Crawl, Walk and Run adoption phases.",
      businessContext:
        "Reporting and service visibility depend on how business services relate to the infrastructure beneath them. Without a consistent model, the same service can be described in conflicting ways.",
      challenge:
        "Reduce ambiguity in reporting by aligning business services with underlying infrastructure through a structured, governed service data model.",
      approach:
        "Adopt CSDM in progressive phases, establishing foundational data first and then maturing service modeling and relationships, supported by data governance.",
      implementation: [
        "CSDM implementation across Foundation, Crawl, Walk and Run phases",
        "Service modeling and CI relationship alignment between services and infrastructure",
        "Work across critical CMDB classes including Load Balancers, IP Devices and Servers",
        "Data governance practices supporting consistent service data",
      ],
      outcome: "Reporting ambiguities reduced by 40%.",
    },
  },
  {
    number: "03",
    title: "IntegrationHub ETL & IRE Automation",
    category: "Enterprise Integration / CMDB",
    description:
      "Implemented scalable CI data ingestion and reconciliation using IntegrationHub ETL and advanced IRE rules, reducing dependency on legacy point-to-point import processes.",
    tags: ["IntegrationHub ETL", "IRE", "SQL", "File-Based Integration", "Transform Maps", "CI Data Ingestion"],
    diagram: { variant: "pipeline", labels: ["SQL / File Sources", "IntegrationHub ETL", "IRE", "CMDB"] },
    caseStudy: {
      overview:
        "Implementing IntegrationHub ETL and advanced IRE rules to automate how CI data enters the CMDB.",
      businessContext:
        "Legacy point-to-point imports are harder to maintain and scale, and make consistent CI data hard to guarantee.",
      challenge:
        "Replace legacy imports with automated CI ingestion from SQL databases and complex file feeds, while keeping CI records correctly identified and reconciled.",
      approach:
        "Use IntegrationHub ETL for structured ingestion and advanced IRE rules to identify and reconcile incoming CIs.",
      implementation: [
        "IntegrationHub ETL pipelines ingesting from SQL databases and complex file feeds",
        "Advanced Identification and Reconciliation Engine (IRE) configuration",
        "Transform Maps and data source ingestion patterns",
      ],
      outcome:
        "Automated CI ingestion that reduces dependency on legacy point-to-point import processes.",
    },
  },
  {
    number: "04",
    title: "ITOM Discovery & MID Server Setup",
    category: "ITOM / Infrastructure Discovery",
    description:
      "Worked on scalable Discovery patterns, MID Server setup and configuration validation to support enterprise infrastructure discovery.",
    tags: ["Discovery", "MID Server", "Discovery Patterns", "Configuration Validation", "Containerized Troubleshooting"],
    diagram: { variant: "hub", labels: ["Discovery", "MID Server", "MID Cluster", "Infrastructure"] },
    caseStudy: {
      overview:
        "Configuring ITOM Discovery patterns and scalable MID Server environments to support infrastructure discovery.",
      businessContext:
        "Accurate infrastructure data in the CMDB depends on dependable discovery and a MID Server layer that scales with the environment.",
      challenge:
        "Support enterprise-scale discovery while keeping configuration validation and troubleshooting efficient.",
      approach:
        "Configure scalable MID Server environments and Discovery patterns, and use containerized environments to validate configuration and troubleshoot.",
      implementation: [
        "Discovery patterns for infrastructure discovery",
        "MID Server deployment and clustering",
        "Configuration validation and troubleshooting in containerized environments",
      ],
      outcome:
        "A scalable Discovery and MID Server setup with more streamlined configuration validation.",
    },
  },
  {
    number: "05",
    title: "ITAM – SAM Pro, HAM & Workspace ONE",
    category: "IT Asset Management",
    description:
      "Supported enterprise software and hardware asset lifecycle initiatives, including integration with Workspace ONE for software installation automation.",
    tags: ["SAM Pro", "HAM", "Workspace ONE", "Software Installation", "Endpoint Tracking", "Asset Lifecycle"],
    diagram: { variant: "assets", labels: ["Workspace ONE", "Integration", "HAM", "SAM Pro"] },
    caseStudy: {
      overview:
        "Leading SAM Pro and HAM lifecycle management initiatives and working with Workspace ONE integration teams.",
      businessContext:
        "Software and hardware assets move through lifecycles that need to be tracked consistently, including endpoint devices.",
      challenge:
        "Support lifecycle management for software and hardware assets, and automate software installation and device tracking through integration.",
      approach:
        "Combine SAM Pro and HAM lifecycle management with integration to Workspace ONE for automation.",
      implementation: [
        "SAM Pro and HAM lifecycle management initiatives",
        "Workspace ONE integration for automated zero-touch software installations",
        "Concession device tracking",
      ],
      outcome: "Supported automated software installation and endpoint tracking across the asset lifecycle.",
    },
  },
  {
    number: "06",
    title: "Enterprise IntegrationHub Spokes",
    category: "Integration / Automation",
    description:
      "Engineered reusable integration capabilities and Subflows connecting ServiceNow with enterprise collaboration platforms.",
    tags: ["IntegrationHub", "Custom Spokes", "REST APIs", "Microsoft Teams", "SharePoint", "Flow Designer", "Reusable Subflows"],
    impact: "35% reduction in resolution latency",
    diagram: { variant: "spokes", labels: ["Custom Spoke", "SharePoint", "Microsoft Teams", "Subflows"] },
    caseStudy: {
      overview:
        "Custom IntegrationHub Spokes and reusable Subflows developed at Stellantis to connect ServiceNow with SharePoint and Microsoft Teams.",
      businessContext:
        "Manual document-routing steps slowed down request resolution.",
      challenge:
        "Eliminate manual document-routing activities by connecting ServiceNow to collaboration platforms through reusable capabilities.",
      approach:
        "Build custom Spokes and reusable Subflows so integration logic can be shared across workflows.",
      implementation: [
        "Custom IntegrationHub Spokes for SharePoint and Microsoft Teams",
        "Reusable Subflows built in Flow Designer",
        "REST API-based connectivity",
      ],
      outcome:
        "Manual document routing eliminated and resolution latency reduced by 35%. This work contributed to the Marvelous Multi-Tasker & Out of the Box Thinker Award.",
    },
  },
  {
    number: "07",
    title: "Platform Performance & Release Governance",
    category: "Platform Engineering / Governance",
    description:
      "Improved platform maintainability and release confidence through archive optimization, automated regression testing and controlled release processes.",
    tags: ["Archive Rules", "ATF", "Update Sets", "Regression Testing", "Code Reviews", "Release Governance"],
    impact: "25% improvement in query response times",
    diagram: { variant: "gates", labels: ["Archive Rules", "ATF Regression", "Update Sets", "Release"] },
    caseStudy: {
      overview:
        "Platform performance and release practices at Stellantis and Verizon India, covering archiving, regression testing and controlled deployment.",
      businessContext:
        "Large tables slow down queries, and platform upgrades and releases need confidence that existing behaviour still works.",
      challenge:
        "Improve performance and maintainability while giving releases and family upgrades a repeatable validation path.",
      approach:
        "Optimize with archive rules and purging, validate upgrades with ATF regression suites, and deploy through governed, scoped changes.",
      implementation: [
        "Archive Rules and data-purging jobs",
        "ATF regression test suites for family upgrades",
        "Scoped Update Sets, Import Sets and Transform Maps for deployment",
        "Code reviews and OOTB engineering standards",
      ],
      outcome:
        "Query response times improved by 25%. Zero post-release incidents were supported across the documented upgrade testing work.",
    },
  },
];
