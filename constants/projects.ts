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
    description: "Generate qr codes for anything",
    source: `${sourceControl}/qrbuzz`,
    live: "https://qrbuzz.vercel.app",
    year: "2023",
  },
  {
    title: "Planscape",
    description: "A simple todo planner",
    source: `${sourceControl}/planscape`,
    live: "https://planscape.vercel.app",
    year: "2023",
  },
  {
    title: "Recallify",
    description: "Memory enhancement app for early stage traumatic injury",
    source: `${sourceControl}/recallify`,
    live: "https://recallify.vercel.app",
    year: "2022",
  },
];
