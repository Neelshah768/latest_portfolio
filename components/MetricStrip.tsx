'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function MetricStrip() {
  return (
    <section
      aria-label="Verified enterprise engineering metrics"
      className="relative z-10 py-12 border-y border-[#1e1e26] bg-[#09090d]/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
            Enterprise Scale & Verified Production Metrics · 73Strings
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#1e1e26]">
          {PORTFOLIO_DATA.verifiedMetrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-6 md:pt-0 md:pl-6' : ''}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold tracking-tight text-white mb-1.5 flex items-baseline gap-0.5">
                <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                  {metric.value}
                </span>
              </div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-zinc-400 max-w-[200px] leading-tight">
                {metric.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
