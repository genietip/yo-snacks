import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import SharedNav from "@/components/SharedNav";

const retailers = [
  {
    name: "Beer Land",
    address: "1728–1736 Tilghman St, Allentown, PA 18104",
    mapQuery: "Beer Land, 1728-1736 Tilghman St, Allentown, PA 18104",
    image: "/retailers/beer-land.png",
    imageAlt: "Beer Land storefront on Tilghman Street",
  },
  {
    name: "Hanover Beer Store",
    address: "828 Hanover Ave, Allentown, PA 18109",
    mapQuery: "Hanover Beer Store, 828 Hanover Ave, Allentown, PA 18109",
    image: "/retailers/hanover-beer-store.png",
    imageAlt: "Hanover Beer Store storefront on Hanover Avenue",
  },
  {
    name: "Telangana Spice Kitchen",
    address: "8 N Pottstown Pike, Exton, PA",
    mapQuery: "Telangana Spice Kitchen, 8 N Pottstown Pike, Exton, PA",
    image: "/retailers/telangana-spice-kitchen.png",
    imageAlt: "Telangana Spice Kitchen logo",
    imageFit: "contain",
  },
  {
    name: "Himalaya Indian Grocery",
    address: "29 Marchwood Rd, Exton, PA 19341",
    mapQuery: "Himalaya Indian Grocery, 29 Marchwood Rd, Exton, PA 19341",
    image: "/retailers/himalaya-indian-grocery.png",
    imageAlt: "Himalaya Indian Grocery storefront in Exton",
  },
  {
    name: "Coatesville Community Market",
    address: "266 Lincoln Hwy E, Coatesville, PA 19320",
    mapQuery: "Coatesville Community Market, 266 Lincoln Hwy E, Coatesville, PA 19320",
    image: "/retailers/coatesville-community-market.png",
    imageAlt: "Coatesville Community Market storefront with the car removed",
  },
  {
    name: "United Fuel",
    address: "299 East Lincoln Highway, Downingtown, PA 19335",
    mapQuery: "United Fuel, 299 East Lincoln Highway, Downingtown, PA 19335",
    image: "/retailers/united-fuel-lincoln.png",
    imageAlt: "United Fuel storefront at 299 East Lincoln Highway, with the car removed",
  },
  {
    name: "United Fuel",
    address: "299 W Uwchlan Ave, Downingtown, PA 19335",
    mapQuery: "United Fuel, 299 W Uwchlan Ave, Downingtown, PA 19335",
    image: "/retailers/united-fuel-uwchlan.png",
    imageAlt: "United Fuel storefront at 299 W Uwchlan Avenue",
    imageFit: "contain-dark",
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
                key={`${retailer.name}-${retailer.address}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#242424]"
              >
                <div className="aspect-[16/9] overflow-hidden bg-white/5">
                  {retailer.image ? (
                    <img
                      src={retailer.image}
                      alt={retailer.imageAlt}
                      loading="lazy"
                      className={`h-full w-full ${
                        retailer.imageFit === "contain"
                          ? "object-contain bg-white p-8"
                          : retailer.imageFit === "contain-dark"
                            ? "object-contain bg-[#1A1A1A]"
                          : "object-cover"
                      }`}
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#303030] to-[#1f1f1f] px-6 text-center">
                      <MapPin size={28} className="text-[#FFE000]" />
                      <span className="font-display text-xl uppercase text-white/90">
                        {retailer.name}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                        Storefront photo coming soon
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
                  <div>
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFE000]/10 text-[#FFE000]">
                      <MapPin size={18} />
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
                </div>
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
