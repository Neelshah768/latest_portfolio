'use client';

import { useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type CalendarModalProps = {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
  title?: string;
};

export default function CalendarModal({ isOpen, onClose, url, title = 'Book a call' }: CalendarModalProps) {
  // Prevent background scroll while modal is open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = original;
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const schedulingUrl = url || process.env.NEXT_PUBLIC_CAL_URL || '';

  const embedUrl = useMemo(() => {
    if (!schedulingUrl) return '';
    try {
      const u = new URL(schedulingUrl);
      const host = u.hostname;
      if (host.includes('calendly.com')) {
        if (typeof window !== 'undefined') {
          u.searchParams.set('embed_domain', window.location.hostname);
        }
        u.searchParams.set('embed_type', 'Inline');
      }
      if (host.includes('cal.com') && !u.searchParams.has('embed')) {
        u.searchParams.set('embed', '1');
      }
      return u.toString();
    } catch {
      return schedulingUrl;
    }
  }, [schedulingUrl]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4"
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-3xl h-[80vh] bg-white dark:bg-black border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-200 dark:border-zinc-800">
              <h3 className="text-base font-semibold">{title}</h3>
              <button
                onClick={onClose}
                className="px-2 py-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {embedUrl ? (
              <iframe
                title="Scheduling"
                src={embedUrl}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex-1 grid place-items-center p-8 text-center text-zinc-600 dark:text-zinc-400">
                <div>
                  <p className="mb-2 font-medium">Calendar not configured</p>
                  <p className="text-sm">Set NEXT_PUBLIC_CAL_URL in your environment to your Cal.com/Calendly link.</p>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


