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
  bio: "Engineering Leader | Digital Transformation | Community Steward",
  aboutMe: "Ramakanth V.R. is an engineering and technology leader with over two decades of experience in software systems, where he has worked at the intersection of hardware, software, and emerging technologies to build impactful and reliable solutions. Over the years, he has led diverse global cross-functional teams, driven digital transformation initiatives, and contributed to innovation through patented work in his earlier roles. Colleagues know him as someone who combines strong technical depth with a practical, people-first approach to leadership.\n\nOutside his professional life, Ramakanth has always believed in giving back to the institutions and communities that shaped him. He has maintained a close association with his alma mater, BVRIT Narsapur, for more than 20 years and currently serves as a board member, supporting initiatives that help students and the institution stay connected with evolving industry needs.\n\nRamakanth has been an active member in the communities he lived, who believes that strong communities are built through participation, empathy, and shared responsibility. He has been involved in several initiatives aimed at improving infrastructure, encouraging volunteer-led activities, and fostering constructive dialogue among fellow residents. His approach focuses on finding balanced solutions while ensuring that community decisions remain inclusive and sustainable.\n\nOn a personal note, Ramakanth values independent thinking, enjoys meaningful conversations, and embraces change as an opportunity to learn and grow. Above all, he considers himself a family person who takes great joy in supporting his daughter’s interests and being present for the moments that matter most.",
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