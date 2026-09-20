import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "elissa-issa",
    icon: Icons.gitHub,
    link: "https://github.com/elissa-issa",
  },
  {
    name: "LinkedIn",
    username: "Elissa Issa",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/elissa-issa-aaa130304",
  },
  {
    name: "TikTok",
    username: "elissaisssa",
    icon: Icons.tiktok,
    link: "https://www.tiktok.com/@elissaisssa",
  },
  {
    name: "Gmail",
    username: "elissaissa4",
    icon: Icons.gmail,
    link: "mailto:elissaissa4@gmail.com",
  },
];
