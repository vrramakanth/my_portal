import { userData } from "@/data/links";
import { ProfileCard } from "@/components/profile-card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen w-full flex justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background Decor */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-400/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-md relative z-10">
        <Link href="/">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Links
          </motion.button>
        </Link>

        <ProfileCard 
          name={userData.name}
          handle={userData.handle}
          bio={userData.bio}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 glass-panel rounded-3xl text-gray-700 leading-relaxed text-sm border-white/40 shadow-xl"
        >
          <h3 className="text-gray-900 font-bold mb-4 uppercase tracking-wider text-xs border-b border-white/20 pb-2 flex items-center gap-2">
            ✨ About Me
          </h3>
          <div className="space-y-6">
            {userData.aboutMe.split('\n\n').map((para, i) => (
              <p key={i} className="text-base text-gray-700 leading-relaxed">{para}</p>
            ))}
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center text-gray-400 text-sm"
        >
          <p>© 2024 Ramakanth V R</p>
        </motion.footer>
      </div>
    </div>
  );
}