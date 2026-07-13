import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Flavors", href: "/flavors" },
  { name: "Why Us", href: "/why-us" },
  { name: "Our Story", href: "/story" },
  { name: "Contact", href: "/contact" },
];

export default function SharedNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      <nav className="w-full z-40 bg-[rgba(26,26,26,0.96)] border-b border-[rgba(255,255,255,0.05)] shrink-0">
        <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/yo-logo-transparent.png" alt="YO! Snacks" className="h-14 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs uppercase font-bold tracking-widest transition-colors ${
                  location === link.href ? "text-[#FFE000]" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="bg-[#FFE000] text-black px-5 py-2 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors"
            >
              Order Now
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#1A1A1A] flex flex-col items-center justify-center">
          <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-5xl font-display uppercase tracking-widest text-white hover:text-[#FFE000]"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-[#FFE000] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xl hover:bg-white transition-colors"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
