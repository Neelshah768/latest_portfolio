'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Terminal, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function EngineeringProfile() {
  return (
    <section
      id="profile"
      aria-label="Engineering Profile"
      className="relative z-10 py-24 sm:py-32 border-b border-[#1c1c24] bg-[#070709]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-blue-400 font-medium">01 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              IDENTITY & PROGRESSION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            ENGINEERING PROFILE
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed">
            {PORTFOLIO_DATA.personal.progressionSummary}
          </p>
        </div>

        {/* Visual Progression Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Progression Flow Timeline */}
          <div className="lg:col-span-7 bg-[#0d0d12] border border-[#202028] rounded-xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1b1b22]">
              <span className="font-mono text-xs font-semibold text-zinc-300 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                TECHNICAL TRAJECTORY
              </span>
              <span className="font-mono text-[11px] text-zinc-400">2022 → PRESENT</span>
            </div>

            <div className="relative pl-6 space-y-6 sm:space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-zinc-700 via-blue-500 before:to-emerald-400">
              {PORTFOLIO_DATA.personal.progressionSteps.map((step, idx) => (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  className="relative group"
                >
                  {/* Timeline node */}
                  <div
                    className={`absolute -left-[30px] top-1.5 w-3 h-3 rounded-full border-2 transition-transform group-hover:scale-125 ${
                      idx === PORTFOLIO_DATA.personal.progressionSteps.length - 1
                        ? 'bg-emerald-400 border-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.6)]'
                        : 'bg-[#0d0d12] border-blue-500'
                    }`}
                  />
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-mono text-xs text-blue-400 font-semibold">
                      {step.year}
                    </span>
                    <span className="text-sm font-semibold text-white tracking-wide">
                      {step.title}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    {step.stack}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* AI Workflow Statement Callout */}
            <div className="mt-8 pt-6 border-t border-[#1b1b22] bg-[#0a0a0f] p-4 rounded-lg border border-[#1e1e28]">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold mb-1">
                <Cpu className="w-3.5 h-3.5" />
                <span>Enterprise AI Workflow Integration</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                {PORTFOLIO_DATA.personal.aboutAiStatement}
              </p>
            </div>
          </div>

          {/* Core Engineering Ethos / Profile Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[#0d0d12] border border-[#202028] rounded-xl p-6">
              <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Systems-First Mindset
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Rather than treating software as arbitrary glue code, I focus on the structural invariants of distributed services: data access latency, transaction boundaries, idempotent retry semantics, and tenant isolation.
              </p>
            </div>

            <div className="bg-[#0d0d12] border border-[#202028] rounded-xl p-6">
              <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                Enterprise Identity Specialization
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Extensive production experience standardizing identity ingress across multi-tenant applications: implementing SCIM 2.0 lifecycle specifications, SAML SSO custom policies in Azure AD B2C, and fine-grained authorization graphs.
              </p>
            </div>

            <div className="bg-[#0d0d12] border border-[#202028] rounded-xl p-6">
              <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                Full-Stack as a Supporting Capability
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Deep familiarity with React, React Native, and WebSockets allows me to design backend APIs that directly anticipate client-side ergonomics, rendering performance, and network resiliency constraints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
