import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import SharedNav from "@/components/SharedNav";

const retailers = [
  {
    name: "Beer Land",
    address: "1728–1736 Tilghman St, Allentown, PA 18104",
    mapQuery: "Beer Land, 1728-1736 Tilghman St, Allentown, PA 18104",
  },
  {
    name: "Hanover Beer Store",
    address: "828 Hanover Ave, Allentown, PA 18109",
    mapQuery: "Hanover Beer Store, 828 Hanover Ave, Allentown, PA 18109",
  },
  {
    name: "Telangana Spice Kitchen",
    address: "Exton, PA",
    mapQuery: "Telangana Spice Kitchen, Exton, PA",
  },
  {
    name: "Himalaya Indian Grocery",
    address: "Exton, PA",
    mapQuery: "Himalaya Indian Grocery, Exton, PA",
  },
];

export default function WhereToBuy() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A1A] text-white">
      <SharedNav />

      <main className="flex-1 px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#888888]">
              Find your crunch
            </p>
            <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] uppercase leading-none">
              Where to <span className="text-[#FFE000]">Buy</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-400 md:text-base">
              Find Yo-Snacks at these local stores. Tap a location for directions in Google Maps.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {retailers.map((retailer, index) => (
              <motion.article
                key={retailer.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex min-h-40 flex-col justify-between rounded-2xl border border-white/10 bg-[#242424] p-6"
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE000]/10 text-[#FFE000]">
                    <MapPin size={19} />
                  </div>
                  <h2 className="font-display text-2xl uppercase">{retailer.name}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400">{retailer.address}</p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(retailer.mapQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFE000] transition-colors hover:text-white"
                >
                  Open Google Maps <ArrowUpRight size={14} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <div className="bg-[#FFE000] px-6 py-2.5 text-black">
        <div className="mx-auto flex max-w-[1600px] flex-wrap justify-center gap-x-6 gap-y-1 md:justify-between">
          {["🍳 Kettle Cooked", "🌾 Gluten Free", "🛡️ Allergen Free", "🌱 Vegan", "🇺🇸 100% Made In USA"].map((item) => (
            <span key={item} className="text-[10px] font-bold uppercase tracking-wider">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
