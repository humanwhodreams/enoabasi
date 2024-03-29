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
      end: "Now"
    },
    roles: [
      "Building connections with partners & clients.",
      "Spending time honing my skills in Software development.",
      "Conducting research on web technologies for building better products.",
      "Helping make a better web in the OSS community.",
    ]
  },
  {
    position: "Software Developer Intern (web)",
    office: "Ice Queen SPA",
    duration: {
      start: "Nov 2019",
      end: "Mar 2020",
    },
    roles: [
      "Built tools to help make faster bookings.",
      "Worked with a team to develop the company's site.",
      "Worked in a team to setup customer flow from the site to whatsapp.",
      "Helped in migrating the site from no-code to a full-stack code base."
    ],
  },
];
