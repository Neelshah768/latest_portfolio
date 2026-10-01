'use client';

import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="relative z-10 py-16 border-t border-[#1c1c24] bg-[#070709] text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#181820]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-sm font-bold text-white tracking-wider">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-zinc-600">/</span>
              <span className="text-xs font-mono text-zinc-400">
                {PORTFOLIO_DATA.personal.location}
              </span>
            </div>
            <p className="text-xs font-mono text-zinc-400">
              {PORTFOLIO_DATA.personal.role}
            </p>
            <p className="text-[11px] font-mono text-zinc-400 mt-1">
              Java · Spring Boot · Microservices · IAM · SCIM · Distributed Systems
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={PORTFOLIO_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.socials.email}`}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href={PORTFOLIO_DATA.socials.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] font-mono text-zinc-400">
          <div>
            © 2026 {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>
          <div>
            Built with systems thinking, zero buzzwords &amp; measured throughput. 
          </div>
        </div>
      </div>
    </footer>
  );
}
