'use client';

import { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 8,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
        scale: 1.02,
      });
    }

    return () => {
      if (tiltRef.current) {
        (tiltRef.current as any).vanillaTilt?.destroy();
      }
    };
  }, []);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}

