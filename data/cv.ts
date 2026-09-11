export const profile = {
  name: "Diego Michell Villa Duran",
  role: "Software Engineer",
  location: "Guadalajara, Jalisco",
  phone: "(+52) 669-217-9932",
  email: "diego.villaduran3@gmail.com",
  linkedin: "linkedin.com/in/dvillaa",
  linkedinUrl: "https://linkedin.com/in/dvillaa",
  github: "github.com/DiegoVillaa",
  githubUrl: "https://github.com/DiegoVillaa",
  summary:
    "Full-stack developer building and integrating systems end to end. I connect internal platforms with third-party APIs — Shopify Admin GraphQL, Skydropx — with a focus on reliability, clean system boundaries, and workflow automation. Comfortable across relational and real-time databases, Git, and Agile teams. Looking for a Junior/Mid Full-Stack role with room to grow into systems integration and backend engineering.",
};

export const education = {
  school: "Tecnologico de Monterrey",
  degree: "B.S. in Computer Science",
  period: "Aug. 2022 – Aug. 2026",
  location: "Guadalajara, Jalisco",
};

export const stack = {
  languages: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "C++"],
  integration: ["REST APIs", "GraphQL", "OAuth 2.0", "Third-party system integration"],
  frameworks: ["React", "React Router", "React Native", "Tailwind CSS", "Three.js", "NumPy", "Pandas"],
  data: ["SQL", "Relational databases", "Firebase Realtime DB", "Prisma"],
  tools: ["Git / GitHub", "Firebase", "Prisma", "Figma", "Notion", "VS Code", "OCI"],
};

export type Project = {
  id: string;
  title: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  bullets: string[];
  status: "active" | "shipped";
};

export const projects: Project[] = [
  {
    id: "shipping-label-app",
    title: "Shipping Label App",
    role: "Full-Stack Developer — Multi-carrier Shopify shipping app",
    period: "Jun. 2026 – Present",
    location: "Guadalajara, Jalisco",
    stack: ["React Router", "TypeScript", "GraphQL", "REST APIs", "Prisma"],
    bullets: [
      "Connected an internal Shopify store system to Skydropx, an external logistics platform, bridging the Shopify Admin GraphQL API with a third-party REST API.",
      "Implemented OAuth 2.0 and secure credential management, consuming a real-time quotation endpoint spanning 15+ carriers including DHL, FedEx, and Estafeta.",
      "Architected the app on React Router and TypeScript over a Prisma-backed SQL layer, using protected data scopes and server-side loaders for reliability.",
    ],
    status: "active",
  },
  {
    id: "tasko",
    title: "TaskO",
    role: "Frontend Developer & Team Coordinator — Task management chatbot",
    period: "Jan. 2025 – May 2025",
    location: "Guadalajara, Jalisco",
    stack: ["Java", "JavaScript", "React", "OCI"],
    bullets: [
      "Built the frontend of a Telegram chatbot wired into a Jira-style task system, supporting agile sprint planning for a 5-person team.",
      "Led planning sessions and defined delivery KPIs, improving consistency across sprint cycles.",
      "Shipped a component-based React architecture that improved UI reusability and cut development time.",
    ],
    status: "shipped",
  },
  {
    id: "waim",
    title: "WAIM",
    role: "Frontend Developer — AI tools directory",
    period: "Jan. 2024 – Aug. 2024",
    location: "Guadalajara, Jalisco",
    stack: ["React", "Three.js", "Tailwind CSS"],
    bullets: [
      "Built a directory cataloguing 50+ AI tools by category, improving discoverability for non-technical users.",
      "Optimized image assets to cut page load time; collaborated on a responsive React + Three.js frontend.",
      "Applied Tailwind CSS for consistent cross-device layout.",
    ],
    status: "shipped",
  },
  {
    id: "aquapark",
    title: "AquaPark",
    role: "Backend Developer — IoT pet water dispenser",
    period: "Aug. 2023 – Dec. 2023",
    location: "Guadalajara, Jalisco",
    stack: ["Python", "JavaScript", "Firebase", "HTML/CSS"],
    bullets: [
      "Designed a Firebase realtime database to manage sensor data from an automated pet water dispenser.",
      "Configured IoT sensors for live read/write and built an event-driven trigger that dispensed water on sensor thresholds.",
      "Integrated hardware and software with Python and JavaScript into a working prototype.",
    ],
    status: "shipped",
  },
];

export const experience = [
  {
    role: "Web Developer (Volunteer)",
    org: "Banco de Alimentos Guadalajara",
    period: "Aug. 2024 – Dec. 2024",
    location: "Guadalajara, Jalisco",
    bullets: [
      "Maintained and updated the organization's WordPress site, improving content accuracy and navigation.",
      "Redesigned key pages to make donation and contact flows more accessible.",
    ],
  },
];

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
];
