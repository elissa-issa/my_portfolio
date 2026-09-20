import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  websiteLink?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "bamptee",
    position: "Junior Full Stack Developer",
    company: "Bamptee",
    location: "Lebanon - France",
    startDate: new Date("2025-06-01"),
    endDate: "Present",
    description: [
      "Designed and implemented new features, REST/GraphQL APIs, and end-to-end React pages.",
      "Performed extensive bug fixing, UI testing, and enhancements.",
      "Participated in agile workflows including daily stand-ups, sprint planning, and code reviews.",
    ],
    achievements: [
      "Designed and implemented new features, REST/GraphQL APIs, and end-to-end React pages.",
      "Performed extensive bug fixing, UI testing, and enhancements.",
      "Participated in agile workflows including daily stand-ups, sprint planning, and code reviews.",
    ],
    skills: ["React", "Node.js", "GraphQL", "Javascript"],
    websiteLink: "https://app.bamptee.com/",
  },
  {
    id: "orthodox-archdiocese-beirut",
    position: "Intern Software Developer",
    company: "Orthodox Archdiocese of Beirut",
    location: "Beirut, Lebanon",
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-09-01"),
    description: [
      "Fully developed and designed the front-end of Beirut Annunciation College's website using React and Figma.",
      "Revised and updated legacy codebases to modern development standards.",
    ],
    achievements: [
      "Fully developed and designed the front-end of Beirut Annunciation College's website using React and Figma.",
      "Revised and updated legacy codebases to modern development standards.",
    ],
    skills: ["React", "Figma", "Javascript", "HTML 5", "CSS 3"],
    websiteLink: "https://www.annunciationcollege.edu.lb/",
  },
];
