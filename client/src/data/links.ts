import { Github, Twitter, Instagram, Linkedin, Globe, Mail, Youtube, Music } from "lucide-react";

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: any; // Lucide icon component
  color?: string; // Optional brand color for hover states
}

export const userData = {
  name: "Ramakanth",
  handle: "@ramakanth",
  bio: "Digital Artist & Developer 🎨 \nCreating beautiful things on the web. \nBased in San Francisco.",
  avatar: "avatar.png", // Will handle import in component
  links: [
    {
      id: "portfolio",
      label: "My Portfolio",
      url: "https://example.com",
      icon: Globe,
      color: "bg-blue-500"
    },
    {
      id: "twitter",
      label: "Twitter / X",
      url: "https://twitter.com",
      icon: Twitter,
      color: "bg-sky-500"
    },
    {
      id: "instagram",
      label: "Instagram",
      url: "https://instagram.com",
      icon: Instagram,
      color: "bg-pink-500"
    },
    {
      id: "youtube",
      label: "YouTube Channel",
      url: "https://youtube.com",
      icon: Youtube,
      color: "bg-red-600"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
      color: "bg-blue-700"
    },
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com",
      icon: Github,
      color: "bg-neutral-800"
    },
    {
      id: "spotify",
      label: "My Lo-Fi Playlist",
      url: "https://spotify.com",
      icon: Music,
      color: "bg-green-500"
    },
    {
      id: "email",
      label: "Contact Me",
      url: "mailto:alex@example.com",
      icon: Mail,
      color: "bg-purple-600"
    }
  ]
};