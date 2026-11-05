export interface AwardEntry {
  title: string;
  year?: string;
  description: string;
  tone: "gold" | "silver";
}

export const awards: AwardEntry[] = [
  {
    title: "Marvelous Multi-Tasker & Out of the Box Thinker Award",
    description: "Recognition for custom Spoke development and exemplary interim leadership.",
    tone: "silver",
  },
  {
    title: "Pinnacle Award",
    year: "2023",
    description:
      "Presented during the India Town Hall in recognition of engineering excellence, robust platform solutions and effective cross-functional leadership.",
    tone: "gold",
  },
];

