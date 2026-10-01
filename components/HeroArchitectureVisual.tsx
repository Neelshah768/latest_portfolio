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

      {/* SVG Connecting Flow Lines with Data Packets */}
      <div className="relative">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="busLineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Vertical Bus from Gateway down to Tier 2 */}
          <line x1="50%" y1="52" x2="50%" y2="82" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Horizontal Split */}
          <line x1="20%" y1="82" x2="80%" y2="82" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" />
          {/* Down to UAM */}
          <line x1="20%" y1="82" x2="20%" y2="110" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" />
          {/* Down to SCIM */}
          <line x1="50%" y1="82" x2="50%" y2="110" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" />
          {/* Down to Scheduler */}
          <line x1="80%" y1="82" x2="80%" y2="110" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1.5" />

          {/* Mid Bus to Data Tier */}
          <line x1="50%" y1="175" x2="50%" y2="200" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="22%" y1="200" x2="78%" y2="200" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
          <line x1="22%" y1="200" x2="22%" y2="225" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
          <line x1="50%" y1="200" x2="50%" y2="225" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
          <line x1="78%" y1="200" x2="78%" y2="225" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />

          {/* Lower Bus to SIEM Audit Pipeline */}
          <line x1="78%" y1="290" x2="78%" y2="320" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
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
                : 'bg-[#121217] border-[#252530] text-zinc-300 hover:border-zinc-500'
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
                : 'bg-[#121217] border-[#22222a] text-zinc-300 hover:border-zinc-500'
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
                : 'bg-[#121217] border-[#22222a] text-zinc-300 hover:border-zinc-500'
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
                : 'bg-[#121217] border-[#22222a] text-zinc-300 hover:border-zinc-500'
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
                : 'bg-[#121217] border-[#22222a] text-zinc-300 hover:border-zinc-500'
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
                : 'bg-[#121217] border-[#22222a] text-zinc-300 hover:border-zinc-500'
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
                : 'bg-[#101015] border-[#202028] text-zinc-400 hover:border-zinc-500'
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
    </div>
  );
}
