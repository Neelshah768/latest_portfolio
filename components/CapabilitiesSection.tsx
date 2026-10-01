'use client';

import { motion } from 'framer-motion';
import { Server, Network, ShieldAlert, Cloud, Smartphone, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const ICONS = [Server, Network, ShieldAlert, Cloud, Smartphone, Cpu];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      aria-label="Engineering Capabilities"
      className="relative z-10 py-24 sm:py-32 border-b border-[#1c1c24] bg-[#070709]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-blue-400 font-medium">04 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              CORE SPECIALIZATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            WHAT I BUILD
          </h2>
          <p className="text-sm text-zinc-300">
            End-to-end architectural capabilities delivered across production enterprise systems and workflows.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.capabilities.map((cap, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <motion.div
                key={cap.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="group bg-[#0b0b10] border border-[#202028] hover:border-blue-500/50 rounded-xl p-6 transition-all hover:bg-[#0f0f16] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-blue-400 group-hover:text-blue-300">
                      {cap.number}
                    </span>
                    <div className="p-2 rounded-lg bg-[#14141c] border border-[#242430] text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-blue-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1a1a24]">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#13131c] border border-[#22222e] text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
