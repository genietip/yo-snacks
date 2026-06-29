import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Zap } from "lucide-react";

const STORAGE_KEY = "yo_email_popup_dismissed";

export default function EmailPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Enter a valid email");
      return;
    }
    setError("");
    setSubmitted(true);
    localStorage.setItem(STORAGE_KEY, "1");
    setTimeout(() => setVisible(false), 2400);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 340, damping: 30 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999] w-[min(420px,calc(100vw-2rem))]"
          role="dialog"
          aria-label="Get early access"
        >
          <div className="relative bg-[#1A1A1A] border border-[rgba(255,228,0,0.3)] rounded-2xl p-5 shadow-2xl overflow-hidden">
            {/* Yellow glow */}
            <div className="absolute -inset-px rounded-2xl pointer-events-none" style={{ boxShadow: "0 0 32px rgba(255,228,0,0.15)" }} />

            <button
              onClick={dismiss}
              className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-full bg-[#FFE000] flex items-center justify-center shrink-0">
                      <Zap size={13} className="text-black" fill="black" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFE000]">Drop Access</span>
                  </div>

                  <h3 className="text-xl font-display uppercase leading-tight mb-1">
                    Be First on the Drop List
                  </h3>
                  <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                    New flavors. Exclusive deals. You'll know before anyone else.
                  </p>

                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(""); }}
                        placeholder="your@email.com"
                        className="w-full bg-[#242424] border border-[rgba(255,255,255,0.08)] focus:border-[#FFE000] rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                        autoComplete="email"
                      />
                      {error && <p className="text-[#FF4D4D] text-[10px] mt-1 ml-1">{error}</p>}
                    </div>
                    <button
                      type="submit"
                      className="bg-[#FFE000] text-black px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shrink-0 flex items-center gap-1.5"
                    >
                      In <ArrowRight size={12} />
                    </button>
                  </form>

                  <p className="text-gray-600 text-[10px] mt-2.5 text-center">No spam. Unsubscribe anytime.</p>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-2 text-center"
                >
                  <div className="text-3xl mb-2">🔥</div>
                  <h3 className="text-lg font-display uppercase text-[#FFE000]">You're on the list</h3>
                  <p className="text-gray-400 text-xs mt-1">First drops land in your inbox. Stay ready.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
