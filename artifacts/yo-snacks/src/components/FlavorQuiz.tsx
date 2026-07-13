import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, RotateCcw } from "lucide-react";

interface Props {
  onClose: () => void;
}

const QUESTIONS = [
  {
    id: "q1",
    question: "Pick your energy right now:",
    options: [
      { label: "🔥 Main character, always", value: "bold" },
      { label: "🏝️ Good vibes only", value: "chill" },
      { label: "⚡ Chaotic and I love it", value: "bold" },
      { label: "🌊 Laid-back but make it spicy", value: "chill" },
    ],
  },
  {
    id: "q2",
    question: "Your ideal snack moment:",
    options: [
      { label: "🎮 Gaming session, no breaks", value: "bold" },
      { label: "☀️ Beach or rooftop hangout", value: "chill" },
      { label: "🎵 House party where you know everyone", value: "bold" },
      { label: "🌴 Chill movie night, tropical playlist", value: "chill" },
    ],
  },
];

const RESULTS = {
  tikka: {
    name: "Indian Tikka Masala",
    tag: "Fan Fave 🔥",
    tagColor: "bg-[#FF4D4D] text-white",
    img: "/tikka-masala.png",
    desc: "Aromatic, bold, a little dangerous. You don't do anything halfway — and neither does this chip.",
    cta: "https://yo-snacks.com/wp-content/uploads/2026/05/YC_TikkaMasala_1.5oz_5.5x8.5_r1.pdf",
    glow: "#FF4D4D",
  },
  caribbean: {
    name: "Caribbean Sweet & Spice",
    tag: "New ✨",
    tagColor: "bg-[#FFE000] text-black",
    img: "/sweet-spice.png",
    desc: "Sweet, tropical, with a kick you didn't see coming. You're the vibe everyone wants at the party.",
    cta: null,
    glow: "#FF8C00",
  },
};

export default function FlavorQuiz({ onClose }: Props) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const q = QUESTIONS[step];

  const pick = (value: string) => {
    setSelected(value);
    setTimeout(() => {
      const next = [...answers, value];
      setAnswers(next);
      setSelected(null);
      if (step + 1 < QUESTIONS.length) {
        setStep(step + 1);
      } else {
        setShowResult(true);
      }
    }, 380);
  };

  const result = (() => {
    const boldCount = answers.filter((a) => a === "bold").length;
    return boldCount >= 1 ? RESULTS.tikka : RESULTS.caribbean;
  })();

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setSelected(null);
    setShowResult(false);
  };

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="relative w-full max-w-md bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] rounded-3xl p-6 shadow-2xl z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          aria-label="Close quiz"
        >
          <X size={18} />
        </button>

        <div className="mb-5">
          <p className="text-[#FFE000] text-[10px] font-bold uppercase tracking-widest mb-1">Flavor Match</p>
          <h2 className="text-2xl font-display uppercase leading-tight">Which Yo-Snacks Flavor Are You?</h2>
        </div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={`q${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.22 }}
            >
              {/* Progress */}
              <div className="flex gap-1.5 mb-5">
                {QUESTIONS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i <= step ? "bg-[#FFE000]" : "bg-[#333]"}`}
                  />
                ))}
              </div>

              <p className="text-sm font-bold text-white mb-4">{q.question}</p>

              <div className="grid grid-cols-1 gap-2.5">
                {q.options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => pick(opt.value)}
                    className={`text-left px-4 py-3 rounded-xl border text-sm font-body transition-all ${
                      selected === opt.value
                        ? "bg-[#FFE000] text-black border-[#FFE000] scale-[0.98]"
                        : "bg-[#242424] border-[rgba(255,255,255,0.06)] text-gray-200 hover:border-[#FFE000]/40 hover:bg-[#2a2a2a]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-4">
                <p className="text-gray-400 text-xs mb-3">Your flavor match is...</p>
                <div
                  className="relative w-36 h-36 mx-auto mb-3"
                  style={{ filter: `drop-shadow(0 0 24px ${result.glow}66)` }}
                >
                  <img src={result.img} alt={result.name} className="w-full h-full object-contain" />
                </div>
                <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2 ${result.tagColor}`}>
                  {result.tag}
                </span>
                <h3 className="text-xl font-display uppercase mb-2">{result.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{result.desc}</p>
              </div>

              <div className="flex gap-2 mt-4">
                {result.cta ? (
                  <a
                    href={result.cta}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#FFE000] text-black py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center hover:bg-white transition-colors flex items-center justify-center gap-1.5"
                  >
                    See Details <ArrowRight size={12} />
                  </a>
                ) : (
                  <a
                    href="/contact"
                    className="flex-1 bg-[#FFE000] text-black py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center hover:bg-white transition-colors flex items-center justify-center gap-1.5"
                  >
                    Order Now <ArrowRight size={12} />
                  </a>
                )}
                <button
                  onClick={reset}
                  className="w-12 h-12 rounded-xl border border-[rgba(255,255,255,0.1)] text-gray-400 hover:text-white hover:border-white/30 transition-colors flex items-center justify-center"
                  aria-label="Retake quiz"
                >
                  <RotateCcw size={15} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
