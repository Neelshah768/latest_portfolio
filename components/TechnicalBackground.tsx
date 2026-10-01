'use client';

import { useEffect, useState } from 'react';

export default function TechnicalBackground() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Only track mouse on devices that support hover
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!media.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Precision Blueprint Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25" />

      {/* Subtle Dark Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.06),rgba(7,7,9,0.95)_75%)]" />

      {/* Subtle localized mouse highlight */}
      {mousePos && (
        <div
          className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-500"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background:
              'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.01) 40%, transparent 70%)',
          }}
        />
      )}

      {/* Fine Horizontal Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </div>
  );
}
