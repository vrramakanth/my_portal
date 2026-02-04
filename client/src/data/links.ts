import { Github, Twitter, Instagram, Linkedin, Globe, Mail, Youtube, Music } from "lucide-react";

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: any; // Lucide icon component
  color?: string; // Optional brand color for hover states
}

export const userData = {
  name: "Ramakanth V R",
  handle: "@vrramakanth",
  bio: "Senior Engineering Leader @ State Street \n20+ Years in Digital Transformation & Medical Imaging \nUS Patent Holder | XLRI Alum",
  avatar: "avatar.png", // Will handle import in component
  links: [
    {
      id: "linkedin",
      label: "Connect on LinkedIn",
      url: "https://www.linkedin.com/in/vrramakanth/",
      icon: Linkedin,
      color: "bg-blue-700"
    },
    {
      id: "portfolio",
      label: "Professional Portfolio",
      url: "https://example.com",
      icon: Globe,
      color: "bg-blue-500"
    },
    {
      id: "github",
      label: "GitHub Projects",
      url: "https://github.com/ramakanthv",
      icon: Github,
      color: "bg-neutral-800"
    },
    {
      id: "email",
      label: "Get in Touch",
      url: "mailto:ramakanth@example.com",
      icon: Mail,
      color: "bg-purple-600"
    }
  ]
};