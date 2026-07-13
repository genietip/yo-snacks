import { motion } from "framer-motion";
import { Mail, Phone, Instagram, ArrowRight } from "lucide-react";
import SharedNav from "@/components/SharedNav";

const contacts = [
  {
    icon: Mail,
    label: "Email Us",
    value: "contact@yo-snacks.com",
    href: "mailto:contact@yo-snacks.com",
    testId: "link-email",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "484 341 0617",
    href: "tel:4843410617",
    testId: "link-phone",
  },
];

export default function Contact() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#111111] text-white">
      <SharedNav />

      <div className="flex-1 min-h-0 flex items-center justify-center px-6 py-6">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none overflow-hidden">
          <span className="text-[20vw] font-display whitespace-nowrap text-white leading-none">ORDER</span>
        </div>

        <div className="relative z-10 w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-[#888888] font-bold tracking-[0.2em] uppercase text-xs mb-3">Get Your Bag</p>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-display uppercase text-[#FFE000] leading-none mb-4">
              Ready to Crunch?
            </h1>
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Whether you want a personal stash or looking to stock your shelves, hit us up. Wholesale and direct orders open now.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {contacts.map((c, i) => (
              <motion.a
                key={c.testId}
                href={c.href}
                data-testid={c.testId}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="bg-[#1a1a1a] hover:bg-[#242424] border border-[rgba(255,255,255,0.06)] p-7 rounded-3xl flex items-center gap-5 transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center group-hover:bg-[#FFE000] group-hover:text-black transition-colors">
                  <c.icon size={24} />
                </div>
                <div>
                  <div className="text-[#888888] uppercase font-bold tracking-widest text-[10px] mb-1">{c.label}</div>
                  <div className="text-base md:text-lg font-bold">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/yosnacks" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-[#242424] flex items-center justify-center hover:bg-[#FFE000] hover:text-black transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@yosnacks" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-[#242424] flex items-center justify-center hover:bg-[#FFE000] hover:text-black transition-colors" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@yosnacks" target="_blank" rel="noreferrer" className="text-xs font-bold text-gray-500 hover:text-[#FFE000] transition-colors uppercase tracking-wider">
                @yosnacks
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-[#FFE000] text-black py-2.5 px-6 shrink-0">
        <div className="max-w-[1600px] mx-auto flex flex-wrap justify-center md:justify-between items-center gap-x-6 gap-y-1">
          {["🍳 Kettle Cooked", "🌾 Gluten Free", "✡️ Kosher", "🛡️ Allergen Free", "🌱 Vegan", "🇺🇸 100% Made In USA"].map((c) => (
            <span key={c} className="font-bold uppercase tracking-wider text-[10px]">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
