export interface NavItem {
  id: string;
  label: string;
}

export const profile = {
  name: "Kalilur Rahman A R",
  monogram: "ARK",
  title: "ServiceNow Consultant",
  tagline: "ServiceNow Consultant | ITOM, ITAM, CMDB & Integrations",
  location: "Chennai, Tamil Nadu, India",
  email: "kalilurrahman1306@gmail.com",
  phone: "+91 7904044608",
  phoneHref: "tel:+917904044608",
  linkedin: "https://www.linkedin.com/in/kalilur-rahman-a-r-7a7314171/",
  /** Set VITE_GITHUB_URL in a .env file, or edit here. Empty = GitHub links are hidden. */
  github: (import.meta.env.VITE_GITHUB_URL as string | undefined) ?? "",
  resumeUrl: "/resume/Kalilur-Rahman-Resume.pdf",
  resumeFilename: "Kalilur-Rahman-Resume.pdf",
} as const;

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "journey", label: "Journey" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

/** Every section id on the page, in order, mapped to the nav item that should be highlighted. */
export const sectionToNav: Record<string, string> = {
  home: "home",
  about: "home",
  journey: "journey",
  expertise: "expertise",
  experience: "experience",
  projects: "projects",
  approach: "projects",
  certifications: "certifications",
  awards: "certifications",
  education: "certifications",
  testimonials: "contact",
  contact: "contact",
};

export const stats = [
  { value: null, label: "Professional Experience", display: "Nearly 6", suffix: " Years" },
  { value: 40, label: "Reduction in reporting ambiguities", display: "40", suffix: "%" },
  { value: 35, label: "Reduction in resolution latency", display: "35", suffix: "%" },
  { value: 5, label: "Developers guided", display: "5", suffix: "+" },
] as const;

export const heroKeywords = [
  "ServiceNow",
  "ITSM",
  "ITOM",
  "ITAM",
  "CMDB",
  "CSDM",
  "IntegrationHub",
];

