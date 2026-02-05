import { motion } from "framer-motion";
import { SocialLink } from "../data/links";

interface LinkCardProps {
  link: SocialLink;
  index: number;
}

export function LinkCard({ link, index }: LinkCardProps) {
  const Icon = link.icon;

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex items-center p-4 mb-3 w-full bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl shadow-sm hover:shadow-lg hover:bg-white/80 transition-all duration-300 overflow-hidden"
    >
      {/* Hover Background Color Splash */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${link.color?.startsWith('bg-gradient') ? link.color : (link.color || 'bg-primary')}`} 
      />
      
      {/* Icon Container */}
      <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-white/50 border border-white/60 shadow-sm text-gray-700 group-hover:scale-110 transition-transform duration-300 mr-4 shrink-0`}>
        <Icon className="w-5 h-5" />
      </div>

      {/* Text */}
      <span className="flex-1 font-medium text-gray-800 group-hover:text-black tracking-wide text-base">
        {link.label}
      </span>

      {/* Arrow Icon */}
      <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17l9.2-9.2M17 17V7H7" />
        </svg>
      </div>
    </motion.a>
  );
}