import React from 'react';
import { motion } from 'framer-motion';

export default function WaveformBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-sky-600 w-full"
          style={{ top: `${20 + i * 15}%` }}
          animate={{
            scaleX: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}