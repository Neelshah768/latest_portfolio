'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2, ChevronRight, Layers, ShieldCheck, Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

type TabKey = 'overview' | 'challenges' | 'architecture' | 'impact';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const exp = PORTFOLIO_DATA.experience[0];

  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: 'overview', label: 'Overview & Leadership', icon: <Briefcase className="w-3.5 h-3.5" /> },
    { key: 'challenges', label: 'Technical Challenges', icon: <Zap className="w-3.5 h-3.5" /> },
    { key: 'architecture', label: 'Architecture & Identity', icon: <Layers className="w-3.5 h-3.5" /> },
    { key: 'impact', label: 'Impact & Scale', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
  ];

  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="relative z-10 py-24 sm:py-32 border-b border-[#1c1c24] bg-[#070709]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-blue-400 font-medium">02 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              TRACK RECORD & TENURE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            EXPERIENCE
          </h2>
          <p className="text-sm text-zinc-300">
            Enterprise software engineering history with verified production ownership.
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-[#0b0b10] border border-[#22222a] rounded-xl overflow-hidden shadow-xl">
          {/* Company & Role Header */}
          <div className="p-6 sm:p-8 border-b border-[#1c1c24] bg-[#0e0e14]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-zinc-300">
                  <span className="text-blue-400 font-semibold text-sm">
                    {exp.company}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    {exp.period}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Project Badge */}
              <div className="self-start md:self-auto px-3.5 py-2 rounded-lg bg-[#14141c] border border-[#262634] text-right">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                  Primary Initiative
                </div>
                <div className="text-sm font-semibold text-white">
                  {exp.project}
                </div>
                <div className="text-[11px] text-zinc-400">
                  {exp.projectSubtitle}
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-[#1c1c24]">
              {exp.metrics.map((m) => (
                <div key={m.label} className="bg-[#09090d] border border-[#1e1e26] rounded-lg p-3">
                  <div className="text-xl font-mono font-bold text-white mb-0.5">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progressive Disclosure Navigation Tabs */}
          <div className="flex border-b border-[#1c1c24] bg-[#09090d] overflow-x-auto scrollbar-none">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-5 py-3.5 text-xs font-mono whitespace-nowrap transition-all border-b-2 ${
                    isActive
                      ? 'border-blue-500 text-white bg-[#111118] font-semibold'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-[#0d0d12]'
                  }`}
                  aria-selected={isActive}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Progressive Disclosure Content Body */}
          <div className="p-6 sm:p-8 min-h-[260px]">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <p className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
                    Core Responsibilities & Leadership:
                  </p>
                  <ul className="space-y-3">
                    {exp.overview.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === 'challenges' && (
                <motion.div
                  key="challenges"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <p className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
                    Complex Distributed & Database Challenges Solved:
                  </p>
                  <ul className="space-y-3">
                    {exp.challenges.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === 'architecture' && (
                <motion.div
                  key="architecture"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <p className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
                    Microservice Topologies & Identity Implementations:
                  </p>
                  <ul className="space-y-3">
                    {exp.architecturePoints.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === 'impact' && (
                <motion.div
                  key="impact"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                    Production Outcomes & Measured Gains:
                  </p>
                  <ul className="space-y-3">
                    {exp.impactPoints.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
