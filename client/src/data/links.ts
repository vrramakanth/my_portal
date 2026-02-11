import { Github, Twitter, Instagram, Linkedin, Globe, Mail, Youtube, Music, MessageCircle, Facebook, User } from "lucide-react";

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: any; // Lucide icon component
  color?: string; // Optional brand color for hover states
  isInternal?: boolean;
}

export const userData = {
  name: "Ramakanth V R",
  handle: "@vrramakanth",
  bio: "Engineering Leader | Digital Transformation | Community Steward",
  aboutMe: "Ramakanth V.R. is an engineering and technology leader with over two decades of experience in software systems, where he has worked at the intersection of hardware, software, and emerging technologies to build impactful and reliable solutions. Over the years, he has led diverse global cross-functional teams, driven digital transformation initiatives, and contributed to innovation through patented work in his earlier roles. Colleagues know him as someone who combines strong technical depth with a practical, people-first approach to leadership.\n\nOutside his professional life, Ramakanth has always believed in giving back to the institutions and communities that shaped him. He has maintained a close association with his alma mater, BVRIT Narsapur, for more than 20 years and currently serves as a board member, supporting initiatives that help students and the institution stay connected with evolving industry needs.\n\nRamakanth has been an active member in the communities he lived, who believes that strong communities are built through participation, empathy, and shared responsibility. He has been involved in several initiatives aimed at improving infrastructure, encouraging volunteer-led activities, and fostering constructive dialogue among fellow residents. His approach focuses on finding balanced solutions while ensuring that community decisions remain inclusive and sustainable.\n\nOn a personal note, Ramakanth values independent thinking, enjoys meaningful conversations, and embraces change as an opportunity to learn and grow. Above all, he considers himself a family person who takes great joy in supporting his daughter’s interests and being present for the moments that matter most.",
  avatar: "profile.jpg", // Updated to the new profile picture
  links: [
    {
      id: "about",
      label: "About Me",
      url: "/about",
      icon: User,
      color: "bg-indigo-500",
      isInternal: true
    },
    {
      id: "linkedin",
      label: "Connect on LinkedIn",
      url: "https://www.linkedin.com/in/vrramakanth/",
      icon: Linkedin,
      color: "bg-blue-700"
    },
    {
      id: "facebook",
      label: "Facebook",
      url: "https://www.facebook.com/vrramakanth",
      icon: Facebook,
      color: "bg-blue-600"
    },
    {
      id: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/vrramakanth/",
      icon: Instagram,
      color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600"
    },
    {
      id: "twitter",
      label: "Twitter / X",
      url: "https://x.com/Ramakanthvanga1",
      icon: Twitter,
      color: "bg-black"
    },
    {
      id: "talk-ai",
      label: "Talk on Thriving in the Age of AI",
      url: "https://alumni.srivishnu.edu.in/newsroom/news/Talk-on-Thriving-in-the-Age-of-AI-by-BVRIT-Alumnus-Mr-Ramakanth-V-R",
      icon: Youtube,
      color: "bg-red-500"
    },
    {
      id: "youtube-1",
      label: "Watch on YouTube (Session 1)",
      url: "https://youtu.be/b8f_KQBu5p8?si=hORA5ly3cYSq753U",
      icon: Youtube,
      color: "bg-red-600"
    },
    {
      id: "youtube-2",
      label: "Watch on YouTube (Session 2)",
      url: "https://youtu.be/aDK61PGKdY?si=6dY5OFuruwtRNUKr",
      icon: Youtube,
      color: "bg-red-600"
    },
    {
      id: "youtube-3",
      label: "Watch on YouTube (Session 3)",
      url: "https://youtu.be/MqDwm5mUWGU?si=KqLYFUtm1ZxwtcOQ",
      icon: Youtube,
      color: "bg-red-600"
    },
    {
      id: "patents",
      label: "View Patents & Assignments",
      url: "https://assignmentcenter.uspto.gov/search/patent/assigneeAssignorDetails%3FexactAssignorName%3DRANGA,%20RAMAKANTH%20VENGETA",
      icon: Globe,
      color: "bg-blue-600"
    },
    {
      id: "credly",
      label: "My Professional Certifications",
      url: "https://www.credly.com/users/ramakanth-vr/badges",
      icon: Globe,
      color: "bg-orange-500"
    },
    {
      id: "governing-body",
      label: "BVRIT Governing Body Profile",
      url: "https://bvrit.ac.in/governing-body/?fbclid=IwAR0OouuLeFWW5I-67AdYMbWf2DXyEElSArzN4yAHvvPbFXvvUgUzO-",
      icon: User,
      color: "bg-emerald-600"
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