'use client';

import { useState } from 'react';
import { Download, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import ResumeModal from './ResumeModal';

export default function ResumeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      aria-label="Resume and Credentials CTA"
      className="relative z-10 py-20 border-b border-[#1c1c24] bg-[#09090e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0e0e14] border border-[#22222c] rounded-2xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-blue-400 font-medium">08 //</span>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                COMPLETE CREDENTIALS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              WANT THE FULL STORY?
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Download the official CV or preview my complete experience, technical skills and project history directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Direct Download Button */}
            <a
              href={PORTFOLIO_DATA.socials.resumeUrl}
              download="NeelShah_CV.pdf"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD CV</span>
            </a>

            {/* Modal Preview Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2.5 text-xs font-mono text-zinc-300 hover:text-white border border-[#252530] hover:border-zinc-500 rounded-lg transition-colors flex items-center gap-1.5 bg-[#121218]"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>PREVIEW CREDENTIALS</span>
            </button>

            <a
              href={PORTFOLIO_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 text-xs font-mono text-zinc-300 hover:text-white border border-[#252530] hover:border-zinc-500 rounded-lg transition-colors flex items-center gap-1.5 bg-[#121218]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>

            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 text-xs font-mono text-zinc-300 hover:text-white border border-[#252530] hover:border-zinc-500 rounded-lg transition-colors flex items-center gap-1.5 bg-[#121218]"
              aria-label="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </a>
          </div>
        </div>
      </div>

      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
