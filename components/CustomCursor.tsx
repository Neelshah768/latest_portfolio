'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const outlineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();
  const currentXRef = useRef(0);
  const currentYRef = useRef(0);
  const targetXRef = useRef(0);
  const targetYRef = useRef(0);

  useEffect(() => {
    // Initialize cursor position to center of screen
    const initX = window.innerWidth / 2;
    const initY = window.innerHeight / 2;
    
    currentXRef.current = initX;
    currentYRef.current = initY;
    targetXRef.current = initX;
    targetYRef.current = initY;

    if (dotRef.current) {
      dotRef.current.style.left = `${initX}px`;
      dotRef.current.style.top = `${initY}px`;
    }
    if (outlineRef.current) {
      outlineRef.current.style.left = `${initX}px`;
      outlineRef.current.style.top = `${initY}px`;
    }

    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      targetXRef.current = e.clientX;
      targetYRef.current = e.clientY;
      
      // Update dot position immediately
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick !== null || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isClickable);
    };

    // Smooth follow for outline using RAF
    const animateOutline = () => {
      currentXRef.current += (targetXRef.current - currentXRef.current) * 0.15;
      currentYRef.current += (targetYRef.current - currentYRef.current) * 0.15;

      if (outlineRef.current) {
        outlineRef.current.style.left = `${currentXRef.current}px`;
        outlineRef.current.style.top = `${currentYRef.current}px`;
      }

      animationFrameId.current = requestAnimationFrame(animateOutline);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId.current = requestAnimationFrame(animateOutline);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  if (!isMounted) return null;

  return createPortal(
    <>
      {/* Cursor Dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          transform: `translate(-50%, -50%) ${isPointer ? 'scale(0)' : 'scale(1)'}`,
        }}
      />
      
      {/* Cursor Outline */}
      <div
        ref={outlineRef}
        className="cursor-outline"
        style={{
          transform: `translate(-50%, -50%) ${isPointer ? 'scale(1.5)' : 'scale(1)'}`,
        }}
      />
    </>,
    document.body
  );
}

