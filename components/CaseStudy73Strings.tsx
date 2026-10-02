'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Layers,
  Zap,
  Lock,
  Cloud,
  FileText,
  ChevronRight,
  Server,
  Database,
  ArrowRight,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { trackCaseStudyView, trackCaseStudyClick } from '@/lib/analytics';

type CaseTab = 'problem' | 'architecture' | 'contributions' | 'performance' | 'identity' | 'observability';

export default function CaseStudy73Strings() {
  const [activeTab, setActiveTab] = useState<CaseTab>('problem');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackCaseStudyView('73Strings');
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cs = PORTFOLIO_DATA.caseStudies.seventyThreeStrings;

  const tabList: { id: CaseTab; label: string; icon: React.ReactNode }[] = [
    { id: 'problem', label: 'The Problem', icon: <FileText className="w-3.5 h-3.5" /> },
    { id: 'architecture', label: 'Architecture', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'contributions', label: 'My Contribution', icon: <Shield className="w-3.5 h-3.5" /> },
    { id: 'performance', label: 'Performance', icon: <Zap className="w-3.5 h-3.5" /> },
    { id: 'identity', label: 'Identity & Security', icon: <Lock className="w-3.5 h-3.5" /> },
    { id: 'observability', label: 'Observability & SIEM', icon: <Cloud className="w-3.5 h-3.5" /> },
  ];

  return (
    <div ref={containerRef} className="bg-[#0b0b10] border border-[#22222a] rounded-2xl overflow-hidden shadow-2xl mb-16">
      {/* Flagship Header Banner */}
      <div className="p-6 sm:p-10 border-b border-[#1c1c24] bg-gradient-to-br from-[#0e0e16] via-[#0b0b10] to-[#08080c]">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold">
              FLAGSHIP ENTERPRISE CASE STUDY
            </span>
            <span className="font-mono text-xs text-zinc-400">· {cs.period}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-emerald-400">Production Deployed</span>
          </div>
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
          {cs.title}
        </h3>
        <p className="text-base sm:text-lg font-mono text-blue-400 mb-3">
          {cs.subtitle}
        </p>
        <p className="text-sm sm:text-base text-zinc-300 max-w-4xl leading-relaxed mb-8">
          {cs.tagline}
        </p>

        {/* Highlight Scale Metrics */}
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

      {/* Interactive System Flow Canvas */}
      <div className="p-6 sm:p-8 bg-[#08080c] border-b border-[#1c1c24]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#181820] gap-2">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="font-semibold text-white uppercase tracking-wider">
              System Architecture & Data Movement
            </span>
          </div>
          <span className="text-[11px] font-mono text-zinc-400">
            Hover or tap components to inspect data flow
          </span>
        </div>

        {/* Layer 1: Identity Providers */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase text-zinc-400 w-28 shrink-0">
              01. IdP Ingress
            </span>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 flex-1">
              {[
                { id: 'entra', name: 'Microsoft Entra ID', tag: 'SAML / OIDC' },
                { id: 'okta', name: 'Okta Identity', tag: 'SCIM / SAML' },
                { id: 'ping', name: 'PingOne Identity', tag: 'Federated SSO' },
              ].map((idp) => (
                <div
                  key={idp.id}
                  onMouseEnter={() => setHoveredNode(idp.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-2.5 sm:p-3 rounded-lg border text-center transition-all cursor-default ${
                    hoveredNode === idp.id
                      ? 'bg-blue-950/50 border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.3)]'
                      : 'bg-[#101016] border-[#22222e]'
                  }`}
                >
                  <div className="text-xs font-semibold text-white truncate">{idp.name}</div>
                  <div className="text-[10px] font-mono text-zinc-400 mt-0.5">{idp.tag}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className="flex justify-center text-zinc-600 pl-28">
            <div className="flex items-center gap-1 text-[10px] font-mono text-blue-400">
              <span>↓ Azure AD B2C Custom Policy XML &amp; Graph API Federation</span>
            </div>
          </div>

          {/* Layer 2: Core Microservices Layer */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase text-zinc-400 w-28 shrink-0">
              02. Identity Layer
            </span>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 flex-1">
              {[
                { id: 'uam-core', name: 'UAM Microservice', tech: 'Java 21 · Spring Boot', desc: 'RBAC, Policy Evaluation' },
                { id: 'scim-core', name: 'SCIM 2.0 Engine', tech: 'Spring Boot 3 · REST', desc: 'RFC 7644 Auto-Provisioning' },
                { id: 'sched-core', name: 'Scheduler Microservice', tech: 'ShedLock Clustered', desc: 'Single-Instance Distributed Runs' },
              ].map((svc) => (
                <div
                  key={svc.id}
                  onMouseEnter={() => setHoveredNode(svc.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-2.5 sm:p-3 rounded-lg border text-center transition-all cursor-default ${
                    hoveredNode === svc.id
                      ? 'bg-blue-950/60 border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.3)]'
                      : 'bg-[#101016] border-[#22222e]'
                  }`}
                >
                  <div className="text-xs font-semibold text-white">{svc.name}</div>
                  <div className="text-[10px] font-mono text-blue-400 mt-0.5">{svc.tech}</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5 truncate">{svc.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className="flex justify-center text-zinc-600 pl-28">
            <div className="flex items-center gap-1 text-[10px] font-mono text-sky-400">
              <span>↓ Read/Write Transactions, Distributed Cache &amp; Inverted Audit Index</span>
            </div>
          </div>

          {/* Layer 3: Persistence & Cache Tier */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase text-zinc-400 w-28 shrink-0">
              03. Data Tier
            </span>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 flex-1">
              {[
                { id: 'redis-tier', name: 'Redis Cache Cluster', detail: '<2ms Invalidation Cache' },
                { id: 'mysql-tier', name: 'MySQL Multi-Tenant DB', detail: 'Composite Indexed Tenant Isolation' },
                { id: 'es-tier', name: 'Elasticsearch Store', detail: 'Immutable Compliance Audit Records' },
              ].map((db) => (
                <div
                  key={db.id}
                  onMouseEnter={() => setHoveredNode(db.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-2.5 sm:p-3 rounded-lg border text-center transition-all cursor-default ${
                    hoveredNode === db.id
                      ? 'bg-blue-950/50 border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.3)]'
                      : 'bg-[#101016] border-[#22222e]'
                  }`}
                >
                  <div className="text-xs font-semibold text-white">{db.name}</div>
                  <div className="text-[10px] font-mono text-zinc-400 mt-0.5">{db.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className="flex justify-center text-zinc-600 pl-28">
            <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
              <span>↓ 10,000-Record Batch Streaming via Spring Scheduler &amp; AWS STS</span>
            </div>
          </div>

          {/* Layer 4: Audit Pipeline Egress */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase text-zinc-400 w-28 shrink-0">
              04. Audit Pipeline
            </span>
            <div className="grid grid-cols-2 gap-2 sm:gap-4 flex-1">
              <div className="p-3 rounded-lg bg-[#101016] border border-[#20202c] text-center">
                <div className="text-xs font-semibold text-white">Customer AWS S3 Buckets</div>
                <div className="text-[10px] font-mono text-zinc-400 mt-0.5">Partitioned Parquet/JSON Batches</div>
              </div>
              <div className="p-3 rounded-lg bg-[#101016] border border-emerald-500/30 text-center">
                <div className="text-xs font-semibold text-emerald-300">Splunk SIEM Ingestion</div>
                <div className="text-[10px] font-mono text-zinc-400 mt-0.5">Continuous Compliance &amp; SOC2 Reporting</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="flex border-b border-[#1c1c24] bg-[#0c0c12] overflow-x-auto scrollbar-none">
        {tabList.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                trackCaseStudyClick('73Strings', `tab_${tab.id}`);
              }}
              className={`flex items-center gap-2 px-5 py-3.5 text-xs font-mono whitespace-nowrap transition-all border-b-2 ${
                isActive
                  ? 'border-blue-500 text-white bg-[#14141e] font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-[#0f0f15]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels with Concrete Technical Deep Dives */}
      <div className="p-6 sm:p-10 min-h-[300px] bg-[#0b0b10]">
        <AnimatePresence mode="wait">
          {activeTab === 'problem' && (
            <motion.div
              key="problem"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 max-w-4xl"
            >
              <h4 className="text-sm font-mono uppercase tracking-wider text-blue-400">
                The Problem &amp; Architecture Mandates:
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {cs.problem}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="bg-[#101017] border border-[#20202c] rounded-lg p-4">
                  <span className="text-xs font-mono text-amber-400 font-semibold block mb-1">
                    Multi-Tenant Concurrency Challenges
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Over 100 enterprise customers sharing underlying database clusters required ironclad authorization enforcement without cross-tenant bleed or query performance degradation.
                  </p>
                </div>
                <div className="bg-[#101017] border border-[#20202c] rounded-lg p-4">
                  <span className="text-xs font-mono text-blue-400 font-semibold block mb-1">
                    Enterprise Federation Ingress
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Clients insisted on zero manual user onboarding: identity changes had to flow dynamically from external corporate identity providers directly into the system.
                  </p>
                </div>
              </div>
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
              <h4 className="text-sm font-mono uppercase tracking-wider text-blue-400">
                Architectural Breakdown:
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {cs.architecture.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {cs.architecture.components.map((comp) => (
                  <div key={comp.name} className="bg-[#101016] border border-[#20202c] p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-white">{comp.name}</span>
                      <span className="text-[10px] font-mono text-blue-400">{comp.tech}</span>
                    </div>
                    <p className="text-xs text-zinc-400">{comp.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'contributions' && (
            <motion.div
              key="contributions"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 max-w-4xl"
            >
              <h4 className="text-sm font-mono uppercase tracking-wider text-blue-400">
                My Direct Engineering Contributions:
              </h4>
              <ul className="space-y-3">
                {cs.contributions.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
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
                    <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {activeTab === 'identity' && (
            <motion.div
              key="identity"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-300 font-mono text-xs font-semibold">
                  {cs.identitySecurity?.highlight}
                </span>
              </div>
              <ul className="space-y-3">
                {cs.identitySecurity?.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                    <Lock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {activeTab === 'observability' && (
            <motion.div
              key="observability"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold">
                  {cs.observability?.highlight}
                </span>
              </div>
              <ul className="space-y-3">
                {cs.observability?.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
