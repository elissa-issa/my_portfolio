import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Elissa Issa's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Elissa Issa's key skills that define her professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description:
      "Development projects (web, mobile, and game dev) alongside creative projects (3D, branding, UI/UX, and audiovisual work).",
    metadata: {
      title: "Projects",
      description:
        "Elissa Issa's development and creative projects, from web and mobile apps to 3D, branding, and multimedia work.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Elissa Issa.",
    },
  },
  resume: {
    title: "Resume",
    description: "Elissa Issa's resume.",
    metadata: {
      title: "Resume",
      description: "Elissa Issa's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Elissa Issa's professional journey and experience timeline.",
    },
  },
};
