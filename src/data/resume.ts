export const RESUME_DATA = {
  name: "Mingyu Kim",
  initials: "MK",
  location: "Seoul, South Korea",
  locationLink: "https://www.google.com/maps/place/Seoul",
  about:
    "Software Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL.",
  avatarUrl: "https://github.com/shadcn.png",
  personalWebsiteUrl: "https://mingyu.dev",
  contact: {
    email: "mingyu@example.com",
    tel: "+82 10-1234-5678",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mingyu",
        icon: "GitHubIcon",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mingyu/",
        icon: "LinkedInIcon",
      },
      {
        name: "X",
        url: "https://x.com/mingyu",
        icon: "XIcon",
      },
    ],
  },
  education: [
    {
      school: "Seoul National University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Tech Corp",
      link: "https://techcorp.com",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      start: "2022",
      end: "Present",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "StartUp Inc",
      link: "https://startup.com",
      badges: [],
      title: "Full Stack Developer",
      start: "2020",
      end: "2022",
      description:
        "Designed and implemented a scalable API for the mobile application. Built the frontend using React Native. Technologies: Node.js, Express, React Native",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "Tailwind CSS",
    "PostgreSQL",
    "Docker",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
  ],
} as const;
