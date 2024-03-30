export type Projects = {
  title: string;
  description: string;
  source: string;
  live: string;
  year: string;
};

const sourceControl = "https://github.com";

export const projects: Projects[] = [
  {
    title: "Qrbuzz",
    description: "Generate qr codes super fast",
    source: `${sourceControl}/fromenoabasi/qrbuzz`,
    live: "https://qrbuzz.vercel.app",
    year: "2023",
  },
  {
    title: "Planscape",
    description: "A simple todo planner",
    source: `${sourceControl}/fromenoabasi/planscape`,
    live: "https://planscape.vercel.app",
    year: "2023",
  },
  {
    title: "Recallify",
    description: "Memory enhancement app for early stage traumatic injury",
    source: `${sourceControl}/Hassan3924/Recallify`,
    live: "https://bilalkobattay1212.wixsite.com/recallify",
    year: "2022",
  },
];
