'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Cpu,
  Layers,
  Database,
  Send,
  Ticket,
  UserCheck,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { trackCaseStudyView, trackCaseStudyClick } from '@/lib/analytics';

type AiTab = 'problem' | 'workflow' | 'aiLayer' | 'automationLayer' | 'humanHandoff' | 'technology';

interface NodeDetail {
  id: string;
  name: string;
  category: string;
  desc: string;
}

const ARCH_NODES: Record<string, NodeDetail> = {
  customer: {
    id: 'customer',
    name: 'Customer Ingress',
    category: 'Source',
    desc: 'Incoming support inquiries submitted via corporate email.',
  },
  processor: {
    id: 'processor',
    name: 'Email Processor',
    category: 'Ingestion Tier',
    desc: 'Monitors incoming customer support emails, strips noise, sanitizes HTML, and prepares messages for automated processing.',
  },
  classification: {
    id: 'classification',
    name: 'AI Classification & Intent',
    category: 'Inference',
    desc: 'Categorizes requests, identifies urgency, and extracts key entities using Google Gemini before evaluation.',
  },
  knowledgeBase: {
    id: 'knowledgeBase',
    name: 'Knowledge Base',
    category: 'Ground Truth',
    desc: 'Retrieves authoritative organizational documentation, FAQs, and product guides for strict context grounding.',
  },
  gemini: {
    id: 'gemini',
    name: 'Google Gemini Engine',
    category: 'Synthesis',
    desc: 'Generates responses strictly based on relevant information available to the workflow, preventing hallucinations.',
  },
  responseEngine: {
    id: 'responseEngine',
    name: 'Automated Response Dispatch',
    category: 'Resolution Action',
    desc: 'Dispatches contextual email resolution directly to the customer when knowledge completely satisfies the request.',
  },
  jira: {
    id: 'jira',
    name: 'Jira Gateway',
    category: 'Escalation Action',
    desc: 'Creates and routes unresolved issues to the appropriate workflow with extracted metadata and priorities.',
  },
  assignment: {
    id: 'assignment',
    name: 'Department Assignment',
    category: 'Human Support',
    desc: 'Assigns prioritized Jira tickets to specialized engineering, finance, or customer success representatives.',
  },
};

