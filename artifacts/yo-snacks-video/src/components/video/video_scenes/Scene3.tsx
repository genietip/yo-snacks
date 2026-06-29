import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2800),
      setTimeout(() => setPhase(4), 3800),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      {...sceneTransitions.wipe}
    >
      {/* Dynamic kinetic background grid */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div 
            key={i}
            className="bg-[var(--color-bg-dark)] opacity-10 rounded-xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div 
          className="bg-[var(--color-bg-dark)] px-12 py-6 rounded-[40px] transform -rotate-2"
          initial={{ y: 100, opacity: 0, rotateZ: 10 }}
          animate={phase >= 1 ? { y: 0, opacity: 1, rotateZ: -2 } : { y: 100, opacity: 0, rotateZ: 10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <h2 className="text-[8vw] font-display text-[var(--color-primary)] uppercase leading-none">
            Zero Generic
          </h2>
        </motion.div>

        <motion.div 
          className="bg-[var(--color-accent)] px-12 py-6 rounded-[40px] mt-4 transform rotate-3"
          initial={{ x: -100, opacity: 0, rotateZ: -10 }}
          animate={phase >= 2 ? { x: 0, opacity: 1, rotateZ: 3 } : { x: -100, opacity: 0, rotateZ: -10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <h2 className="text-[8vw] font-display text-[var(--color-bg-dark)] uppercase leading-none">
            100% Bold
          </h2>
        </motion.div>

        {phase >= 3 && (
          <motion.div 
            className="absolute mt-[30vh] text-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <p className="text-[3vw] font-body font-bold text-[var(--color-bg-dark)] bg-white px-6 py-2 rounded-full shadow-xl">
              MADE FOR THE NEXT GENERATION
            </p>
          </motion.div>
        )}
      </div>

      {phase >= 4 && (
        <motion.div 
          className="absolute inset-0 border-[4vw] border-[var(--color-primary)] z-20 pointer-events-none"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.div>
  );
}