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
      id: "twitter",
      label: "Twitter / X",
      url: "https://twitter.com/vrramakanth",
      icon: Twitter,
      color: "bg-black"
    },
    {
      id: "instagram",
      label: "Instagram",
      url: "https://instagram.com/vrramakanth",
      icon: Instagram,
      color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600"
    },
    {
      id: "facebook",
      label: "Facebook",
      url: "https://facebook.com/vrramakanth",
      icon: Globe, // Facebook icon not in current imports, using Globe as placeholder or I should check Lucide
      color: "bg-blue-600"
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