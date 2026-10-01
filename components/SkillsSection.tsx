'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-label="Technical Skills and Stack"
      className="relative z-10 py-24 sm:py-32 border-b border-[#1c1c24] bg-[#070709]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-blue-400 font-medium">06 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              TECHNICAL PROFICIENCY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            TECHNOLOGY MATRIX
          </h2>
          <p className="text-sm text-zinc-300">
            Categorized production technologies and architectural standards proven in high-throughput environments.
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillsByCategory.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-[#0b0b10] border border-[#202028] rounded-xl p-6 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-mono font-bold text-white tracking-wider uppercase">
                    {category.title}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-400 px-1.5 py-0.5 rounded bg-[#13131c]">
                    {category.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#181822]">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[#121218] border border-[#22222d] text-zinc-300 hover:text-white hover:border-blue-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
