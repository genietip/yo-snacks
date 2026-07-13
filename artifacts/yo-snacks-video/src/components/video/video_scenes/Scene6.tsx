import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

export function Scene6() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setPhase(4), 3800),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      {...sceneTransitions.morphExpand}
    >
      {/* Full-bleed lifestyle photo grid */}
      <div className="absolute inset-0 grid grid-cols-2 gap-0">
        {/* Left — guy with headphones */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 1.15, opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={`${import.meta.env.BASE_URL}guy-headphones.jpg`}
            alt="Enjoying Tikka Masala"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/60 via-transparent to-transparent" />
        </motion.div>

        {/* Right — friends at park */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={phase >= 1 ? { scale: 1, opacity: 1 } : { scale: 1.15, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={`${import.meta.env.BASE_URL}friends-park.png`}
            alt="Friends enjoying Yo-Snacks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#1A1A1A]/60 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Center divider line */}
      <motion.div
        className="absolute top-0 bottom-0 left-1/2 w-[3px] bg-[#FFE000] z-10"
        initial={{ scaleY: 0 }}
        animate={phase >= 1 ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ originY: 0.5 }}
      />

      {/* Top overlay — headline */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-20 p-8 flex flex-col items-center"
        initial={{ y: -40, opacity: 0 }}
        animate={phase >= 2 ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 340, damping: 28 }}
      >
        <div className="bg-[#1A1A1A]/80 backdrop-blur-sm px-8 py-3 rounded-full border border-[#FFE000]/30">
          <h2 className="text-[5vw] font-display text-[#FFE000] uppercase tracking-wider leading-none text-center">
            Real People. Real Crunch.
          </h2>
        </div>
      </motion.div>

      {/* Bottom overlay — flavor tags */}
      {phase >= 3 && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-20 p-8"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 340, damping: 28 }}
        >
          <div className="flex justify-around items-end">
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}tikka-masala.png?v=2`}
                alt="Tikka Masala"
                className="w-[10vw] object-contain drop-shadow-2xl"
              />
              <span className="text-white font-display uppercase text-[2.5vw] bg-[#FF4D4D] px-3 py-1 rounded-full">
                Tikka Masala
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}sweet-spice.png?v=2`}
                alt="Caribbean Sweet & Spice"
                className="w-[10vw] object-contain drop-shadow-2xl"
              />
              <span className="text-black font-display uppercase text-[2.5vw] bg-[#FFE000] px-3 py-1 rounded-full">
                Sweet & Spice
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* "Snack differently" stamp */}
      {phase >= 4 && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: -8 }}
          transition={{ type: 'spring', stiffness: 500, damping: 22 }}
        >
          <div className="border-4 border-[#FFE000] rounded-full px-8 py-4 bg-[#1A1A1A]/80 backdrop-blur-sm">
            <p className="text-[3.5vw] font-display text-[#FFE000] uppercase tracking-widest leading-none text-center whitespace-nowrap">
              Snack Differently
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
