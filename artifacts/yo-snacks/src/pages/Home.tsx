import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Instagram, Sparkles } from "lucide-react";
import { Link } from "wouter";
import SharedNav from "@/components/SharedNav";
import FlavorQuiz from "@/components/FlavorQuiz";

const TIKTOK_URL = "https://www.tiktok.com/@yosnacks";
const INSTAGRAM_URL = "https://www.instagram.com/yosnacks";

export default function Home() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <>
      <div className="h-screen flex flex-col overflow-hidden bg-[#1A1A1A] text-white">
        <SharedNav />

        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-0">

            {/* LEFT — brand copy */}
            <div className="relative flex flex-col justify-center px-8 md:px-12 lg:px-16 py-6 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.025] select-none pointer-events-none">
                <span className="text-[18vw] md:text-[12vw] font-display whitespace-nowrap text-white leading-none">YO YO</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 flex flex-col gap-4"
              >
                <span className="inline-block w-fit bg-[#FF4D4D] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  New Drop 🔥
                </span>

                <h1 className="text-[clamp(2.6rem,5.5vw,5rem)] font-display leading-[0.88] uppercase">
                  Snacks That<br />
                  <span className="text-[#FFE000]">Hit Different</span>
                </h1>

                <p className="text-sm md:text-base text-gray-300 max-w-xs font-body leading-relaxed">
                  Bold Spice. Serious Crunch.
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/flavors"
                    className="bg-[#FFE000] text-black px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
                  >
                    Explore Flavors
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-[rgba(255,255,255,0.2)] text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[rgba(255,255,255,0.1)] transition-colors"
                  >
                    Order Now <ArrowRight size={12} className="inline ml-1" />
                  </Link>
                </div>

                {/* Quiz CTA */}
                <button
                  onClick={() => setQuizOpen(true)}
                  className="w-fit flex items-center gap-2 text-[#FFE000] text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all group"
                >
                  <Sparkles size={13} className="shrink-0" />
                  Which flavor are you?
                  <span className="text-[#FFE000]/60 group-hover:text-[#FFE000] transition-colors">→</span>
                </button>

                {/* Cert pills */}
                <div className="flex flex-wrap gap-2">
                  {["🌱 Vegan", "✅ Gluten Free", "🇺🇸 Made in USA", "🛡️ Allergen Free"].map((c) => (
                    <span key={c} className="bg-[#242424] px-3 py-1 rounded-full text-xs text-gray-300 border border-[rgba(255,255,255,0.05)] font-body">
                      {c}
                    </span>
                  ))}
                </div>

                {/* Social row */}
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Follow</span>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#242424] flex items-center justify-center hover:bg-[#FFE000] hover:text-black transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={14} />
                  </a>
                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#242424] flex items-center justify-center hover:bg-[#FFE000] hover:text-black transition-colors"
                    aria-label="TikTok"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-bold uppercase tracking-wider text-gray-500 hover:text-[#FFE000] transition-colors"
                  >
                    @yosnacks
                  </a>
                </div>
              </motion.div>
            </div>

            {/* RIGHT — video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative flex items-center justify-center p-4 md:p-6 lg:p-8 min-h-0"
            >
              <div className="relative w-full h-full max-h-full group">
                <div className="absolute -inset-1 bg-[#FFE000] rounded-2xl blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] shadow-2xl">
                  <iframe
                    src="/yo-snacks-video/"
                    title="Yo-Snacks Brand Video"
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom cert strip */}
          <div className="bg-[#FFE000] text-black py-2.5 px-6 shrink-0">
            <div className="max-w-[1600px] mx-auto flex flex-wrap justify-center md:justify-between items-center gap-x-6 gap-y-1">
              {[
                { icon: "🍳", label: "Kettle Cooked" },

                { icon: "🌾", label: "Gluten Free" },

                { icon: "🛡️", label: "Allergen Free" },
                { icon: "🌱", label: "Vegan" },
                { icon: "🇺🇸", label: "100% Made In USA" },
              ].map((cert) => (
                <div key={cert.label} className="flex items-center gap-1.5">
                  <span className="text-base">{cert.icon}</span>
                  <span className="font-bold uppercase tracking-wider text-[10px]">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Flavor Quiz Modal */}
      <AnimatePresence>
        {quizOpen && <FlavorQuiz onClose={() => setQuizOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
