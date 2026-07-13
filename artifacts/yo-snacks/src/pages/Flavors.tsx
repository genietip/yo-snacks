import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SharedNav from "@/components/SharedNav";

const flavors = [
  {
    name: "Indian Tikka Masala",
    tag: "Fan Fave 🔥",
    tagBg: "bg-[#FF4D4D] text-white",
    glow: "#FF4D4D",
    emoji: "🌶️",
    img: "/tikka-masala.png",
    desc: "Aromatic spices, savory depth, a kiss of heat. Inspired by the streets of Mumbai — now in your hands.",
    tags: ["Bold", "Spicy", "Aromatic"],
    cta: { label: "See Details", href: "https://yo-snacks.com/wp-content/uploads/2026/05/YC_TikkaMasala_1.5oz_5.5x8.5_r1.pdf", external: true },
    testId: "card-flavor-tikka",
  },
  {
    name: "Caribbean Sweet & Spice",
    tag: "New ✨",
    tagBg: "bg-[#FFE000] text-black",
    glow: "#FF8C00",
    emoji: "🏝️",
    img: "/sweet-spice.png",
    desc: "Sweet meets heat meets island energy. A tropical adventure that lands crunchy and leaves you wanting more.",
    tags: ["Sweet", "Tropical", "Bold"],
    cta: { label: "Order Now", href: "/contact", external: false },
    testId: "card-flavor-caribbean",
  },
];

export default function Flavors() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#1A1A1A] text-white">
      <SharedNav />

      <div className="flex-1 min-h-0 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 md:mb-8"
        >
          <p className="text-[#888888] font-bold tracking-[0.2em] uppercase text-xs mb-2">The Lineup</p>
          <h1 className="text-[clamp(2.4rem,5vw,4.5rem)] font-display uppercase leading-none">Pick Your Vibe</h1>
          <p className="text-gray-400 mt-2 text-sm max-w-md mx-auto">Two bold flavors. Zero compromises. Which one are you grabbing first?</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto w-full">
          {flavors.map((flavor, i) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group relative"
              data-testid={flavor.testId}
            >
              <div
                className="absolute -inset-1 rounded-[2rem] blur-[50px] opacity-20 group-hover:opacity-35 transition-opacity duration-500"
                style={{ backgroundColor: flavor.glow }}
              />
              <div className="relative bg-[#242424] rounded-3xl p-6 border border-[rgba(255,255,255,0.08)] hover:-translate-y-1 transition-transform duration-300 flex gap-5 items-center">
                <div className="relative shrink-0 w-36 h-36 md:w-44 md:h-44 flex items-center justify-center">
                  <span className="absolute text-5xl opacity-10 group-hover:opacity-20 transition-opacity">{flavor.emoji}</span>
                  <img
                    src={flavor.img}
                    alt={flavor.name}
                    className="w-full h-full object-contain relative z-10 group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-400"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 ${flavor.tagBg}`}>
                    {flavor.tag}
                  </span>
                  <h2 className="text-xl md:text-2xl font-display uppercase mb-2">{flavor.name}</h2>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3">{flavor.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {flavor.tags.map((t) => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[rgba(255,255,255,0.05)] rounded-full text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  {flavor.cta.external ? (
                    <a href={flavor.cta.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-white font-bold uppercase tracking-wider text-xs hover:text-[#FFE000] transition-colors">
                      {flavor.cta.label} <ArrowRight size={12} />
                    </a>
                  ) : (
                    <a href={flavor.cta.href} className="inline-flex items-center gap-1.5 text-white font-bold uppercase tracking-wider text-xs hover:text-[#FFE000] transition-colors">
                      {flavor.cta.label} <ArrowRight size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-[#FFE000] text-black py-2.5 px-6 shrink-0">
        <div className="max-w-[1600px] mx-auto flex flex-wrap justify-center md:justify-between items-center gap-x-6 gap-y-1">
          {["🍳 Kettle Cooked", "🌾 Gluten Free", "🛡️ Allergen Free", "🌱 Vegan", "🇺🇸 100% Made In USA"].map((c) => (
            <span key={c} className="font-bold uppercase tracking-wider text-[10px]">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
