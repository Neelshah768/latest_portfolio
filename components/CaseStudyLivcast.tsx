'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Video,
  Layers,
  Zap,
  Smartphone,
  ChevronRight,
  Server,
  Cloud,
  CheckCircle2,
  Film,
  Send,
  CreditCard,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

type LivcastTab = 'overview' | 'architecture' | 'pipeline' | 'performance' | 'billing';

export default function CaseStudyLivcast() {
  const [activeTab, setActiveTab] = useState<LivcastTab>('overview');
  const cs = PORTFOLIO_DATA.caseStudies.livcast;

  const tabList: { id: LivcastTab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview & Problem', icon: <Video className="w-3.5 h-3.5" /> },
    { id: 'architecture', label: 'Streaming Architecture', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'pipeline', label: 'FFmpeg & RTMP Pipeline', icon: <Film className="w-3.5 h-3.5" /> },
    { id: 'performance', label: 'Mobile & Storage Optimization', icon: <Zap className="w-3.5 h-3.5" /> },
    { id: 'billing', label: 'Monetization & Security', icon: <CreditCard className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="bg-[#0b0b10] border border-[#22222a] rounded-2xl overflow-hidden shadow-2xl">
      {/* Banner */}
      <div className="p-6 sm:p-10 border-b border-[#1c1c24] bg-gradient-to-br from-[#0e0e16] via-[#0b0b10] to-[#08080c]">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/30 text-sky-400 font-semibold">
              FULL-STACK &amp; STREAMING CASE STUDY
            </span>
            <span className="font-mono text-xs text-zinc-400">· Livcast Platform</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-xs font-mono text-zinc-300">Live Video Engine</span>
          </div>
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
          {cs.title}
        </h3>
        <p className="text-base sm:text-lg font-mono text-sky-400 mb-3">
          {cs.subtitle}
        </p>
        <p className="text-sm sm:text-base text-zinc-300 max-w-4xl leading-relaxed mb-8">
          {cs.tagline}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#1c1c24]">
          {cs.metrics.map((m) => (
            <div key={m.label} className="bg-[#121218] border border-[#20202a] rounded-lg p-3 sm:p-4">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white mb-1">
                {m.value}
              </div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wide">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-[#181820]">
          {cs.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] font-mono text-zinc-300 bg-[#14141c] border border-[#22222c] rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive Video & Ingestion Flow Visual */}
      <div className="p-6 sm:p-8 bg-[#08080c] border-b border-[#1c1c24]">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#181820]">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
            <Film className="w-4 h-4 text-sky-400" />
            <span className="font-semibold text-white uppercase tracking-wider">
              Ingestion to Multi-Destination RTMP Broadcast Pipeline
            </span>
          </div>
          <span className="text-[11px] font-mono text-zinc-400">
            Real-time RTMP multiplexing
          </span>
        </div>

        {/* Pipeline Architecture Diagrams */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Step 1: Client & Ingestion */}
          <div className="bg-[#0f0f15] border border-[#22222e] rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2 font-semibold">
                <Smartphone className="w-4 h-4" />
                <span>01. Mobile Client & Ingestion</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                React Native application with chunked multipart video upload handlers pushing directly to AWS S3 via presigned URLs.
              </p>
            </div>
            <div className="text-[10px] font-mono text-zinc-400 bg-[#15151f] p-2 rounded border border-[#20202c]">
              Protocol: WebSocket Health + S3 Multipart
            </div>
          </div>

          {/* Step 2: Backend & Transcoding */}
          <div className="bg-[#0f0f15] border border-[#22222e] rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2 font-semibold">
                <Server className="w-4 h-4" />
                <span>02. Spring Boot & FFmpeg</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                Java Spring Boot backend orchestrates asynchronous FFmpeg worker processes for resolution normalization, audio codec sync, and scheduled broadcasts.
              </p>
            </div>
            <div className="text-[10px] font-mono text-zinc-400 bg-[#15151f] p-2 rounded border border-[#20202c]">
              Workers: Automated Transcoding &amp; Scheduler
            </div>
          </div>

          {/* Step 3: RTMP Egress Destinations */}
          <div className="bg-[#0f0f15] border border-[#22222e] rounded-xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2 font-semibold">
                <Send className="w-4 h-4" />
                <span>03. RTMP Multi-Egress</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                Concurrent broadcast streams pushed in parallel to social and creator streaming platforms with zero client-side bandwidth penalty.
              </p>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-300 bg-[#15151f] p-2 rounded border border-[#20202c]">
              <span>YouTube</span>
              <span>Facebook</span>
              <span>Twitch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#1c1c24] bg-[#0c0c12] overflow-x-auto scrollbar-none">
        {tabList.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3.5 text-xs font-mono whitespace-nowrap transition-all border-b-2 ${
                isActive
                  ? 'border-sky-500 text-white bg-[#14141e] font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-[#0f0f15]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="p-6 sm:p-10 min-h-[260px] bg-[#0b0b10]">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 max-w-4xl"
            >
              <h4 className="text-sm font-mono uppercase tracking-wider text-sky-400">
                The Problem &amp; Core Challenge:
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {cs.problem}
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Re-encoding high-resolution video directly on consumer mobile devices degrades battery life, generates intense thermal throttling, and fails whenever mobile cellular connections fluctuate. Shifting the transcoding pipeline to dedicated cloud workers resolved this bottleneck.
              </p>
            </motion.div>
          )}

          {activeTab === 'architecture' && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 max-w-4xl"
            >
              <h4 className="text-sm font-mono uppercase tracking-wider text-sky-400">
                End-to-End Architectural Components:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {cs.architecture.components.map((c) => (
                  <div key={c.name} className="bg-[#101016] border border-[#20202c] p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-white">{c.name}</span>
                      <span className="text-[10px] font-mono text-sky-400">{c.tech}</span>
                    </div>
                    <p className="text-xs text-zinc-400">{c.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'pipeline' && (
            <motion.div
              key="pipeline"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 font-mono text-xs font-semibold">
                  {cs.streamingPipeline?.highlight}
                </span>
              </div>
              <ul className="space-y-3">
                {cs.streamingPipeline?.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {activeTab === 'performance' && (
            <motion.div
              key="performance"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-300 font-mono text-xs font-semibold">
                  {cs.performance.highlight}
                </span>
              </div>
              <ul className="space-y-3">
                {cs.performance.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {activeTab === 'billing' && (
            <motion.div
              key="billing"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 max-w-4xl"
            >
              <h4 className="text-sm font-mono uppercase tracking-wider text-sky-400">
                Payment Gateways &amp; Enterprise Security:
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Implemented dual-gateway checkout infrastructure supporting international and domestic Indian transactions through Stripe and Razorpay. Handled webhook signature verification, replay protection, and idempotent tier upgrades.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#101016] border border-[#20202c] p-4 rounded-lg">
                  <span className="text-xs font-semibold text-white block mb-1">Stripe Billing</span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Recurring subscriptions, automated prorations, and secure customer portal integration.
                  </p>
                </div>
                <div className="bg-[#101016] border border-[#20202c] p-4 rounded-lg">
                  <span className="text-xs font-semibold text-white block mb-1">Razorpay Integration</span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    UPI, domestic cards, and seamless INR currency settlement with instant webhook verification.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
