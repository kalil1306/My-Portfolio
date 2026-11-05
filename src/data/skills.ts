export interface Skill {
  name: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  index: string;
  label: string;
  icon: string;
  summary: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "modules",
    index: "01",
    label: "ServiceNow Modules",
    icon: "layers",
    summary: "Product areas across service, operations, asset and employee workflows.",
    skills: [
      { name: "ITSM", description: "IT Service Management: incident, request, change and related service workflows." },
      { name: "ITOM", description: "IT Operations Management: discovery, service mapping and infrastructure visibility." },
      { name: "Event Management", description: "ServiceNow ITOM Event Management: event ingestion, processing rules, alert management and incident automation." },
      { name: "ITAM", description: "IT Asset Management: tracking hardware and software through their lifecycle." },
      { name: "HAM", description: "Hardware Asset Management: lifecycle tracking of physical assets and devices." },
      { name: "SAM", description: "Software Asset Management: software installs, entitlements and usage (SAM Pro)." },
      { name: "CMDB", description: "Configuration Management Database: the record of CIs and their relationships." },
      { name: "CSDM", description: "Common Service Data Model: a framework aligning business services to technical infrastructure." },
      { name: "HRSD", description: "HR Service Delivery: employee-facing HR workflows and communications." },
      { name: "CSM", description: "Customer Service Management: customer-facing case and service workflows." },
      { name: "Service Catalog", description: "Catalog items, record producers, variables and approval-driven fulfilment." },
      { name: "Employee Center", description: "Unified employee-facing portal experience for services and content." },
      { name: "Service Portal", description: "Widget-based portal framework for building self-service experiences." },
      { name: "Service Mapping", description: "Top-down mapping of business services to their supporting CIs." },
    ],
  },
  {
    id: "event-management",
    index: "02",
    label: "ITOM & Event Management",
    icon: "shield",
    summary: "Event ingestion, rule evaluation, threshold processing, CI binding and alert-driven incident orchestration.",
    skills: [
      { name: "Event Management", description: "End-to-end event ingestion and processing within ServiceNow ITOM Event Management." },
      { name: "Event Rules", description: "Configuring event generation conditions, ignore conditions, thresholds and CI binding." },
      { name: "Alert Management Rules", description: "Source-specific rules (SiteWatcher, Spectrum, OSSI, SevOne) evaluating alerts and triggering Subflows." },
      { name: "Event Processing", description: "Evaluating incoming monitoring events and additional information payloads." },
      { name: "Event Thresholds", description: "Applying threshold conditions in Event Management Rules to control event handling." },
      { name: "CI Binding", description: "Associating incoming events with the relevant Configuration Items in the CMDB." },
      { name: "Event-to-Incident Automation", description: "Connecting processed alerts to reusable Subflows for automated incident creation." },
    ],
  },
  {
    id: "architecture",
    index: "03",
    label: "CMDB, CSDM & Data Foundation",
    icon: "network",
    summary: "Data foundations, ingestion patterns and infrastructure connectivity.",
    skills: [
      { name: "CMDB Class Modeling", description: "Working with CI classes such as servers, IP devices and load balancers." },
      { name: "Identification and Reconciliation Engine (IRE)", description: "Rules that identify and reconcile CIs to prevent duplicates and conflicting data." },
      { name: "IntegrationHub ETL", description: "Extract-transform-load pipelines that ingest CI data into the CMDB." },
      { name: "Data Source Ingestion", description: "Bringing external data into the platform through governed data sources." },
      { name: "SQL and File-Based Imports", description: "Ingesting data from SQL databases and complex file feeds." },
      { name: "MID Server Deployment", description: "Deploying MID Servers that bridge the platform and enterprise networks." },
      { name: "MID Server Clustering", description: "Grouping MID Servers for scalability and resilience." },
      { name: "Archive Rules", description: "Archiving and purging data to keep platform tables lean and performant." },
      { name: "CSDM Data Modeling", description: "Structuring service data across Foundation, Crawl, Walk and Run phases." },
    ],
  },
  {
    id: "development",
    index: "04",
    label: "Development & Workflow Automation",
    icon: "code",
    summary: "Server-side and client-side scripting plus Flow Designer and Subflow automation.",
    skills: [
      { name: "Flow Designer", description: "Low-code workflow automation for platform, alert and integration processes." },
      { name: "Reusable Subflows", description: "Reusable Subflows triggered by Alert Management Rules and platform workflows." },
      { name: "Automated Incident Creation", description: "Workflow automation creating incidents from evaluated alerts and event conditions." },
      { name: "Custom Subflows", description: "Reusable flow building blocks shared across processes." },
      { name: "Custom Actions", description: "Custom Flow Designer steps wrapping scripted or integration logic." },
      { name: "JavaScript", description: "Primary scripting language of the ServiceNow platform." },
      { name: "GlideRecord", description: "Server-side API for querying and manipulating table records." },
      { name: "GlideAjax", description: "Client-to-server calls for dynamic form behaviour." },
      { name: "GlideSystem", description: "Server-side utility API for logging, user context and system properties." },
      { name: "Business Rules", description: "Server-side logic triggered by record database operations." },
      { name: "Script Includes", description: "Reusable server-side classes and functions." },
      { name: "Client Scripts", description: "Browser-side form logic and validation." },
      { name: "UI Policies", description: "Declarative control of field visibility, mandatory and read-only states." },
      { name: "UI Actions", description: "Buttons, links and context menu actions on forms and lists." },
      { name: "HTML", description: "Markup for portal widgets and UI pages." },
      { name: "CSS", description: "Styling for portal widgets and branded experiences." },
      { name: "JSON", description: "Lightweight data format used across REST and platform scripting." },
      { name: "XML", description: "Structured data format used in SOAP, update sets and imports." },
    ],
  },
  {
    id: "integrations",
    index: "05",
    label: "Integrations",
    icon: "plug",
    summary: "Connecting ServiceNow with event streams, enterprise systems and collaboration tools.",
    skills: [
      { name: "Kafka Connection", description: "Configured Kafka Connection for streaming monitoring event ingestion into ServiceNow." },
      { name: "Custom Push Connector", description: "Custom Push Connector receiving incoming monitoring events and payload data." },
      { name: "Event Payload Processing", description: "Ingesting and parsing structured event payloads in ServiceNow Event Management." },
      { name: "Additional Information Processing", description: "Processing additional information received in incoming monitoring event payloads." },
      { name: "REST APIs", description: "Consuming and exposing RESTful integrations." },
      { name: "SOAP APIs", description: "Web-service integrations using WSDL-based contracts." },
      { name: "IntegrationHub", description: "Spokes, actions and flows for connecting to external systems." },
      { name: "Custom Spoke Development", description: "Building reusable IntegrationHub spokes for enterprise platforms." },
      { name: "Workspace ONE Integration", description: "Integration supporting software installation automation and device tracking." },
      { name: "Microsoft Teams Integration", description: "Connecting ServiceNow workflows with Microsoft Teams." },
      { name: "SharePoint Integration", description: "Automating document routing between ServiceNow and SharePoint." },
      { name: "Webhooks", description: "Event-driven HTTP callbacks between systems." },
      { name: "Transform Maps", description: "Mapping imported source fields onto target table fields." },
      { name: "Transform Scripts", description: "Scripted logic applied during import transformation." },
    ],
  },
  {
    id: "leadership",
    index: "06",
    label: "Engineering & Leadership",
    icon: "users",
    summary: "Delivery practices, quality gates and team enablement.",
    skills: [
      { name: "Agile / Scrum", description: "Iterative delivery with sprint-based planning and review." },
      { name: "Sprint Planning", description: "Scoping and committing work for each sprint." },
      { name: "Backlog Grooming", description: "Story refinement and estimation ahead of sprints." },
      { name: "Capacity Planning", description: "Balancing team capacity with delivery commitments." },
      { name: "Technical Design Documents", description: "Documenting solution design and implementation decisions." },
      { name: "Automated Test Framework", description: "ATF regression suites validating platform behaviour through upgrades." },
      { name: "Update Set Governance", description: "Controlled, scoped movement of changes between instances." },
      { name: "Code Reviews", description: "Peer review enforcing OOTB-aligned engineering standards." },
      { name: "Developer Mentorship", description: "Guiding developers through technical challenges." },
      { name: "Production Release Governance", description: "Controlled, risk-assessed releases to production." },
    ],
  },
];
