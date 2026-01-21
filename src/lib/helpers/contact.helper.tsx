import { SocialLinks } from "@/utils/social.constants";
import { Github, Linkedin, Twitter } from "lucide-react";

export const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: SocialLinks.Github,
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: SocialLinks.LinkedIn,
    color: "hover:text-blue-600",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    color: "hover:text-blue-400",
  },
];
