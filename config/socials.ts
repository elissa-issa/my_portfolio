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
    // TODO: add your GitHub username.
    username: "your-username",
    icon: Icons.gitHub,
    // TODO: add your GitHub profile URL.
    link: "#",
  },
  {
    name: "LinkedIn",
    // TODO: add your LinkedIn display name.
    username: "Elissa Issa",
    icon: Icons.linkedin,
    // TODO: add your LinkedIn profile URL.
    link: "#",
  },
  {
    name: "TikTok",
    // TODO: add your TikTok username.
    username: "yourusername",
    icon: Icons.tiktok,
    // TODO: replace with your real TikTok profile URL.
    link: "https://tiktok.com/@yourusername",
  },
  {
    name: "Gmail",
    username: "elissaissa4",
    icon: Icons.gmail,
    link: "mailto:elissaissa4@gmail.com",
  },
];
