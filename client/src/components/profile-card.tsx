import { motion } from "framer-motion";
import profileImage from "../assets/images/profile.jpg";

interface ProfileCardProps {
  name: string;
  handle: string;
  bio: string;
}

export function ProfileCard({ name, handle, bio }: ProfileCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center mb-8 px-4"
    >
      <div className="relative mb-4 group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-orange-300 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
        <img 
          src={profileImage} 
          alt={name}
          className="relative w-32 h-32 rounded-full object-cover border-4 border-white/80 shadow-xl" 
        />
        <div className="absolute bottom-1 right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-lg">
          ✨
        </div>
      </div>
      
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-1 tracking-tight">
        {name}
      </h1>
      
      <p className="text-sm font-medium text-primary/80 mb-3 font-mono bg-white/50 px-3 py-1 rounded-full border border-white/40 shadow-sm">
        {handle}
      </p>
      
      <p className="text-gray-600 max-w-xs leading-relaxed whitespace-pre-line">
        {bio}
      </p>
    </motion.div>
  );
}