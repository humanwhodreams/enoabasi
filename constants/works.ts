type Works = {
  position: string;
  office: string;
  duration: {
    start: string;
    end: string;
  };
  roles: string[];
};

export const works: Works[] = [
  {
    position: "Software Developer Freelancer",
    office: "Currently home",
    duration: {
      start: "Jan 2021",
      end: "Now",
    },
    roles: [
      "Building connections with partners & clients.",
      "Spending time honing my skills in Software development.",
      "Conducting research on web technologies & architectures for building better products.",
      "Helping make a better web in the OSS community.",
    ],
  },
  {
    position: "Software Developer",
    office: "Sevidim [startup]",
    duration: {
      start: "Aug 2023",
      end: "Jan 2024 | remote",
    },
    roles: [
      "Worked with engineers and product managers to ship multiple features for video streaming communities.",
    ],
  },
  {
    position: "Software Developer Intern",
    office: "Realastio [startup]",
    duration: {
      start: "Sep 2020",
      end: "Dec 2020 | remote",
    },
    roles: [
      "Worked on a team to conduct research real-estate listing for investors in the Middle east.",
      "Worked on a team to develop the company's primary products.",
      "Conducted research on real-estate expansion in the Middle east & UAE.",
    ],
  },
  {
    position: "Software Developer Intern",
    office: "Ice Queen SPA",
    duration: {
      start: "Nov 2019",
      end: "Mar 2020",
    },
    roles: [
      "Worked on a team to build tools to help make faster bookings.",
      "Worked on a team to develop the company's site.",
      "Worked on a team to setup customer flow from the site to whatsapp.",
      "Helped in migrating the site from no-code to a full-stack code base.",
    ],
  },
];
