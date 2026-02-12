import { userData } from "@/data/links";
import { ProfileCard } from "@/components/profile-card";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Youtube, ExternalLink, Award, Landmark, FileText } from "lucide-react";

export default function About() {
  const mediaLinks = [
    {
      label: "Talk on Thriving in the Age of AI",
      url: "https://alumni.srivishnu.edu.in/newsroom/news/Talk-on-Thriving-in-the-Age-of-AI-by-BVRIT-Alumnus-Mr-Ramakanth-V-R",
      id: "ai-talk"
    },
    {
      label: "Watch on YouTube (Session 1)",
      url: "https://youtu.be/b8f_KQBu5p8?si=hORA5ly3cYSq753U",
      videoId: "b8f_KQBu5p8"
    },
    {
      label: "Watch on YouTube (Session 2)",
      url: "https://youtu.be/aDK61PGKdY?si=6dY5OFuruwtRNUKr",
      videoId: "aDK61PGKdY"
    },
    {
      label: "Watch on YouTube (Session 3)",
      url: "https://youtu.be/MqDwm5mUWGU?si=KqLYFUtm1ZxwtcOQ",
      videoId: "MqDwm5mUWGU"
    }
  ];

  const professionalLinks = [
    {
      label: "US Patent: US20090257628",
      url: "https://patents.google.com/patent/US20090257628",
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      label: "My Professional Certifications",
      url: "https://www.credly.com/users/ramakanth-vr/badges",
      icon: Award,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      label: "BVRIT Governing Body Profile",
      url: "https://bvrit.ac.in/governing-body/?fbclid=IwAR0OouuLeFWW5I-67AdYMbWf2DXyEElSArzN4yAHvvPbFXvvUgUzO-",
      icon: Landmark,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

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
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-medium transition-colors cursor-pointer"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 p-6 glass-panel rounded-3xl border-white/40 shadow-xl"
        >
          <h3 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-xs border-b border-white/20 pb-2 flex items-center gap-2">
            🏆 Patents, Certs & Leadership
          </h3>
          <div className="space-y-4">
            {professionalLinks.map((link, idx) => (
              <a 
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/40 hover:bg-white/60 border border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${link.bg} flex items-center justify-center ${link.color}`}>
                    <link.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-800">{link.label}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 p-6 glass-panel rounded-3xl border-white/40 shadow-xl"
        >
          <h3 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-xs border-b border-white/20 pb-2 flex items-center gap-2">
            📰 In Media
          </h3>

          <div className="space-y-6 mb-8">
            <h4 className="text-gray-600 font-semibold text-xs uppercase tracking-widest mb-3">Featured Talks & Videos</h4>
            {mediaLinks.map((link, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-sm font-medium text-gray-800 px-1">{link.label}</p>
                {link.videoId ? (
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-md border border-white/20 bg-black/5">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${link.videoId}`}
                      title={link.label}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                ) : (
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/40 hover:bg-white/60 border border-white/20 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                        <Youtube className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-gray-500 italic">View Article Preview</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-4">
              <h4 className="text-gray-600 font-semibold text-xs uppercase tracking-widest mb-3">Press Coverage</h4>
              <img src="/media-1.jpg" alt="Media Coverage" className="w-full rounded-xl shadow-md border border-white/20" />
              <img src="/media-2.jpg" alt="Media Coverage" className="w-full rounded-xl shadow-md border border-white/20" />
              <img src="/media-3.jpg" alt="Media Coverage" className="w-full rounded-xl shadow-md border border-white/20" />
              <img src="/media-4.jpg" alt="Media Coverage" className="w-full rounded-xl shadow-md border border-white/20" />
              <img src="/media-5.jpg" alt="Media Coverage" className="w-full rounded-xl shadow-md border border-white/20" />
            </div>
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