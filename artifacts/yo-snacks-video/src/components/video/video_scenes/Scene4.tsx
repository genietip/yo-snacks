import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 1900),
      setTimeout(() => setPhase(4), 2600),
      setTimeout(() => setPhase(5), 3300),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const certs = [
    { text: "Gluten Free", color: "var(--color-secondary)" },
    { text: "Allergen Free", color: "var(--color-primary)" },
    { text: "Vegan", color: "var(--color-bg-light)" },
    { text: "100% Made in USA", color: "var(--color-bg-dark)" }
  ];

  return (
    <motion.div 
      className="absolute inset-0 overflow-hidden flex flex-col justify-center py-20 px-16"
      {...sceneTransitions.clipCircle}
    >
      <motion.h2 
        className="text-[6vw] font-display text-[var(--color-bg-dark)] mb-12 uppercase"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        The Good Stuff.
      </motion.h2>

      <div className="flex flex-col gap-6">
        {certs.map((cert, i) => (
          <motion.div 
            key={i}
            className="flex items-center"
            initial={{ opacity: 0, x: -100, rotateX: 45 }}
            animate={phase > i ? { opacity: 1, x: 0, rotateX: 0 } : { opacity: 0, x: -100, rotateX: 45 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div 
              className="h-[5vw] px-8 rounded-[20px] flex items-center shadow-lg transform -skew-x-12"
              style={{ backgroundColor: cert.color }}
            >
              <h3 
                className="text-[4vw] font-display uppercase leading-none whitespace-nowrap"
                style={{ color: i === 1 || i === 4 ? 'white' : 'var(--color-bg-dark)' }}
              >
                {cert.text}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative starburst */}
      <motion.div 
        className="absolute right-[10%] top-[20%] w-[30vw] h-[30vw] opacity-20 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" fill="var(--color-bg-dark)">
          <polygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40" />
        </svg>
      </motion.div>
    </motion.div>
  );
}