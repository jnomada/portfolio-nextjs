export type ProjectType = "game" | "website";

export interface Project {
  order: number
  slug: string;
  title: string;
  type: ProjectType;
  featured: boolean;
  professional: boolean,
  description: string;
  thumbnail?: string;
  url?: string;
  alt: string;
  externalUrl: string,
  technologies: string[],
  company: string
}

export const projects: Project[] = [
  {
    order: 1,
    slug: "devils-night-out",
    title: "Devil's Night Out",
    type: "game",
    featured: true,
    professional: false,
    description: "VR survival horror game developed in Unity.",
    thumbnail: "/img/dno-logo.png",
    alt: "Devil's Night Out logo",
    url: "/games",
    externalUrl: "https://jnomada.itch.io/devils-night-out",
    technologies: ["Unity" , "C#", "XR Interaction Toolkit", "Blender"],
    company: "Personal project"
  },
  {
    order: 8,
    slug: "my-portfolio",
    title: "Portfolio Website",
    type: "website",
    featured: false,
    professional: false,
    description: "Personal portfolio built with Next.js.",
    thumbnail: "/img/portfolio.png",
    alt: "Devil's Night Out logo",
    url: "https://jsealey.com",
    externalUrl: "https://jsealey.com",
    technologies: ["Nextjs", "React", "CSS modules"],
    company: "Personal project"
  },
  {
    order: 2,
    slug: "euromelanoma",
    title: "Euromelanoma.eu",
    type: "website",
    featured: true,
    professional: true,
    description: "Euromelanoma exists to promote and share information on skin cancer prevention, early diagnosis and treatment.",
    thumbnail: "/img/euromelanoma.png",
    alt: "Euromelanoma.eu screentshot",
    url: "https://www.euromelanoma.eu",
    externalUrl: "https://www.euromelanoma.eu",
    technologies: ["ApostropheCMS", "Nodejs", "MongoDB", "Nunjucks", "Javascript", "jQuery", "LESS", "SCSS", "CSS", "HTML"],
    company: "Swiss4ward"
  },
  {
    order: 3,
    slug: "patient-reported-outcomes",
    title: "Patient Reported Outcomes (PROS)",
    type: "website",
    featured: false,
    professional: true,
    description: "Research group of the Institute for Health Care Research in Dermatology and Nursing (IVDP) at the University Medical Center Hamburg-Eppendorf (UKE).",
    thumbnail: "/img/pros.png",
    alt: "Patient Reported Outcomes (PROS) screenshot",
    url: "https://www.patient-reported-outcomes.com",
    externalUrl: "https://www.patient-reported-outcomes.com",
    technologies: ["ApostropheCMS", "Nodejs", "MongoDB", "Nunjucks", "Javascript", "jQuery", "LESS", "SCSS", "CSS", "HTML"],
    company: "Swiss4ward"
  },
  {
    order: 4,
    slug: "pchc",
    title: "PCHC.eu",
    type: "website",
    featured: false,
    professional: true,
    description: "Dedicated to the research and promotion of “People-Centered Health Care” (PCHC).",
    thumbnail: "/img/pchc.png",
    alt: "PCHC.eu screenshot",
    url: "https://www.pchc.eu",
    externalUrl: "https://www.pchc.eu",
    technologies: ["ApostropheCMS", "Nodejs", "MongoDB", "Nunjucks", "Javascript", "jQuery", "LESS", "SCSS", "CSS", "HTML"],
    company: "Swiss4ward"
  },
  {
    order: 5,
    slug: "haeutejournal",
    title: "Haeutejournal.de",
    type: "website",
    featured: false,
    professional: true,
    description: "Working towards a skin disease free planet.",
    thumbnail: "/img/haeutejournal.png",
    alt: "Haeutejournal screenshot",
    externalUrl: "https://www.haeutejournal.de/",
    url: "https://www.haeutejournal.de/",
    technologies: ["ApostropheCMS", "Nodejs", "MongoDB", "Nunjucks", "Javascript", "jQuery", "LESS", "SCSS", "CSS", "HTML"],
    company: "Swiss4ward"
  }
];