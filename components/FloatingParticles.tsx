'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Particle = {
  id: number;
  size: number;
  x: number; // percent
  y: number; // percent
  duration: number;
  delay: number;
  drift: number; // horizontal drift amplitude
};

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate non-deterministic values only on the client after mount
  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      drift: Math.random() * 20 - 10,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30 z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.drift, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

