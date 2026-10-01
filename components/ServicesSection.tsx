'use client';

import { motion } from 'framer-motion';
import { Server, Lock, RefreshCw, Cloud, Smartphone, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const SERVICE_ICONS = [Server, Lock, RefreshCw, Cloud, Smartphone];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Professional capabilities and advisory"
      className="relative z-10 py-24 sm:py-32 border-b border-[#1c1c24] bg-[#070709]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-blue-400 font-medium">07 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              ENGAGEMENT SCOPE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            WHAT I CAN HELP WITH
          </h2>
          <p className="text-sm text-zinc-300">
            High-impact engineering domains available for full-time roles, core systems architecture, and technical advisory.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.whatICanHelpWith.map((svc, idx) => {
            const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-[#0b0b10] border border-[#202028] hover:border-zinc-700 rounded-xl p-6 flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[#14141c] border border-[#22222e] text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {svc.title}
                      </h3>
                      <div className="text-[11px] font-mono text-zinc-400">
                        {svc.subtitle}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#181822] space-y-2">
                  {svc.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
