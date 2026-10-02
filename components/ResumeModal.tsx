'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, ExternalLink, FileText, Briefcase, GraduationCap, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { trackCVDownload } from '@/lib/analytics';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeView, setActiveView] = useState<'summary' | 'pdf'>('pdf');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl bg-[#0e0e14] border border-[#272734] rounded-2xl p-5 sm:p-7 shadow-2xl z-10 max-h-[90vh] overflow-y-auto flex flex-col justify-between"
            role="dialog"
            aria-modal="true"
            aria-label="Resume & CV Viewer"
          >
            {/* Modal Header */}
            <div>
              <div className="flex items-start justify-between pb-4 mb-4 border-b border-[#20202c]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white">
                      {PORTFOLIO_DATA.personal.name} — Curriculum Vitae
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                      VERIFIED PDF
                    </span>
                  </div>
                  <p className="text-xs font-mono text-blue-400">
                    {PORTFOLIO_DATA.personal.role} · {PORTFOLIO_DATA.personal.location}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-[#181824] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-2 mb-5">
                <button
                  type="button"
                  onClick={() => setActiveView('pdf')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors ${
                    activeView === 'pdf'
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-[#14141e] text-zinc-400 hover:text-white border border-[#22222e]'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>PDF Document Viewer</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveView('summary')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors ${
                    activeView === 'summary'
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-[#14141e] text-zinc-400 hover:text-white border border-[#22222e]'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Structured Overview</span>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto mb-4">
              {activeView === 'pdf' ? (
                <div className="w-full h-[540px] rounded-xl border border-[#22222e] overflow-hidden bg-[#0a0a0f] relative">
                  <iframe
                    src={`${PORTFOLIO_DATA.socials.resumeUrl}#toolbar=1&navpanes=0`}
                    className="w-full h-full rounded-xl"
                    title="Neel Shah Curriculum Vitae"
                  />
                </div>
              ) : (
                <div className="space-y-6 text-sm text-zinc-300">
                  {/* Profile */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Professional Summary
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed bg-[#12121c] p-3 rounded-lg border border-[#1e1e2c]">
                      {PORTFOLIO_DATA.personal.bio}
                    </p>
                  </div>

                  {/* Verified Metrics */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Verified Production Metrics
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {PORTFOLIO_DATA.verifiedMetrics.map((m) => (
                        <div key={m.label} className="bg-[#12121c] p-2.5 rounded-lg border border-[#1e1e2c]">
                          <div className="text-base font-mono font-bold text-white">{m.value}</div>
                          <div className="text-[10px] font-mono text-zinc-400">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                      Experience
                    </h4>
                    <div className="bg-[#12121c] p-4 rounded-lg border border-[#1e1e2c] space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <span className="font-semibold text-white">Promethean Tech</span>
                          <span className="text-zinc-400 text-xs"> — Software Engineer (Backend &amp; Distributed Systems)</span>
                        </div>
                        <span className="text-xs font-mono text-blue-400">July 2022 – Present</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">▸</span>
                          <span>Architected backend microservices for UAM, SCIM 2.0, and distributed Scheduler (73Strings).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">▸</span>
                          <span>Reduced API response times by over 50% through SQL N+1 resolution, indexing, and Datadog APM tracing.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">▸</span>
                          <span>Engineered SCIM 2.0 auto-provisioning service and automated SAML SSO via Azure AD B2C custom policies.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">▸</span>
                          <span>Streamed Elasticsearch compliance audit logs to AWS S3 in 10,000-record batches for customer Splunk ingestion.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                      Education
                    </h4>
                    <div className="bg-[#12121c] p-3 rounded-lg border border-[#1e1e2c] flex items-center justify-between text-xs">
                      <div>
                        <span className="font-semibold text-white">Silver Oak University</span>
                        <span className="text-zinc-400"> — B.Tech Computer Science</span>
                      </div>
                      <span className="font-mono text-zinc-400">Class of 2022</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#20202c]">
              <span className="text-xs font-mono text-zinc-400">
                File: NeelShah_CV.pdf
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.socials.resumeUrl}
                  download="NeelShah_CV.pdf"
                  onClick={() => trackCVDownload('modal', 'NeelShah_CV.pdf')}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-[0_0_12px_rgba(59,130,246,0.3)] flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.socials.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-xs font-mono text-zinc-300 hover:text-white bg-[#14141e] border border-[#242432] rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>Open Tab</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-mono text-zinc-400 hover:text-white border border-[#252532] rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
