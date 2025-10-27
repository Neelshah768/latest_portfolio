export type PortfolioKB = {
  identity: { name: string; title: string; location: string; headline: string };
  summary: string;
  skills: Record<"frontend" | "backend" | "cloud" | "databases" | "tools", string[]>;
  outcomes: { metric: string; context?: string }[];
  experience: { title: string; company: string; location?: string; period: string; impact: string[] }[];
  projects: { name: string; stack: string[]; problem: string; solution: string; outcomes: string[]; links?: { live?: string; repo?: string } }[];
  services: { type: "Full-Time" | "Part-Time" | "Freelance"; notes?: string }[];
  industries?: string[];
  education?: { degree: string; org: string; year?: string }[];
  certifications?: string[];
  faq: { q: string; a: string }[];
  contact: { email: string; linkedin: string; github: string };
  tone: { style: string; do: string[]; dont: string[] };
};

export const kb: PortfolioKB = {
  identity: {
    name: "Neel Shah",
    title: "Software Engineer",
    location: "Ahmedabad, India",
    headline: "React, React Native, Java Spring Boot, Azure; microservices & performance.",
  },
  summary:
    "3+ years building scalable apps with 99.9% uptime. Focused on performance, SSO/SCIM, and delivery speed.",
  skills: {
    frontend: ["React", "React Native", "TypeScript", "Redux", "WebRTC"],
    backend: ["Java Spring Boot", "Node.js", "REST APIs", "Microservices"],
    cloud: ["Azure", "Azure AD B2C", "Jenkins", "CI/CD", "AWS"],
    databases: ["MySQL", "MongoDB", "Elasticsearch"],
    tools: ["Git", "VS Code"],
  },
  outcomes: [
    { metric: "60% load-time reduction" },
    { metric: "99.9% system uptime" },
    { metric: "Led 14+ member team" },
    { metric: "50% scalability improvement" },
  ],
  experience: [
    {
      title: "Full‑Stack Software Developer",
      company: "PrometheanTech",
      location: "Gandhinagar, India",
      period: "Jul 2022 – Present",
      impact: [
        "Promoted from Frontend to Senior Full‑Stack within 3 years.",
        "Architected fund & assets management; SCIM + Azure AD B2C SSO.",
        "Cut bug reports by 70% via CI/CD hardening.",
      ],
    },
  ],
  projects: [
    {
      name: "73Strings – Fund & Assets Management",
      stack: ["Spring Boot", "React", "Azure AD B2C", "Elasticsearch"],
      problem: "Enterprise SSO and scalable search across assets.",
      solution: "Microservices with Elasticsearch + secure identity flows.",
      outcomes: ["80% faster search", "Reduced login failures by 20%"],
      links: { live: "#", repo: "#" },
    },
    {
      name: "LivCast – Live Streaming",
      stack: ["React Native", "WebRTC", "AWS"],
      problem: "Low-latency streaming with high reliability.",
      solution: "Optimized client + infra; lazy loading & reusable components.",
      outcomes: ["99.9% uptime", "65% faster initial load"],
    },
  ],
  services: [{ type: "Full-Time" }, { type: "Part-Time" }, { type: "Freelance" }],
  industries: ["Fintech", "Streaming", "Enterprise SaaS"],
  education: [{ degree: "B.Tech Computer Science", org: "Silver Oak University", year: "2022" }],
  certifications: [],
  faq: [
    { q: "Availability?", a: "Open to full-time, part-time and freelance." },
    { q: "Typical stack?", a: "React/TypeScript, Spring Boot, Azure; microservices & CI/CD." },
    { q: "How do you approach performance?", a: "Measure → profile → optimize; caching, lazy load, SSR as needed." },
  ],
  contact: {
    email: "shahneel20135@gmail.com",
    linkedin: "https://www.linkedin.com/in/neel-shah-215099192/",
    github: "https://github.com/Neelshah768",
  },
  tone: {
    style: "Concise, professional, confident.",
    do: ["Cite concrete outcomes", "Answer in 2–5 short sentences", "Invite contact when relevant"],
    dont: ["Invent facts", "Share confidential details", "Overclaim"],
  },
};

export function buildSystemPrompt() {
  return `You are Neel Shah's portfolio assistant. Use ONLY the KB to answer. If uncertain, say you don't have that info and offer contact details. Keep replies concise and friendly.\n\nKB:\n${JSON.stringify(kb)}`;
}