export default function CaseStudyAiSupport() {
  const [activeTab, setActiveTab] = useState<AiTab>('problem');
  const [activeNodeId, setActiveNodeId] = useState<string>('processor');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackCaseStudyView('AI-Powered Customer Support Automation');
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Interactive Conceptual Demo State
  const [demoScenario, setDemoScenario] = useState<'auth' | 'financial'>('auth');
  const [demoStep, setDemoStep] = useState<number>(0);
  const [demoRunning, setDemoRunning] = useState<boolean>(false);

  const cs = PORTFOLIO_DATA.caseStudies.aiCustomerSupport;

  const runDemo = () => {
    if (demoRunning) return;
    trackCaseStudyClick('AI-Powered Customer Support Automation', `simulation_${demoScenario}`);
    setDemoRunning(true);
    setDemoStep(1);

    setTimeout(() => setDemoStep(2), 600);
    setTimeout(() => setDemoStep(3), 1300);
    setTimeout(() => setDemoStep(4), 2000);
    setTimeout(() => {
      setDemoStep(5);
      setDemoRunning(false);
    }, 2700);
  };

  const resetDemo = () => {
    setDemoStep(0);
    setDemoRunning(false);
  };

  const tabList: { id: AiTab; label: string; icon: React.ReactNode }[] = [
    { id: 'problem', label: 'The Problem', icon: <AlertTriangle className="w-3.5 h-3.5" /> },
    { id: 'workflow', label: 'The Workflow', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'aiLayer', label: 'The AI Layer', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'automationLayer', label: 'The Automation Layer', icon: <Send className="w-3.5 h-3.5" /> },
    { id: 'humanHandoff', label: 'The Human Handoff', icon: <UserCheck className="w-3.5 h-3.5" /> },
    { id: 'technology', label: 'Technology', icon: <Database className="w-3.5 h-3.5" /> },
  ];

  const activeNodeInfo = ARCH_NODES[activeNodeId] || ARCH_NODES['processor'];

  return (
    <div ref={containerRef} className="bg-[#0b0b10] border border-[#22222a] rounded-2xl overflow-hidden shadow-2xl">
      {/* Banner */}
      <div className="p-6 sm:p-10 border-b border-[#1c1c24] bg-gradient-to-br from-[#0e0e16] via-[#0b0b10] to-[#08080c]">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold">
              BACKEND WORKFLOW AUTOMATION
            </span>
            <span className="font-mono text-xs text-zinc-400">· LLM Integration</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-mono text-zinc-300">Continuous Processing</span>
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

      {/* Interactive System Flow Architecture Visual */}
      <div className="p-6 sm:p-8 bg-[#08080c] border-b border-[#1c1c24]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#181820] gap-2">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="font-semibold text-white uppercase tracking-wider">
              System Architecture: Data → Processing → Decision → Action
            </span>
          </div>
          <span className="text-[11px] font-mono text-zinc-400">
            Hover or tap any component to inspect role
          </span>
        </div>

        {/* Visual Schematic Box */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* Level 1: Customer Ingress */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setActiveNodeId('customer')}
              onMouseEnter={() => setActiveNodeId('customer')}
              className={`px-4 py-2 rounded-lg font-mono text-xs border transition-all flex items-center gap-2 ${
                activeNodeId === 'customer'
                  ? 'bg-blue-950/60 border-blue-400 text-white shadow-[0_0_12px_rgba(59,130,246,0.3)]'
                  : 'bg-[#121218] border-[#22222e] text-zinc-300 hover:border-zinc-500'
              }`}
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold">Customer Support Email</span>
            </button>
          </div>

          <div className="flex justify-center text-zinc-600 font-mono text-[10px]">
            <span>↓ Mailbox Polling &amp; Ingestion</span>
          </div>

          {/* Level 2: Email Processor */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setActiveNodeId('processor')}
              onMouseEnter={() => setActiveNodeId('processor')}
              className={`px-4 py-2 rounded-lg font-mono text-xs border transition-all flex items-center gap-2 ${
                activeNodeId === 'processor'
                  ? 'bg-blue-950/60 border-blue-400 text-white shadow-[0_0_12px_rgba(59,130,246,0.3)]'
                  : 'bg-[#121218] border-[#22222e] text-zinc-300 hover:border-zinc-500'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-semibold">Email Processor (HTML Sanitization &amp; Tokenization)</span>
            </button>
          </div>

          <div className="flex justify-center text-zinc-600 font-mono text-[10px]">
            <span>↓ Prepared Message Payload</span>
          </div>

          {/* Level 3: AI Classification */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setActiveNodeId('classification')}
              onMouseEnter={() => setActiveNodeId('classification')}
              className={`px-5 py-2.5 rounded-lg font-mono text-xs border transition-all flex items-center gap-2 ${
                activeNodeId === 'classification'
                  ? 'bg-blue-950/70 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                  : 'bg-[#121218] border-[#22222e] text-zinc-300 hover:border-zinc-500'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold">AI Classification &amp; Intent Detection (Gemini)</span>
            </button>
          </div>

          <div className="flex justify-center text-zinc-600 font-mono text-[10px]">
            <span>┌────────────── Branch Decision Point ──────────────┐</span>
          </div>

          {/* Level 4: Dual Branch (Knowledge Grounded Path vs Human Escalation Path) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Path A: Knowledge Grounded Resolution */}
            <div className="p-4 rounded-xl bg-[#0e0e16] border border-blue-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-blue-400 font-semibold uppercase tracking-wider">
                  Path A: Knowledge Sufficient
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">
                  Automated Reply
                </span>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setActiveNodeId('knowledgeBase')}
                  onMouseEnter={() => setActiveNodeId('knowledgeBase')}
                  className={`w-full p-2 rounded text-left text-xs font-mono border transition-all ${
                    activeNodeId === 'knowledgeBase'
                      ? 'bg-blue-950/60 border-blue-400 text-white'
                      : 'bg-[#12121a] border-[#20202c] text-zinc-300'
                  }`}
                >
                  <div className="font-semibold text-white">01. Knowledge Base Lookup</div>
                  <div className="text-[10px] text-zinc-400">Context match verification</div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveNodeId('gemini')}
                  onMouseEnter={() => setActiveNodeId('gemini')}
                  className={`w-full p-2 rounded text-left text-xs font-mono border transition-all ${
                    activeNodeId === 'gemini'
                      ? 'bg-blue-950/60 border-blue-400 text-white'
                      : 'bg-[#12121a] border-[#20202c] text-zinc-300'
                  }`}
                >
                  <div className="font-semibold text-white">02. Google Gemini API</div>
                  <div className="text-[10px] text-zinc-400">Strict context-grounded reply synthesis</div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveNodeId('responseEngine')}
                  onMouseEnter={() => setActiveNodeId('responseEngine')}
                  className={`w-full p-2 rounded text-left text-xs font-mono border transition-all ${
                    activeNodeId === 'responseEngine'
                      ? 'bg-blue-950/60 border-blue-400 text-white'
                      : 'bg-[#12121a] border-[#20202c] text-zinc-300'
                  }`}
                >
                  <div className="font-semibold text-white">03. Automated Email Response</div>
                  <div className="text-[10px] text-zinc-400">Direct customer resolution email</div>
                </button>
              </div>
            </div>

            {/* Path B: Unresolved / Human Escalation */}
            <div className="p-4 rounded-xl bg-[#0e0e16] border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-amber-400 font-semibold uppercase tracking-wider">
                  Path B: Unresolved / Insufficient Info
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                  Human Escalation
                </span>
              </div>

              <div className="space-y-2">
                <div className="p-2 rounded bg-[#12121a] border border-[#20202c] text-xs font-mono text-zinc-300">
                  <div className="font-semibold text-white">01. Immediate Customer Ack</div>
                  <div className="text-[10px] text-zinc-400">Informs customer ticket is assigned</div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveNodeId('jira')}
                  onMouseEnter={() => setActiveNodeId('jira')}
                  className={`w-full p-2 rounded text-left text-xs font-mono border transition-all ${
                    activeNodeId === 'jira'
                      ? 'bg-amber-950/60 border-amber-400 text-white'
                      : 'bg-[#12121a] border-[#20202c] text-zinc-300'
                  }`}
                >
                  <div className="font-semibold text-white">02. Jira REST API</div>
                  <div className="text-[10px] text-zinc-400">Structured ticket created with context &amp; urgency</div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveNodeId('assignment')}
                  onMouseEnter={() => setActiveNodeId('assignment')}
                  className={`w-full p-2 rounded text-left text-xs font-mono border transition-all ${
                    activeNodeId === 'assignment'
                      ? 'bg-amber-950/60 border-amber-400 text-white'
                      : 'bg-[#12121a] border-[#20202c] text-zinc-300'
                  }`}
                >
                  <div className="font-semibold text-white">03. Department Assignment</div>
                  <div className="text-[10px] text-zinc-400">Routed to specialized human support team</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Node Detail Inspector */}
        <div className="mt-6 pt-3 border-t border-[#1a1a24] bg-[#09090d] rounded-lg p-3 font-mono text-xs">
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold text-white">{activeNodeInfo.name}</span>
            <span className="text-[10px] text-zinc-400 px-1.5 py-0.5 bg-[#14141c] rounded border border-[#22222e]">
              {activeNodeInfo.category}
            </span>
          </div>
          <p className="text-[11px] text-zinc-300 font-sans leading-relaxed">
            {activeNodeInfo.desc}
          </p>
        </div>
      </div>

      {/* Interactive Workflow Demo Widget */}
      <div className="p-6 sm:p-8 bg-[#0a0a0f] border-b border-[#1c1c24]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#181822] gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Workflow Simulation
              </span>
              <span className="text-[10px] font-mono text-zinc-400 px-1.5 py-0.5 rounded bg-[#14141e]">
                Conceptual Execution Demo
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-0.5">
              Select an email type to simulate knowledge-grounded vs human-escalation branches.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-[#12121a] p-1 rounded-lg border border-[#22222e] text-xs font-mono">
              <button
                type="button"
                onClick={() => {
                  setDemoScenario('auth');
                  resetDemo();
                }}
                className={`px-2.5 py-1 rounded transition-colors ${
                  demoScenario === 'auth' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Scenario A (Knowledge Match)
              </button>
              <button
                type="button"
                onClick={() => {
                  setDemoScenario('financial');
                  resetDemo();
                }}
                className={`px-2.5 py-1 rounded transition-colors ${
                  demoScenario === 'financial' ? 'bg-amber-600 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Scenario B (Human Escalation)
              </button>
            </div>

            <button
              type="button"
              onClick={runDemo}
              disabled={demoRunning}
              className="px-3.5 py-1.5 text-xs font-mono font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-lg flex items-center gap-1.5 transition-all shadow-[0_0_10px_rgba(59,130,246,0.3)]"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>{demoRunning ? 'Running...' : 'Run'}</span>
            </button>

            <button
              type="button"
              onClick={resetDemo}
              className="p-1.5 text-xs font-mono text-zinc-400 hover:text-white border border-[#252530] rounded-lg"
              aria-label="Reset simulation"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Input Email Box */}
        <div className="bg-[#07070a] border border-[#1e1e26] rounded-xl p-4 font-mono text-xs mb-4">
          <div className="text-[10px] text-zinc-400 uppercase tracking-wider mb-1">
            Simulated Incoming Customer Email:
          </div>
          <div className="text-zinc-200 bg-[#0e0e14] p-3 rounded border border-[#1a1a24] text-xs leading-relaxed">
            {demoScenario === 'auth'
              ? '"Hi Support, I am unable to access my customer portal after resetting my password yesterday. Can you tell me how to clear cached credentials and log in?"'
              : '"Hi Support, our monthly settlement report contains incorrect transaction values for transaction #TXN-9021. The net disbursement does not match our bank transfer."'}
          </div>
        </div>

        {/* Dynamic Execution Progression Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
          {[
            {
              step: 1,
              title: 'Email Ingestion',
              detail: 'Sanitized & Parsed',
            },
            {
              step: 2,
              title: 'Intent Classification',
              detail: demoScenario === 'auth' ? 'Auth / Access Issue' : 'Financial Reconciliation',
            },
            {
              step: 3,
              title: 'Knowledge Check',
              detail:
                demoScenario === 'auth'
                  ? 'Knowledge Match Found (Portal FAQ)'
                  : 'Insufficient Knowledge (Zero Hallucination)',
            },
            {
              step: 4,
              title: demoScenario === 'auth' ? 'Gemini Response Synthesis' : 'Customer Acknowledgement',
              detail:
                demoScenario === 'auth'
                  ? 'Grounded answer drafted'
                  : 'Ack email dispatched + Jira ticket created',
            },
            {
              step: 5,
              title: demoScenario === 'auth' ? 'Email Dispatched' : 'Routed in Jira',
              detail:
                demoScenario === 'auth'
                  ? 'Resolved directly to customer'
                  : 'Assigned to Finance Ops (Ticket FIN-394)',
            },
          ].map((item) => {
            const isPassed = demoStep > item.step;
            const isCurrent = demoStep === item.step;
            return (
              <div
                key={item.step}
                className={`p-3 rounded-lg border text-xs font-mono transition-all ${
                  isCurrent
                    ? 'bg-blue-950/60 border-blue-400 text-white shadow-[0_0_12px_rgba(59,130,246,0.3)]'
                    : isPassed
                    ? demoScenario === 'auth'
                      ? 'bg-[#101018] border-emerald-500/40 text-emerald-300'
                      : 'bg-[#101018] border-amber-500/40 text-amber-300'
                    : 'bg-[#0f0f15] border-[#1e1e28] text-zinc-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1 text-[10px]">
                  <span>Step 0{item.step}</span>
                  {isPassed && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                  {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />}
                </div>
                <div className="font-semibold text-white text-[11px] mb-0.5">{item.title}</div>
                <div className="text-[10px] text-zinc-400 leading-tight">{item.detail}</div>
              </div>
            );
          })}
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
              onClick={() => {
                setActiveTab(tab.id);
                trackCaseStudyClick('AI-Powered Customer Support Automation', `tab_${tab.id}`);
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

      {/* Tab Panels */}
      <div className="p-6 sm:p-10 min-h-[260px] bg-[#0b0b10]">
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
                The Problem &amp; Operational Reality:
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Customer support teams receive incoming emails that need to be classified, understood, answered when possible, or routed to the appropriate team.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#101016] border border-[#20202c] p-4 rounded-lg">
                  <span className="text-xs font-semibold text-white block mb-1">Repetitive Triage Friction</span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Routine questions consume significant support bandwidth while critical edge-case customer issues wait in the same queue without intelligent prioritization.
                  </p>
                </div>
                <div className="bg-[#101016] border border-[#20202c] p-4 rounded-lg">
                  <span className="text-xs font-semibold text-white block mb-1">Risk of Unsupported Answers</span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Unconstrained LLMs are prone to hallucinating facts. The system required absolute adherence to verified ground-truth knowledge with instant human fallback.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'workflow' && (
            <motion.div
              key="workflow"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 max-w-4xl"
            >
              <h4 className="text-sm font-mono uppercase tracking-wider text-blue-400">
                End-to-End Processing Workflow:
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                The system continuously monitors incoming emails, determines relevance and intent, checks the knowledge base, and decides whether the request can be answered automatically.
              </p>
              <ul className="space-y-2.5 pt-2">
                {[
                  'Continuous polling and webhook ingestion of customer support mailboxes.',
                  'Payload sanitization, attachment indexing, and HTML stripping into structured tokens.',
                  'AI classification evaluating message relevance, category, and urgency score.',
                  'Knowledge base lookup verifying whether authoritative ground truth exists to answer the question.',
                  'Bifurcation decision: automated grounded email dispatch vs. customer acknowledgment and Jira routing.',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                    <ChevronRight className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {activeTab === 'aiLayer' && (
            <motion.div
              key="aiLayer"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 max-w-4xl"
            >
              <h4 className="text-sm font-mono uppercase tracking-wider text-blue-400">
                The AI Layer (Google Gemini Integration):
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Google Gemini is integrated directly into the backend workflow for four core responsibilities:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { title: 'Email Classification', desc: 'Identifies inquiry type, domain, and relevance from raw unstructured customer messages.' },
                  { title: 'Intent Understanding', desc: 'Parses underlying user requirements, urgency level, and explicit entity references.' },
                  { title: 'Knowledge-Based Q&A', desc: 'Evaluates customer questions against strict ground-truth context retrieved from the knowledge base.' },
                  { title: 'Response Generation', desc: 'Synthesizes professional, factual customer responses formatted cleanly for email delivery.' },
                ].map((card) => (
                  <div key={card.title} className="bg-[#101016] border border-[#20202c] p-3.5 rounded-lg">
                    <span className="text-xs font-semibold text-white block mb-1">{card.title}</span>
                    <p className="text-xs text-zinc-400 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'automationLayer' && (
            <motion.div
              key="automationLayer"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 max-w-4xl"
            >
              <h4 className="text-sm font-mono uppercase tracking-wider text-blue-400">
                The Automation Layer (Backend Services &amp; APIs):
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                The AI workflow is connected to backend automation for transactional communications and enterprise task tracking:
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Automated Email Responses: Dispatches verified answers formatted directly for the customer.',
                  'Customer Acknowledgement: Sends immediate confirmation with ticket tracking references when human intervention is necessary.',
                  'Jira Ticket Creation: Calls the Jira REST API to generate structured tickets containing extracted intent, urgency, and raw message body.',
                  'Issue Routing & Assignment: Determines responsible departments (e.g. Engineering, Billing, Security) based on classification tags.',
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed bg-[#101016] p-3 rounded-lg border border-[#1e1e28]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'humanHandoff' && (
            <motion.div
              key="humanHandoff"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 max-w-4xl"
            >
              <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400">
                The Human Handoff (Responsible Engineering Invariant):
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                When the available knowledge is insufficient to answer the customer&apos;s request, the system does not attempt to invent an answer.
              </p>
              <div className="bg-[#121018] border border-amber-500/30 p-4 rounded-xl space-y-2">
                <span className="text-xs font-mono font-semibold text-amber-300 block">
                  Zero Speculative Guessing Policy:
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Instead of generating probabilistic guesses or unverified workarounds, the workflow recognizes confidence boundaries. It sends an immediate professional acknowledgment to the customer reassuring them their request is received, and automatically creates a Jira ticket with pre-populated metadata routed directly to the appropriate team for human handling.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'technology' && (
            <motion.div
              key="technology"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 max-w-4xl"
            >
              <h4 className="text-sm font-mono uppercase tracking-wider text-blue-400">
                Verified Production Technologies:
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Implemented using proven enterprise APIs and backend automation services:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  'Google Gemini API',
                  'LLM Workflow Automation',
                  'Knowledge Base',
                  'AI Classification',
                  'Intent Detection',
                  'Email Automation',
                  'Jira Integration',
                  'Backend Services',
                ].map((tech) => (
                  <div key={tech} className="bg-[#101016] border border-[#20202c] p-3 rounded-lg text-center">
                    <span className="text-xs font-mono text-zinc-200">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
