import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 4500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 overflow-hidden"
      {...sceneTransitions.splitHorizontal}
    >
      <div className="absolute inset-0 flex">
        {/* Left Side - Tikka Masala */}
        <motion.div 
          className="w-1/2 h-full flex flex-col items-center justify-center relative overflow-hidden"
          initial={{ x: '-100%' }}
          animate={phase >= 1 ? { x: '0%' } : { x: '-100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <motion.div 
            className="absolute inset-0 bg-[var(--color-bg-dark)] opacity-10"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.5) 10px, rgba(0,0,0,0.5) 20px)' }}
          />
          <motion.h2 
            className="absolute top-[10%] text-[10vw] font-display text-[var(--color-bg-dark)] opacity-20 uppercase leading-none text-center"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Indian<br/>Tikka
          </motion.h2>
          <motion.img 
            src={`${import.meta.env.BASE_URL}tikka-masala.png`} 
            className="w-[60%] object-contain z-10 drop-shadow-2xl"
            initial={{ scale: 0, rotate: -20 }}
            animate={phase >= 2 ? { scale: 1, rotate: -5 } : { scale: 0, rotate: -20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          />
        </motion.div>

        {/* Right Side - Sweet & Spice */}
        <motion.div 
          className="w-1/2 h-full bg-[var(--color-secondary)] flex flex-col items-center justify-center relative overflow-hidden"
          initial={{ x: '100%' }}
          animate={phase >= 1 ? { x: '0%' } : { x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <motion.div 
            className="absolute inset-0 bg-[var(--color-primary)] opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 10%, transparent 10%)', backgroundSize: '30px 30px' }}
          />
          <motion.h2 
            className="absolute bottom-[10%] text-[10vw] font-display text-[var(--color-bg-dark)] opacity-20 uppercase leading-none text-center"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            Sweet &<br/>Spice
          </motion.h2>
          <motion.img 
            src={`${import.meta.env.BASE_URL}sweet-spice.png`} 
            className="w-[60%] object-contain z-10 drop-shadow-2xl"
            initial={{ scale: 0, rotate: 20 }}
            animate={phase >= 3 ? { scale: 1, rotate: 5 } : { scale: 0, rotate: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          />
        </motion.div>
      </div>

      {phase >= 4 && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
          initial={{ scale: 5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[15vw] font-display text-white uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] -rotate-6">
            Kettle Cooked
          </h1>
        </motion.div>
      )}
    </motion.div>
  );
}