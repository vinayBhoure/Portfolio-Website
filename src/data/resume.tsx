import { Icons } from "@/components/icons";
import { FolderClosedIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vinay Bhoure",
  initials: "VB",
  url: "https://www.github.com/vinayBhoure",
  location: "Indore, India",
  locationLink: "https://www.google.com/maps/place/indore",
  description:
    "I'm Vinay Bhoure, final year CSE student at MANIT Bhopal. I'm passionate about building innovative solutions and helping individual to build thier digital presence.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Go",
    "Postgres",
    "C++",
    "HTML",
    "CSS",
    "Javascript"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: FolderClosedIcon, label: "Projects" },
  ],
  contact: {
    email: "bhoure25@gmail.com",
    tel: "+91-9343297622",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://www.github.com/vinayBhoure",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vinaybhoure",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://www.x.com/vinaybhoure_",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:bhoure25@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Self-Employed",
      href: "https://www.linkedin.com/in/vinaybhoure",
      badges: [],
      location: "Remote",
      title: "Freelance",
      logoUrl: "/freelancer.jpeg",
      start: "April 2024",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Codesmith",
      badges: [],
      href: "https://codesmithdev.com/",
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/codesmith.jpeg",
      start: "October 2023",
      end: "December 2023",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "Maulana Azad National Institute of Technology, Bhopal",
      href: "https://www.manit.ac.in/",
      degree: "Bachelors of Technology, CSE",
      logoUrl: "/manit.png",
      start: "2021",
      end: "Present",
    },
    {
      school: "Shri Saibaba Public School",
      href: "https://uwaterloo.ca",
      degree: "Higher Secondary Education (P.C.M)",
      logoUrl: "/waterloo.png",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Alonzo Clothing",
      href: "https://alonzoclothing.vercel.app/",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "React",
        "Typescript",
        "MongoDB",
        "Node.js",
        "Express.js",
        "TailwindCSS",
        "Phone Pe",
        "Shadcn UI",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://alonzoclothing.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vinayBhoure/MERN-Placement",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/alozologo.png",
      video: "",
    },
    {
      title: "Aman Events Bhopal",
      href: "",
      dates: "December 2024 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "React Js",
        "Tailwind CSS",
        "Email JS",
      ],
      links: [
        {
          type: "Website",
          href: "https://aman-events-bhopalk28h.rollout.site/#services",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/amaneventlogo.png",
      video: "",
    },
    {
      title: "Zepto Clone",
      href: "",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://vinaybhoure.github.io/Zepto-CLone/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vinayBhoure/Zepto-CLone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "ChotiLink - URL Shortner",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],

  hackathons: [
    {
      title: "Kriyeta Hackathon",
      dates: "June 2023",
      location: "Indore, India",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
