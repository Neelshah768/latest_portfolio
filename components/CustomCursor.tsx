'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering clickable
      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = target.closest('a, button, input, textarea, select, [role="button"], [data-cursor-expand]');
        setIsHovered(!!clickable);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let animationId: number;
    const animateRing = () => {
      // Smooth lerp for outer ring
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.2;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationId = requestAnimationFrame(animateRing);
    };

    animationId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-blue-400 transition-opacity duration-150"
        style={{ willChange: 'transform' }}
      />

      {/* Subtle Follower Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-blue-500/40 transition-[width,height,margin,border-color,opacity] duration-200 ${
          isHovered
            ? 'w-8 h-8 -ml-4 -mt-4 border-blue-400/80 bg-blue-500/10'
            : 'w-5 h-5 -ml-2.5 -mt-2.5 border-blue-500/30'
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
