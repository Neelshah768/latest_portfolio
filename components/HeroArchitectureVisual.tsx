'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Database, ShieldCheck, Cpu, Cloud, FileText, ArrowDown, Activity } from 'lucide-react';

interface NodeDetail {
  id: string;
  name: string;
  category: string;
  protocol: string;
  metrics: string;
  desc: string;
}

const NODES_DATA: Record<string, NodeDetail> = {
  gateway: {
    id: 'gateway',
    name: 'API Gateway / Ingress',
    category: 'Edge Routing',
    protocol: 'HTTPS / TLS 1.3 / REST',
    metrics: '< 15ms Ingress Latency',
    desc: 'Stateless edge routing with rate-limiting, JWT validation, and tenant context resolution.',
  },
  scim: {
    id: 'scim',
    name: 'SCIM 2.0 Engine',
    category: 'Identity Lifecycle',
    protocol: 'RFC 7643 / RFC 7644 REST',
    metrics: 'Automated Sync',
    desc: 'Auto-provisioning microservice syncing users & groups with Okta, Entra ID, and PingOne.',
  },
  uam: {
    id: 'uam',
    name: 'UAM Microservice',
    category: 'Authorization',
    protocol: 'Spring Security / RBAC',
    metrics: '1M+ Identity Graph',
    desc: 'Evaluates multi-tenant permission graphs, entity authorization, and SAML assertions.',
  },
  scheduler: {
    id: 'scheduler',
    name: 'Distributed Scheduler',
    category: 'Job Orchestration',
    protocol: 'Spring + ShedLock',
    metrics: 'Clustered Single-Run',
    desc: 'Distributed coordination ensuring zero race condition executions across 13 environments.',
  },
  redis: {
    id: 'redis',
    name: 'Redis In-Memory Tier',
    category: 'Cache & Pub/Sub',
    protocol: 'TCP / In-Memory Key-Value',
    metrics: '< 2ms Response',
    desc: 'Sub-millisecond caching of hot permission evaluations and invalidation broadcasts.',
  },
  mysql: {
    id: 'mysql',
    name: 'Multi-Tenant Relational',
    category: 'Persistence',
    protocol: 'ACID / JPA / Direct SQL',
    metrics: 'Indexed Tenant Isolation',
    desc: 'High-volume entity storage optimized with composite indexes and eliminated N+1 queries.',
  },
  es: {
    id: 'es',
    name: 'Elasticsearch Audit Log',
    category: 'Audit & Search',
    protocol: 'Distributed Inverted Index',
    metrics: 'Near Real-Time Indexing',
    desc: 'Immutable audit trail capturing all identity changes, authorization checks, and provisioning events.',
  },
  splunk: {
    id: 'splunk',
    name: 'AWS S3 → Splunk Pipeline',
    category: 'Enterprise SIEM',
    protocol: 'AWS STS / S3 Batch',
    metrics: '10,000-record batches',
    desc: 'Continuous streaming pipeline batching compliance audit logs for enterprise security audits.',
  },
};

