import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2000),
      setTimeout(() => setPhase(4), 3000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
      {...sceneTransitions.morphExpand}
    >
      <div className="relative z-10 flex flex-col items-center text-center leading-[0.8]">
        <motion.div className="overflow-hidden">
          <motion.h1 
            className="text-[18vw] font-display text-[var(--color-primary)] uppercase"
            initial={{ y: '100%', rotateZ: 5 }}
            animate={phase >= 1 ? { y: '0%', rotateZ: 0 } : { y: '100%', rotateZ: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            Hit
          </motion.h1>
        </motion.div>
        
        <motion.div className="overflow-hidden">
          <motion.h1 
            className="text-[18vw] font-display text-[var(--color-secondary)] uppercase"
            initial={{ y: '100%', rotateZ: -5 }}
            animate={phase >= 2 ? { y: '0%', rotateZ: 0 } : { y: '100%', rotateZ: -5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            Different
          </motion.h1>
        </motion.div>
      </div>
      
      {/* Kinetic background text */}
      <motion.div 
        className="absolute inset-0 pointer-events-none flex flex-col justify-between opacity-10 font-display text-[15vw] text-white leading-none whitespace-nowrap overflow-hidden"
        initial={{ x: '-10%' }}
        animate={{ x: '-50%' }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div>YO-SNACKS YO-SNACKS YO-SNACKS YO-SNACKS</div>
        <div>YO-SNACKS YO-SNACKS YO-SNACKS YO-SNACKS</div>
        <div>YO-SNACKS YO-SNACKS YO-SNACKS YO-SNACKS</div>
        <div>YO-SNACKS YO-SNACKS YO-SNACKS YO-SNACKS</div>
      </motion.div>
      
      {phase >= 3 && (
        <motion.div 
          className="absolute w-[200vw] h-[50vh] bg-[var(--color-primary)] -rotate-12 z-20 mix-blend-difference"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </motion.div>
  );
}