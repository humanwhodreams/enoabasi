export type Projects = {
  title: string;
  description: string;
  source: string;
  live: string;
  year: string;
};

export const projects: Projects[] = [
  {
    title: "QrBuzz",
    description: "Quickly generate QR codes for your desired media super fast.",
    source: "https://github.com/fromenoabasi/qrbuzz",
    live: "https://qrbuzz.vercel.app/",
    year: "2024",
  },
  {
    title: "Lstools",
    description: "Productivity tooling for focusing on tasks and more.",
    source: "https://github.com/fromenoabasi/lst",
    live: "https://lstools.vercel.app/",
    year: "2024",
  },
  {
    title: "Recallify",
    description: "productivity application for early stage traumatic brain injury.",
    source: "https://bilalkobattay1212.wixsite.com/recallify",
    live: "#",
    year: "2022",
  },
];
