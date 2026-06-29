import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, CheckCircle2, Instagram, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

const TickerBar = () => {
  return (
    <div className="w-full bg-[#FFE000] text-black overflow-hidden py-2 whitespace-nowrap z-50 relative border-b border-black">
      <div className="inline-block animate-ticker whitespace-nowrap text-sm font-bold uppercase tracking-wider font-display">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="mx-4">
            🔥 Kettle Cooked · Gluten Free · Vegan · Kosher · Allergen Free · 100% Made In USA 🇺🇸 ·
          </span>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["flavors", "certs", "story", "contact", "order"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Flavors", href: "#flavors" },
    { name: "Why Us", href: "#certs" },
    { name: "Our Story", href: "#story" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-[rgba(26,26,26,0.95)] border-b border-[rgba(255,255,255,0.05)] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-3xl font-display tracking-wider text-white" data-testid="nav-logo">
            YO<span className="text-[#FFE000]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase font-bold tracking-widest transition-colors ${
                  activeSection === link.href.substring(1) ? "text-[#FFE000]" : "text-gray-300 hover:text-white"
                }`}
                data-testid={`nav-link-${link.name.toLowerCase().replace(" ", "-")}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a
              href="#order"
              className="bg-[#FFE000] text-black px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors"
              data-testid="nav-cta-order"
            >
              Order Now
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(true)}
            data-testid="btn-mobile-menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#1A1A1A] flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsOpen(false)}
            data-testid="btn-close-menu"
          >
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-5xl font-display uppercase tracking-widest text-white hover:text-[#FFE000]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#order"
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-[#FFE000] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xl hover:bg-white transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.025] select-none">
        <h1 className="text-[15vw] font-display whitespace-nowrap text-white" style={{ lineHeight: 0.8 }}>
          YO YO YO
        </h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-block bg-[#FF4D4D] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            New Drop 🔥
          </span>
          <h1 className="text-6xl md:text-8xl font-display leading-[0.9] mb-6 uppercase">
            Snacks That <br />
            <span className="text-[#FFE000]">HIT DIFFERENT</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md font-body leading-relaxed">
            Kettle cooked. Bold flavors. Zero guilt. Made for those who don't settle for basic.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#flavors"
              className="bg-[#FFE000] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors"
              data-testid="btn-explore-flavors"
            >
              Explore Flavors
            </a>
            <a
              href="#story"
              className="border border-[rgba(255,255,255,0.2)] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[rgba(255,255,255,0.1)] transition-colors"
              data-testid="btn-our-story"
            >
              Our Story ↓
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#242424] px-4 py-2 rounded-full text-sm text-gray-300 border border-[rgba(255,255,255,0.05)]">🌱 Vegan</span>
            <span className="bg-[#242424] px-4 py-2 rounded-full text-sm text-gray-300 border border-[rgba(255,255,255,0.05)]">✅ Gluten Free</span>
            <span className="bg-[#242424] px-4 py-2 rounded-full text-sm text-gray-300 border border-[rgba(255,255,255,0.05)]">🇺🇸 Made in USA</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] flex items-center justify-center"
        >
          {/* Orbit Rings */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[rgba(255,255,255,0.1)] animate-spin-cw scale-75" />
          <div className="absolute inset-0 rounded-full border border-dashed border-[rgba(255,255,255,0.1)] animate-spin-ccw scale-90" />
          
          {/* Emoji dots */}
          <div className="absolute top-10 left-10 text-3xl animate-pulse-dot" style={{ animationDelay: "0s" }}>🌶️</div>
          <div className="absolute top-20 right-10 text-3xl animate-pulse-dot" style={{ animationDelay: "0.5s" }}>✨</div>
          <div className="absolute bottom-20 left-20 text-3xl animate-pulse-dot" style={{ animationDelay: "1s" }}>🔥</div>
          <div className="absolute bottom-10 right-20 text-3xl animate-pulse-dot" style={{ animationDelay: "1.5s" }}>💯</div>

          <img
            src="https://yo-snacks.com/wp-content/uploads/2026/06/TikkaMasala_v2.png"
            alt="Tikka Masala Yo-Snacks Bag"
            className="w-full max-w-[350px] object-contain relative z-20 animate-float drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certs = [
    { icon: "🍳", label: "Kettle Cooked" },
    { icon: "✅", label: "Certified" },
    { icon: "🌾", label: "Gluten Free" },
    { icon: "✡️", label: "Kosher" },
    { icon: "🛡️", label: "Allergen Free" },
    { icon: "🌱", label: "Vegan" },
    { icon: "🇺🇸", label: "100% Made In USA" },
  ];

  return (
    <section id="certs" className="bg-[#FFE000] py-8 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-2xl">{cert.icon}</span>
              <span className="font-bold uppercase tracking-wider text-sm">{cert.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Flavors = () => {
  return (
    <section id="flavors" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <h3 className="text-[#888888] font-bold tracking-[0.2em] uppercase text-sm mb-4">The Lineup</h3>
          <h2 className="text-5xl md:text-7xl font-display uppercase">Pick Your Vibe</h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto text-lg">Two bold flavors. Zero compromises. Which one are you grabbing first?</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="group relative"
            data-testid="card-flavor-tikka"
          >
            <div className="absolute -inset-1 bg-[#FF4D4D] rounded-[2rem] blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-[#242424] rounded-3xl p-8 border border-[rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              <div className="absolute top-6 right-6 bg-[#FF4D4D] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">
                Fan Fave 🔥
              </div>
              <div className="h-64 flex items-center justify-center mb-8 relative">
                <div className="absolute text-6xl opacity-10 group-hover:opacity-20 transition-opacity">🌶️</div>
                <img
                  src="https://yo-snacks.com/wp-content/uploads/2026/06/TikkaMasala_v2.png"
                  alt="Indian Tikka Masala"
                  className="h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-3xl font-display uppercase mb-4">Indian Tikka Masala</h3>
                <p className="text-gray-400 mb-6 font-body">Aromatic spices, savory depth, a kiss of heat. Inspired by the streets of Mumbai — now in your hands.</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Bold", "Spicy", "Aromatic"].map(tag => (
                    <span key={tag} className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="https://yo-snacks.com/wp-content/uploads/2026/05/YC_TikkaMasala_1.5oz_5.5x8.5_r1.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider text-sm hover:text-[#FFE000] transition-colors mt-auto"
                data-testid="link-details-tikka"
              >
                See Details <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="group relative"
            data-testid="card-flavor-caribbean"
          >
            <div className="absolute -inset-1 bg-[#FF8C00] rounded-[2rem] blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-[#242424] rounded-3xl p-8 border border-[rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              <div className="absolute top-6 right-6 bg-[#FFE000] text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">
                New ✨
              </div>
              <div className="h-64 flex items-center justify-center mb-8 relative">
                <div className="absolute text-6xl opacity-10 group-hover:opacity-20 transition-opacity">🏝️</div>
                <img
                  src="https://yo-snacks.com/wp-content/uploads/2026/06/Sweet_Spice_v3.png"
                  alt="Caribbean Sweet & Spice"
                  className="h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-3xl font-display uppercase mb-4">Caribbean Sweet & Spice</h3>
                <p className="text-gray-400 mb-6 font-body">Sweet meets heat meets island energy. A tropical adventure that lands crunchy and leaves you wanting more.</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Sweet", "Tropical", "Bold"].map(tag => (
                    <span key={tag} className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-[rgba(255,255,255,0.05)] rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#order"
                className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wider text-sm hover:text-[#FFE000] transition-colors mt-auto"
                data-testid="link-order-caribbean"
              >
                Order Now <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section id="video" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#111111] to-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65 }}
          className="text-center mb-12"
        >
          <h3 className="text-[#888888] font-bold tracking-[0.2em] uppercase text-sm mb-4">The Vibe</h3>
          <h2 className="text-5xl md:text-7xl font-display uppercase">See It In Action</h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto text-lg">Bold flavors. Bolder energy. Watch what Yo-Snacks is all about.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-[#FFE000] rounded-[2rem] blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
          <div className="relative rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.08)] aspect-video shadow-2xl">
            <iframe
              src="/yo-snacks-video/"
              title="Yo-Snacks Brand Video"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const stats = [
    { number: "100%", label: "Made in USA" },
    { number: "0g", label: "Gluten" },
    { number: "2", label: "Bold Flavors" },
    { number: "∞", label: "Crunch Factor" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#1A1A1A] to-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65 }}
          >
            <h3 className="text-[#888888] font-bold tracking-[0.2em] uppercase text-sm mb-4">Why Yo-Snacks</h3>
            <h2 className="text-5xl md:text-7xl font-display uppercase leading-[0.9] mb-8">
              Healthier. <br />
              Tastier. <br />
              <span className="text-[#FFE000]">Hard to put down.</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-md">
              We ditched the junk but kept the junk-food taste. Every bag is packed with real ingredients and kettle cooked for that perfect, shattering crunch.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "No artificial colors or flavors",
                "Kettle cooked for max crunch",
                "Bold global flavors, real ingredients",
                "Cleaner than the big names, tastier too"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#B8D4A8] shrink-0 mt-1" size={20} />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#order"
              className="inline-block bg-[#FFE000] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors"
              data-testid="btn-shop-drop"
            >
              Shop the Drop
            </a>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#242424] p-8 rounded-3xl border border-[rgba(255,255,255,0.05)] flex flex-col items-center justify-center text-center hover:bg-[#2a2a2a] transition-colors"
              >
                <div className="text-[#FFE000] font-display text-[3rem] leading-none mb-2">{stat.number}</div>
                <div className="text-[#888888] font-bold uppercase tracking-widest text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Story = () => {
  return (
    <section id="story" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-[#242424] relative">
              <img 
                src="https://yo-snacks.com/wp-content/uploads/2026/05/stack-chip-golden-calories-delicious-1-scaled-e1779828316232.png" 
                alt="Stack of golden kettle cooked chips" 
                className="w-full h-auto object-cover aspect-[4/5] md:aspect-square"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#FFE000] text-black px-6 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl transform rotate-[-5deg]">
              Est. USA 🇺🇸
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65 }}
          >
            <h3 className="text-[#888888] font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Story</h3>
            <h2 className="text-5xl md:text-7xl font-display uppercase leading-[0.9] mb-8">
              Built for Those Who <br />
              <span className="text-[#FFE000]">Dare to Snack Different</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                We got tired of the snack aisle looking the same. You had the "fun" brands packed with artificial everything, and the "healthy" brands that tasted like cardboard. Nothing hit right.
              </p>
              <p>
                So we created Yo-Snacks. A bold, unapologetic snack brand that brings massive global flavors to a perfectly kettle-cooked chip, without the junk.
              </p>
              <p>
                We source the best ingredients, cook them in small batches right here in the USA, and season them heavily because life's too short for bland food. We're proving that <strong className="text-white font-bold">you don't have to choose between delicious and clean</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Order = () => {
  return (
    <section id="order" className="py-32 relative overflow-hidden bg-[#111111] border-t border-[rgba(255,255,255,0.05)]">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.02] select-none">
        <h1 className="text-[25vw] font-display whitespace-nowrap text-white" style={{ lineHeight: 0.8 }}>
          ORDER
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65 }}
        >
          <h3 className="text-[#888888] font-bold tracking-[0.2em] uppercase text-sm mb-4">Get Your Bag</h3>
          <h2 className="text-6xl md:text-8xl font-display uppercase mb-6 text-[#FFE000]">Ready to Crunch?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Whether you want a personal stash or looking to stock your shelves, hit us up. Wholesale and direct orders open now.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a 
              href="mailto:contact@yo-snacks.com"
              className="bg-[#242424] hover:bg-[#2a2a2a] border border-[rgba(255,255,255,0.05)] p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-1 group"
              data-testid="link-email"
            >
              <div className="w-16 h-16 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center group-hover:bg-[#FFE000] group-hover:text-black transition-colors">
                <Mail size={28} />
              </div>
              <div>
                <div className="text-[#888888] uppercase font-bold tracking-widest text-xs mb-1">Email Us</div>
                <div className="text-xl font-bold">contact@yo-snacks.com</div>
              </div>
            </a>

            <a 
              href="tel:4843410617"
              className="bg-[#242424] hover:bg-[#2a2a2a] border border-[rgba(255,255,255,0.05)] p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-1 group"
              data-testid="link-phone"
            >
              <div className="w-16 h-16 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center group-hover:bg-[#FFE000] group-hover:text-black transition-colors">
                <Phone size={28} />
              </div>
              <div>
                <div className="text-[#888888] uppercase font-bold tracking-widest text-xs mb-1">Call Us</div>
                <div className="text-xl font-bold">484 341 0617</div>
              </div>
            </a>
          </div>

          <a
            href="https://yo-snacks.com/wp-content/uploads/2026/05/YC_TikkaMasala_1.5oz_5.5x8.5_r1.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#FFE000] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors"
            data-testid="btn-view-product-sheet"
          >
            View Product Sheet <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#111111] pt-20 pb-8 border-t border-[rgba(255,255,255,0.05)] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a href="#" className="text-4xl font-display tracking-wider text-white inline-block mb-4">
              YO<span className="text-[#FFE000]">.</span>
            </a>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm leading-relaxed mb-6">
              Crunchy. Clean. Bold. <br />
              Hit different, every time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#242424] flex items-center justify-center hover:bg-[#FFE000] hover:text-black transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#242424] flex items-center justify-center hover:bg-[#FFE000] hover:text-black transition-colors" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Navigate</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-bold uppercase tracking-wider">
              <li><a href="#" className="hover:text-[#FFE000] transition-colors">Home</a></li>
              <li><a href="#flavors" className="hover:text-[#FFE000] transition-colors">Flavors</a></li>
              <li><a href="#story" className="hover:text-[#FFE000] transition-colors">Our Story</a></li>
              <li><a href="#order" className="hover:text-[#FFE000] transition-colors">Order</a></li>
            </ul>
          </div>

          {/* Certs */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Certifications</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-bold uppercase tracking-wider">
              <li>Kettle Cooked</li>
              <li>Gluten Free</li>
              <li>Kosher</li>
              <li>Allergen Free</li>
              <li>Vegan</li>
              <li>100% Made In USA</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-bold uppercase tracking-wider">
              <li><a href="mailto:contact@yo-snacks.com" className="hover:text-[#FFE000] transition-colors">contact@yo-snacks.com</a></li>
              <li><a href="tel:4843410617" className="hover:text-[#FFE000] transition-colors">484 341 0617</a></li>
              <li className="mt-6 text-[#888888] normal-case tracking-normal">Wholesale inquiries welcome.</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[rgba(255,255,255,0.05)] text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#888888] text-sm">
            © 2026 Yo-Snacks. All rights reserved.
          </p>
          <p className="text-[#888888] text-sm font-bold uppercase tracking-widest">
            Made with <span className="text-[#FF4D4D]">🔥</span> in the USA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
      <TickerBar />
      <Navbar />
      <main>
        <Hero />
        <Certifications />
        <Flavors />
        <VideoSection />
        <WhyUs />
        <Story />
        <Order />
      </main>
      <Footer />
    </div>
  );
}
