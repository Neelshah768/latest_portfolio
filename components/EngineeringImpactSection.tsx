'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Lock, Box, Terminal, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const ICON_MAP = {
  ShieldCheck,
  UserCheck,
  Lock,
  Box,
  Terminal,
};

export default function EngineeringImpactSection() {
  const data = PORTFOLIO_DATA.engineeringImpact;

  return (
    <section
      id="engineering-impact"
      aria-label="Engineering Impact and Professional Feedback"
      className="relative z-10 py-24 sm:py-32 border-b border-[#1c1c24] bg-[#070709]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs text-blue-400 font-medium">//</span>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              {data.highlight.attribution}
            </span>
            <span className="text-zinc-600">·</span>
            <span className="text-[11px] font-mono text-zinc-400">
              {data.highlight.attributionLabel}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            {data.title}
          </h2>
          <p className="text-sm text-zinc-300">
            {data.subtitle}
          </p>
        </div>

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 bg-[#0b0b10] border border-[#20202a] rounded-xl p-5 sm:p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-32 bg-blue-500/5 blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-[11px] font-mono tracking-wider text-blue-300 uppercase">
                  Technical Validation
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                &ldquo;{data.highlight.statement}&rdquo;
              </h3>
              <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-wide">
                {data.highlight.subline}
              </p>
            </div>

            <div className="self-start md:self-auto shrink-0">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#12121c] border border-[#262638] text-[11px] font-mono text-zinc-300">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Production Identity &amp; Access</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* 5 Impact Cards Grid */}
        <div className="grid grid-cols-12 gap-5">
          {data.cards.map((card, idx) => {
            const Icon = ICON_MAP[card.iconName];
            // Layout: Top 3 cards span 4 cols each, bottom 2 cards span 6 cols each
            const colSpanClass =
              idx < 3
                ? 'col-span-12 md:col-span-6 lg:col-span-4'
                : 'col-span-12 md:col-span-6 lg:col-span-6';

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
                className={`group bg-[#0b0b10] border border-[#202028] hover:border-blue-500/40 rounded-xl p-6 transition-all hover:bg-[#0e0e16] flex flex-col justify-between ${colSpanClass}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#14141e] border border-[#242436] flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:border-blue-500/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-[#121218] px-2.5 py-1 rounded border border-[#1e1e28]">
                      {card.tag}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#181822] flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                  <CheckCircle2 className="w-3 h-3 text-blue-400/80" />
                  <span>Peer Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
