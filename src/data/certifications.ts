export interface Credential {
  name: string;
  detail?: string;
}

export interface CredentialGroup {
  id: string;
  label: string;
  note: string;
  icon: string;
  items: Credential[];
}

export const credentialGroups: CredentialGroup[] = [
  {
    id: "certifications",
    label: "Certifications",
    note: "ServiceNow professional certifications",
    icon: "badge",
    items: [
      { name: "ServiceNow Certified System Administrator", detail: "CSA" },
      { name: "ServiceNow Certified Application Developer", detail: "CAD" },
      { name: "ServiceNow Certified Implementation Specialist – Data Foundation", detail: "CMDB and CSDM" },
    ],
  },
  {
    id: "micro",
    label: "Micro-Certifications",
    note: "Focused ServiceNow micro-certifications",
    icon: "award",
    items: [
      { name: "IntegrationHub" },
      { name: "Flow Designer" },
      { name: "Service Portal" },
      { name: "Automated Test Framework", detail: "ATF" },
      { name: "Performance Analytics", detail: "PA" },
    ],
  },
  {
    id: "learning",
    label: "Accreditations & Learning",
    note: "Training and learning — not professional certifications",
    icon: "book",
    items: [
      { name: "ITOM On Demand" },
      { name: "Discovery Fundamentals" },
      { name: "CMDB Fundamentals", detail: "ILT" },
      { name: "Customer Service Management On Demand", detail: "CSM" },
    ],
  },
];