export default function HeroArchitectureVisual() {
  const [activeNode, setActiveNode] = useState<string>('uam');

  const activeInfo = NODES_DATA[activeNode] || NODES_DATA['uam'];

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-xl bg-[#0c0c10] border border-[#22222a] p-4 sm:p-6 shadow-2xl overflow-hidden group">
      {/* Blueprint Grid Watermark */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      {/* Header bar of the visual widget */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1c1c24] text-xs font-mono">
        <div className="flex items-center gap-2 text-zinc-400">
          <Activity className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
          <span className="text-zinc-300 font-semibold uppercase tracking-wider text-[11px]">
            Live Architecture Topology
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-zinc-400">13 Environments Healthy</span>
        </div>
      </div>

      {/* SVG Connecting Flow Lines with Live Data Flow Packets */}
      <div className="relative">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1000 330"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient id="busLineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.2" />
            </linearGradient>

            {/* Glowing filters for data packets */}
            <filter id="bluePacketGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
            <filter id="emeraldPacketGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>

            {/* Flow Paths for Animated Signals */}
            {/* Flow 1: Gateway -> Ingress Bus -> UAM (Auth) -> Data Bus -> Redis */}
            <path
              id="path-flow-1"
              d="M 500 52 L 500 82 L 200 82 L 200 110 L 200 200 L 200 225"
              fill="none"
            />
            {/* Flow 2: Gateway -> SCIM 2.0 (Identity Lifecycle Sync) -> MySQL DB */}
            <path
              id="path-flow-2"
              d="M 500 52 L 500 82 L 500 110 L 500 200 L 500 225"
              fill="none"
            />
            {/* Flow 3: Event Egress -> Mid Bus -> Elasticsearch -> AWS S3 / Splunk SIEM */}
            <path
              id="path-flow-3"
              d="M 500 175 L 500 200 L 780 200 L 780 225 L 780 290 L 780 320"
              fill="none"
            />
          </defs>

          {/* Static Circuit Topology Lines */}
          {/* Vertical Bus from Gateway down to Tier 2 */}
          <line x1="500" y1="52" x2="500" y2="82" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Horizontal Split 1 */}
          <line x1="200" y1="82" x2="800" y2="82" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" />
          {/* Down to UAM */}
          <line x1="200" y1="82" x2="200" y2="110" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" />
          {/* Down to SCIM */}
          <line x1="500" y1="82" x2="500" y2="110" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" />
          {/* Down to Scheduler */}
          <line x1="800" y1="82" x2="800" y2="110" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" />

          {/* Drops from Microservices to Mid Bus */}
          <line x1="200" y1="175" x2="200" y2="200" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="500" y1="175" x2="500" y2="200" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="800" y1="175" x2="800" y2="200" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Mid Bus to Data Tier */}
          <line x1="200" y1="200" x2="780" y2="200" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
          <line x1="200" y1="200" x2="200" y2="225" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
          <line x1="500" y1="200" x2="500" y2="225" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
          <line x1="780" y1="200" x2="780" y2="225" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />

          {/* Lower Bus to SIEM Audit Pipeline */}
          <line x1="780" y1="290" x2="780" y2="320" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* ================================================== */}
          {/* ANIMATED DATA-FLOW SIGNALS (LIVE PACKETS)         */}
          {/* ================================================== */}

          {/* FLOW 1: Auth & Ingress -> UAM -> Redis Cache Tier */}
          <g className="arch-packet">
            {/* Trailing micro-dot 2 */}
            <circle r="0.9" fill="#3b82f6" opacity="0.35">
              <animateMotion dur="3.4s" begin="-0.08s" repeatCount="indefinite">
                <mpath href="#path-flow-1" xlinkHref="#path-flow-1" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0; 0.35; 0.35; 0.35; 0"
                keyTimes="0; 0.08; 0.85; 0.95; 1"
                dur="3.4s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Trailing micro-dot 1 */}
            <circle r="1.4" fill="#60a5fa" opacity="0.55">
              <animateMotion dur="3.4s" begin="-0.04s" repeatCount="indefinite">
                <mpath href="#path-flow-1" xlinkHref="#path-flow-1" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0; 0.6; 0.6; 0.6; 0"
                keyTimes="0; 0.08; 0.85; 0.95; 1"
                dur="3.4s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Lead Packet Core */}
            <g>
              <circle r="4.2" fill="#3b82f6" opacity="0.35" filter="url(#bluePacketGlow)" />
              <circle r="2.2" fill="#60a5fa" opacity="0.85" />
              <circle r="1.2" fill="#ffffff" />
              <animateMotion dur="3.4s" begin="0s" repeatCount="indefinite">
                <mpath href="#path-flow-1" xlinkHref="#path-flow-1" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0; 1; 1; 1; 0"
                keyTimes="0; 0.08; 0.85; 0.95; 1"
                dur="3.4s"
                repeatCount="indefinite"
              />
            </g>
          </g>

          {/* FLOW 2: Gateway -> SCIM 2.0 -> MySQL DB Relational Tier */}
          <g className="arch-packet">
            {/* Trailing micro-dot 2 */}
            <circle r="0.9" fill="#0284c7" opacity="0.35">
              <animateMotion dur="3.8s" begin="1.32s" repeatCount="indefinite">
                <mpath href="#path-flow-2" xlinkHref="#path-flow-2" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0; 0.35; 0.35; 0.35; 0"
                keyTimes="0; 0.08; 0.85; 0.95; 1"
                dur="3.8s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Trailing micro-dot 1 */}
            <circle r="1.4" fill="#38bdf8" opacity="0.55">
              <animateMotion dur="3.8s" begin="1.36s" repeatCount="indefinite">
                <mpath href="#path-flow-2" xlinkHref="#path-flow-2" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0; 0.6; 0.6; 0.6; 0"
                keyTimes="0; 0.08; 0.85; 0.95; 1"
                dur="3.8s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Lead Packet Core */}
            <g>
              <circle r="4.2" fill="#0284c7" opacity="0.35" filter="url(#bluePacketGlow)" />
              <circle r="2.2" fill="#38bdf8" opacity="0.85" />
              <circle r="1.2" fill="#ffffff" />
              <animateMotion dur="3.8s" begin="1.4s" repeatCount="indefinite">
                <mpath href="#path-flow-2" xlinkHref="#path-flow-2" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0; 1; 1; 1; 0"
                keyTimes="0; 0.08; 0.85; 0.95; 1"
                dur="3.8s"
                repeatCount="indefinite"
              />
            </g>
          </g>

          {/* FLOW 3: Microservices Audit Emit -> Elasticsearch -> AWS S3 / Splunk SIEM */}
          <g className="arch-packet">
            {/* Trailing micro-dot 2 */}
            <circle r="0.9" fill="#059669" opacity="0.35">
              <animateMotion dur="3.0s" begin="0.62s" repeatCount="indefinite">
                <mpath href="#path-flow-3" xlinkHref="#path-flow-3" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0; 0.35; 0.35; 0.35; 0"
                keyTimes="0; 0.08; 0.85; 0.95; 1"
                dur="3.0s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Trailing micro-dot 1 */}
            <circle r="1.4" fill="#34d399" opacity="0.55">
              <animateMotion dur="3.0s" begin="0.66s" repeatCount="indefinite">
                <mpath href="#path-flow-3" xlinkHref="#path-flow-3" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0; 0.6; 0.6; 0.6; 0"
                keyTimes="0; 0.08; 0.85; 0.95; 1"
                dur="3.0s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Lead Packet Core */}
            <g>
              <circle r="4.2" fill="#059669" opacity="0.35" filter="url(#emeraldPacketGlow)" />
              <circle r="2.2" fill="#34d399" opacity="0.85" />
              <circle r="1.2" fill="#ffffff" />
              <animateMotion dur="3.0s" begin="0.7s" repeatCount="indefinite">
                <mpath href="#path-flow-3" xlinkHref="#path-flow-3" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0; 1; 1; 1; 0"
                keyTimes="0; 0.08; 0.85; 0.95; 1"
                dur="3.0s"
                repeatCount="indefinite"
              />
            </g>
          </g>
        </svg>

        {/* Tier 1: Gateway */}
        <div className="flex justify-center mb-6 relative z-10">
          <button
            type="button"
            onClick={() => setActiveNode('gateway')}
            onMouseEnter={() => setActiveNode('gateway')}
            className={`flex items-center gap-2.5 px-4 py-2 rounded-lg font-mono text-xs transition-all border ${
              activeNode === 'gateway'
                ? 'bg-blue-950/70 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                : 'bg-[#121217] border-[#252530] text-zinc-300 hover:border-zinc-500 pulse-gateway'
            }`}
          >
            <Server className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold">API Gateway</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">
              Ingress
            </span>
          </button>
        </div>

        {/* Tier 2: Microservices Layer */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-6 relative z-10">
          {/* UAM */}
          <button
            type="button"
            onClick={() => setActiveNode('uam')}
            onMouseEnter={() => setActiveNode('uam')}
            className={`flex flex-col items-center text-center p-2.5 sm:p-3 rounded-lg font-mono text-xs transition-all border ${
              activeNode === 'uam'
                ? 'bg-blue-950/60 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'bg-[#121217] border-[#22222a] text-zinc-300 hover:border-zinc-500 pulse-uam'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-blue-400 mb-1" />
            <span className="font-semibold text-xs text-white">UAM Service</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">Authorization</span>
          </button>

          {/* SCIM */}
          <button
            type="button"
            onClick={() => setActiveNode('scim')}
            onMouseEnter={() => setActiveNode('scim')}
            className={`flex flex-col items-center text-center p-2.5 sm:p-3 rounded-lg font-mono text-xs transition-all border ${
              activeNode === 'scim'
                ? 'bg-blue-950/60 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'bg-[#121217] border-[#22222a] text-zinc-300 hover:border-zinc-500 pulse-scim'
            }`}
          >
            <Cpu className="w-4 h-4 text-sky-400 mb-1" />
            <span className="font-semibold text-xs text-white">SCIM 2.0</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">Auto-Provision</span>
          </button>

          {/* Scheduler */}
          <button
            type="button"
            onClick={() => setActiveNode('scheduler')}
            onMouseEnter={() => setActiveNode('scheduler')}
            className={`flex flex-col items-center text-center p-2.5 sm:p-3 rounded-lg font-mono text-xs transition-all border ${
              activeNode === 'scheduler'
                ? 'bg-blue-950/60 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'bg-[#121217] border-[#22222a] text-zinc-300 hover:border-zinc-500'
            }`}
          >
            <Activity className="w-4 h-4 text-indigo-400 mb-1" />
            <span className="font-semibold text-xs text-white">Scheduler</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">ShedLock</span>
          </button>
        </div>

        {/* Tier 3: Distributed Data Tier */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-6 relative z-10">
          {/* Redis */}
          <button
            type="button"
            onClick={() => setActiveNode('redis')}
            onMouseEnter={() => setActiveNode('redis')}
            className={`flex flex-col items-center text-center p-2.5 sm:p-3 rounded-lg font-mono text-xs transition-all border ${
              activeNode === 'redis'
                ? 'bg-red-950/40 border-red-400 text-white shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                : 'bg-[#121217] border-[#22222a] text-zinc-300 hover:border-zinc-500 pulse-redis'
            }`}
          >
            <Database className="w-4 h-4 text-red-400 mb-1" />
            <span className="font-semibold text-xs text-white">Redis Cluster</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">&lt; 2ms In-Memory</span>
          </button>

          {/* MySQL */}
          <button
            type="button"
            onClick={() => setActiveNode('mysql')}
            onMouseEnter={() => setActiveNode('mysql')}
            className={`flex flex-col items-center text-center p-2.5 sm:p-3 rounded-lg font-mono text-xs transition-all border ${
              activeNode === 'mysql'
                ? 'bg-blue-950/60 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                : 'bg-[#121217] border-[#22222a] text-zinc-300 hover:border-zinc-500 pulse-mysql'
            }`}
          >
            <Database className="w-4 h-4 text-blue-400 mb-1" />
            <span className="font-semibold text-xs text-white">MySQL DB</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">Multi-Tenant</span>
          </button>

          {/* Elasticsearch */}
          <button
            type="button"
            onClick={() => setActiveNode('es')}
            onMouseEnter={() => setActiveNode('es')}
            className={`flex flex-col items-center text-center p-2.5 sm:p-3 rounded-lg font-mono text-xs transition-all border ${
              activeNode === 'es'
                ? 'bg-amber-950/40 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                : 'bg-[#121217] border-[#22222a] text-zinc-300 hover:border-zinc-500 pulse-es'
            }`}
          >
            <FileText className="w-4 h-4 text-amber-400 mb-1" />
            <span className="font-semibold text-xs text-white">Elasticsearch</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">Audit Search</span>
          </button>
        </div>

        {/* Tier 4: SIEM Compliance Pipeline Egress */}
        <div className="flex justify-end relative z-10 mb-2">
          <button
            type="button"
            onClick={() => setActiveNode('splunk')}
            onMouseEnter={() => setActiveNode('splunk')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs transition-all border ${
              activeNode === 'splunk'
                ? 'bg-emerald-950/60 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                : 'bg-[#101015] border-[#202028] text-zinc-400 hover:border-zinc-500 pulse-splunk'
            }`}
          >
            <Cloud className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] font-semibold text-zinc-200">AWS S3 → Splunk SIEM</span>
            <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-300">
              10k Batches
            </span>
          </button>
        </div>
      </div>

      {/* Inspector Drawer for selected node */}
      <motion.div
        key={activeInfo.id}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.15 }}
        className="mt-4 pt-3 border-t border-[#1e1e26] bg-[#09090c] rounded-lg p-3 font-mono text-xs"
      >
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="font-semibold text-white tracking-wide">{activeInfo.name}</span>
            <span className="text-[10px] text-zinc-400 px-1.5 py-0.5 bg-[#171720] border border-[#272730] rounded">
              {activeInfo.category}
            </span>
          </div>
          <span className="text-[11px] text-blue-300">{activeInfo.metrics}</span>
        </div>
        <p className="text-[11px] text-zinc-300 font-sans leading-relaxed mb-2">
          {activeInfo.desc}
        </p>
        <div className="text-[10px] text-zinc-400 flex items-center gap-1.5">
          <span className="text-zinc-500">Protocol:</span>
          <code className="text-zinc-300 bg-[#14141c] px-1.5 py-0.5 rounded border border-[#20202a]">
            {activeInfo.protocol}
          </code>
        </div>
      </motion.div>

      {/* Node pulse animations synchronized with packet arrivals */}
      <style>{`
        @keyframes pulse-gateway {
          0%, 2% { border-color: rgba(96, 165, 250, 0.55); box-shadow: 0 0 10px rgba(59, 130, 246, 0.22); }
          6%, 100% { border-color: #252530; box-shadow: none; }
        }
        @keyframes pulse-uam {
          0%, 68% { border-color: #22222a; box-shadow: none; }
          74% { border-color: rgba(96, 165, 250, 0.55); box-shadow: 0 0 10px rgba(59, 130, 246, 0.22); }
          80%, 100% { border-color: #22222a; box-shadow: none; }
        }
        @keyframes pulse-redis {
          0%, 93% { border-color: #22222a; box-shadow: none; }
          97% { border-color: rgba(239, 68, 68, 0.5); box-shadow: 0 0 10px rgba(239, 68, 68, 0.2); }
          100% { border-color: #22222a; box-shadow: none; }
        }
        @keyframes pulse-scim {
          0%, 28% { border-color: #22222a; box-shadow: none; }
          34% { border-color: rgba(56, 189, 248, 0.55); box-shadow: 0 0 10px rgba(56, 189, 248, 0.22); }
          40%, 100% { border-color: #22222a; box-shadow: none; }
        }
        @keyframes pulse-mysql {
          0%, 90% { border-color: #22222a; box-shadow: none; }
          95% { border-color: rgba(96, 165, 250, 0.55); box-shadow: 0 0 10px rgba(59, 130, 246, 0.22); }
          100% { border-color: #22222a; box-shadow: none; }
        }
        @keyframes pulse-es {
          0%, 72% { border-color: #22222a; box-shadow: none; }
          78% { border-color: rgba(245, 158, 11, 0.5); box-shadow: 0 0 10px rgba(245, 158, 11, 0.2); }
          84%, 100% { border-color: #22222a; box-shadow: none; }
        }
        @keyframes pulse-splunk {
          0%, 91% { border-color: #202028; box-shadow: none; }
          96% { border-color: rgba(16, 185, 129, 0.55); box-shadow: 0 0 10px rgba(16, 185, 129, 0.22); }
          100% { border-color: #202028; box-shadow: none; }
        }
        .pulse-gateway { animation: pulse-gateway 3.4s infinite; }
        .pulse-uam { animation: pulse-uam 3.4s infinite; }
        .pulse-redis { animation: pulse-redis 3.4s infinite; }
        .pulse-scim { animation: pulse-scim 3.8s infinite 1.4s; }
        .pulse-mysql { animation: pulse-mysql 3.8s infinite 1.4s; }
        .pulse-es { animation: pulse-es 3.0s infinite 0.7s; }
        .pulse-splunk { animation: pulse-splunk 3.0s infinite 0.7s; }

        @media (prefers-reduced-motion: reduce) {
          .arch-packet {
            display: none !important;
          }
          .pulse-gateway, .pulse-uam, .pulse-redis, .pulse-scim, .pulse-mysql, .pulse-es, .pulse-splunk {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
