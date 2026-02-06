import { Github, Twitter, Instagram, Linkedin, Globe, Mail, Youtube, Music, MessageCircle, Facebook } from "lucide-react";

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
  bio: "Strong views | Digital change | Long-term stewardship",
  avatar: "profile.jpg", // Updated to the new profile picture
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
      url: "https://x.com/Ramakanthvanga1",
      icon: Twitter,
      color: "bg-black"
    },
    {
      id: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/vrramakanth/",
      icon: Instagram,
      color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600"
    },
    {
      id: "facebook",
      label: "Facebook",
      url: "https://www.facebook.com/vrramakanth",
      icon: Facebook,
      color: "bg-blue-600"
    },
    {
      id: "whatsapp",
      label: "WhatsApp Me",
      url: "https://wa.me/919880766321",
      icon: MessageCircle,
      color: "bg-green-500"
    },
    {
      id: "email",
      label: "Get in Touch",
      url: "mailto:vrramakanth@gmail.com",
      icon: Mail,
      color: "bg-purple-600"
    }
  ]
};