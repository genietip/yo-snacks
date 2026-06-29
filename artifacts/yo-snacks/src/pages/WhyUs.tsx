import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import SharedNav from "@/components/SharedNav";

const stats = [
  { number: "100%", label: "Made in USA" },
  { number: "0g", label: "Gluten" },
  { number: "2", label: "Bold Flavors" },
  { number: "∞", label: "Crunch Factor" },
];

const reasons = [
  "No artificial colors or flavors",
  "Kettle cooked for max crunch",
  "Bold global flavors, real ingredients",
  "Cleaner than the big names, tastier too",
];

export default function WhyUs() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#1A1A1A] text-white">
      <SharedNav />

      <div className="flex-1 min-h-0 flex items-center px-6 md:px-12 lg:px-16 py-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 w-full max-w-6xl mx-auto items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#888888] font-bold tracking-[0.2em] uppercase text-xs mb-3">Why Yo-Snacks</p>
            <h1 className="text-[clamp(2.4rem,4.5vw,4rem)] font-display uppercase leading-[0.9] mb-5">
              Healthier.<br />Tastier.<br />
              <span className="text-[#FFE000]">Hard to put down.</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base mb-5 max-w-md leading-relaxed">
              We ditched the junk but kept the junk-food taste. Every bag is packed with real ingredients and kettle cooked for that perfect, shattering crunch.
            </p>
            <ul className="space-y-3 mb-7">
              {reasons.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-[#B8D4A8] shrink-0" size={18} />
                  <span className="text-gray-200 text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-[#FFE000] text-black px-7 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors"
            >
              Shop the Drop
            </Link>
          </motion.div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.09 }}
                className="bg-[#242424] p-6 md:p-8 rounded-3xl border border-[rgba(255,255,255,0.05)] flex flex-col items-center justify-center text-center hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="text-[#FFE000] font-display text-[2.5rem] md:text-[3rem] leading-none mb-1">{stat.number}</div>
                <div className="text-[#888888] font-bold uppercase tracking-widest text-[10px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#FFE000] text-black py-2.5 px-6 shrink-0">
        <div className="max-w-[1600px] mx-auto flex flex-wrap justify-center md:justify-between items-center gap-x-6 gap-y-1">
          {["🍳 Kettle Cooked", "✅ Certified", "🌾 Gluten Free", "✡️ Kosher", "🛡️ Allergen Free", "🌱 Vegan", "🇺🇸 100% Made In USA"].map((c) => (
            <span key={c} className="font-bold uppercase tracking-wider text-[10px]">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
