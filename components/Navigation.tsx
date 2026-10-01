'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const NAV_LINKS = [
  { name: 'Profile', href: '#profile' },
  { name: 'Experience', href: '#experience' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Playground', href: '#playground' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section tracking
      const sections = ['profile', 'experience', 'case-studies', 'capabilities', 'playground', 'skills', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#070709]/85 backdrop-blur-md border-b border-[#222228]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Identity Logo */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
              aria-label="Neel Shah - Home"
            >
              <span className="font-mono text-sm font-semibold tracking-wider text-white px-2 py-1 rounded bg-[#131317] border border-[#272730] group-hover:border-blue-500/60 transition-colors">
                {PORTFOLIO_DATA.personal.shortName}
              </span>
              <div className="hidden sm:flex flex-col">
                <span className="text-xs font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {PORTFOLIO_DATA.personal.name}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                  Backend & Systems
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-md ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#121217]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-blue-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Actions: Resume & CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.socials.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-mono text-zinc-300 hover:text-white border border-[#272730] hover:border-zinc-500 rounded-md transition-colors flex items-center gap-1.5 bg-[#0f0f13]"
              >
                <span>CV</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-400" />
              </a>

              <a
                href="#contact"
                className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-1.5"
              >
                <span>Let&apos;s Talk</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#contact"
                className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-500 sm:hidden"
              >
                Talk
              </a>
              <button
                type="button"
                className="p-2 text-zinc-400 hover:text-white rounded-md bg-[#121217] border border-[#222228] focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Redesigned Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="space-y-1">
              <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-3 px-2">
                Navigation
              </p>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-lg font-medium text-zinc-300 hover:text-white hover:bg-[#14141a] rounded-lg transition-colors border-b border-[#1b1b22]/50"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-[#222228] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                <span>{PORTFOLIO_DATA.personal.location}</span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PORTFOLIO_DATA.socials.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-center text-xs font-mono text-zinc-300 border border-[#272730] bg-[#121217] rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  View CV
                </a>
                <a
                  href="#contact"
                  className="w-full py-2.5 text-center text-xs font-semibold text-white bg-blue-600 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
