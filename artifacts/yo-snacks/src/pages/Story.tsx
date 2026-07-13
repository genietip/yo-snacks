import { motion } from "framer-motion";
import { Link } from "wouter";
import SharedNav from "@/components/SharedNav";

export default function Story() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#1A1A1A] text-white">
      <SharedNav />

      <div className="flex-1 min-h-0 flex items-center px-6 md:px-12 lg:px-16 py-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 w-full max-w-6xl mx-auto items-center">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-[#242424]">
              <img
                src="/friends-park.png"
                alt="Friends enjoying Yo-Snacks together"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "calc(100vh - 220px)" }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#FFE000] text-black px-5 py-3 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl transform rotate-[-5deg]">
              Est. USA 🇺🇸
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[#888888] font-bold tracking-[0.2em] uppercase text-xs mb-3">Our Story</p>
            <h1 className="text-[clamp(2rem,4vw,3.6rem)] font-display uppercase leading-[0.9] mb-6">
              Built for Those Who<br />
              <span className="text-[#FFE000]">Dare to Snack Different</span>
            </h1>
            <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                We got tired of the snack aisle looking the same. You had the "fun" brands packed with artificial everything, and the "healthy" brands that tasted like cardboard. Nothing hit right.
              </p>
              <p>
                So we created Yo-Snacks. A bold, unapologetic snack brand that brings massive global flavors to a perfectly kettle-cooked chip — without the junk.
              </p>
              <p>
                We source the best ingredients, cook them in small batches right here in the USA, and season them heavily because life's too short for bland food. We're proving that{" "}
                <strong className="text-white">you don't have to choose between delicious and clean</strong>.
              </p>
            </div>
            <div className="flex gap-4 mt-7">
              <Link href="/flavors" className="bg-[#FFE000] text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
                Explore Flavors
              </Link>
              <Link href="/contact" className="border border-[rgba(255,255,255,0.2)] text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[rgba(255,255,255,0.08)] transition-colors">
                Order Now
              </Link>
            </div>
          </motion.div>
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
