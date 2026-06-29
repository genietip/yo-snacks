import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setPhase(4), 3500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 overflow-hidden flex flex-col items-center justify-center"
      {...sceneTransitions.zoomThrough}
    >
      {/* Background kinetic pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at center, var(--color-primary) 0%, transparent 50%)',
          backgroundSize: '50px 50px'
        }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 w-full h-[60%] flex items-center justify-center gap-12 mt-12">
        <motion.img 
          src="https://yo-snacks.com/wp-content/uploads/2026/06/TikkaMasala_v2.png" 
          className="h-full object-contain drop-shadow-2xl"
          initial={{ y: 200, opacity: 0, rotate: -30 }}
          animate={phase >= 1 ? { y: 0, opacity: 1, rotate: -15 } : { y: 200, opacity: 0, rotate: -30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
        <motion.img 
          src="https://yo-snacks.com/wp-content/uploads/2026/06/Sweet_Spice_v3.png" 
          className="h-full object-contain drop-shadow-2xl"
          initial={{ y: 200, opacity: 0, rotate: 30 }}
          animate={phase >= 2 ? { y: 0, opacity: 1, rotate: 15 } : { y: 200, opacity: 0, rotate: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
      </div>

      <motion.div 
        className="absolute top-[15%] flex flex-col items-center z-20"
        initial={{ scale: 0 }}
        animate={phase >= 3 ? { scale: 1 } : { scale: 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
      >
        <div className="bg-[var(--color-primary)] px-16 py-6 rounded-[50px] shadow-[0_20px_0_0_var(--color-bg-dark)] transform -rotate-3 border-8 border-[var(--color-bg-dark)]">
          <h1 className="text-[12vw] font-display text-[var(--color-bg-dark)] uppercase leading-none">
            Yo-Snacks
          </h1>
        </div>
      </motion.div>

      {phase >= 4 && (
        <motion.div 
          className="absolute bottom-[10%] z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-[4vw] font-display uppercase tracking-widest text-[var(--color-primary)] drop-shadow-lg">
            Find us everywhere.
          </p>
        </motion.div>
      )}

      {/* Screen edge frame */}
      <div className="absolute inset-0 border-[2vw] border-[var(--color-bg-dark)] pointer-events-none z-30" />
    </motion.div>
  );
}