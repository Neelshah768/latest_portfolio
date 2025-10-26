'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simple timer - just show for 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100000] bg-white dark:bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Subtle animated background grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
          />

          <div className="relative flex flex-col items-center gap-12">
            {/* Enhanced Logo with multiple layers */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full bg-blue-500/20 dark:bg-blue-400/20 rounded-full" />
              </motion.div>

              {/* Main logo container */}
              <div className="relative">
                {/* Background shadow layer */}
                <div className="absolute inset-0 translate-x-1 translate-y-1 text-7xl md:text-8xl font-bold tracking-tight text-zinc-300 dark:text-zinc-800 select-none">
                  NS
                </div>

                {/* Main logo with letter animations */}
                <div className="relative flex text-7xl md:text-8xl font-bold tracking-tight">
                  <motion.span
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-black dark:text-white"
                  >
                    N
                  </motion.span>
                  <motion.span
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-black dark:text-white"
                  >
                    S
                  </motion.span>
                </div>

                {/* Accent dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"
                />
              </div>

              {/* Animated underline with gradient */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-transparent via-black dark:via-white to-transparent mt-4"
              />

              {/* Side decorative lines */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -left-16 top-1/2 w-12 h-px bg-zinc-300 dark:bg-zinc-700 origin-right"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -right-16 top-1/2 w-12 h-px bg-zinc-300 dark:bg-zinc-700 origin-left"
              />
            </motion.div>

            {/* Enhanced Loading Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="relative"
                >
                  {/* Outer ring */}
                  <motion.div
                    className="w-3 h-3 rounded-full border-2 border-zinc-300 dark:border-zinc-700"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut',
                    }}
                  />
                  {/* Inner dot */}
                  <motion.div
                    className="absolute inset-0 m-auto w-1.5 h-1.5 bg-black dark:bg-white rounded-full"
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

