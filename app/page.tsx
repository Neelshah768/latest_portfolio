'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, ArrowUpRight, Terminal, CheckCircle2 } from 'lucide-react';
import dynamic from 'next/dynamic';

import TechnicalBackground from '@/components/TechnicalBackground';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import Navigation from '@/components/Navigation';
import HeroArchitectureVisual from '@/components/HeroArchitectureVisual';
import MetricStrip from '@/components/MetricStrip';
import EngineeringProfile from '@/components/EngineeringProfile';
import ExperienceSection from '@/components/ExperienceSection';
import EngineeringImpactSection from '@/components/EngineeringImpactSection';
import CaseStudy73Strings from '@/components/CaseStudy73Strings';
import CaseStudyLivcast from '@/components/CaseStudyLivcast';
import CaseStudyAiSupport from '@/components/CaseStudyAiSupport';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import EngineeringPlayground from '@/components/EngineeringPlayground';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const ChatWidget = dynamic(() => import('@/components/ChatWidget'), { ssr: false });

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <TechnicalBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />

      <main className="relative z-10">
        {/* ================================================== */}
        {/* HERO SECTION                                      */}
        {/* ================================================== */}
        <section
          id="home"
          aria-label="Introduction and summary"
          className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#1c1c24]"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Core Positioning Statement */}
              <div className="lg:col-span-7 space-y-6">
                {/* Status Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111118] border border-[#22222e] text-xs font-mono"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-zinc-300 font-medium tracking-wide">
                    {PORTFOLIO_DATA.personal.status}
                  </span>
                </motion.div>

                {/* Primary Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="space-y-2"
                >
                  <div className="text-sm font-mono uppercase tracking-widest text-zinc-400">
                    {PORTFOLIO_DATA.personal.name}
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                    Backend &amp; Distributed <br />
                    <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                      Systems Engineer.
                    </span>
                  </h1>
                </motion.div>

                {/* Concrete Supporting Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-sans"
                >
                  Building scalable backend systems, enterprise identity platforms and AI-powered business workflows using Java 21, Spring Boot 3 and modern cloud infrastructure.
                </motion.p>

                {/* Primary Technology Line */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="pt-2"
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                    Primary Production Stack:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PORTFOLIO_DATA.heroStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 text-xs font-mono font-medium rounded-md transition-colors ${
                          tech === 'AI Integration' || tech === 'Gemini API'
                            ? 'bg-[#12121e] border border-blue-500/40 text-blue-300'
                            : 'bg-[#111118] border border-[#22222e] text-zinc-300 hover:border-blue-500/50 hover:text-white'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Primary CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex flex-wrap items-center gap-3 pt-4"
                >
                  <a
                    href="#case-studies"
                    className="px-6 py-3 text-xs font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] flex items-center gap-2"
                  >
                    <span>VIEW MY WORK</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={PORTFOLIO_DATA.socials.resumeUrl}
                    download="NeelShah_CV.pdf"
                    className="px-5 py-3 text-xs font-mono font-semibold text-zinc-300 hover:text-white bg-[#121218] border border-[#262634] hover:border-zinc-500 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-blue-400" />
                    <span>DOWNLOAD CV</span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-zinc-400 hover:text-white bg-[#121218] border border-[#262634] hover:border-zinc-500 rounded-lg transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>

              {/* Right Column: Hero Architecture Visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-5 w-full"
              >
                <HeroArchitectureVisual />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* HERO METRICS / TRUST STRIP                        */}
        {/* ================================================== */}
        <MetricStrip />

        {/* ================================================== */}
        {/* 01 // ENGINEERING PROFILE                         */}
        {/* ================================================== */}
        <EngineeringProfile />

        {/* ================================================== */}
        {/* 02 // EXPERIENCE                                  */}
        {/* ================================================== */}
        <ExperienceSection />

        {/* ================================================== */}
        {/* ENGINEERING IMPACT                                 */}
        {/* ================================================== */}
        <EngineeringImpactSection />

        {/* ================================================== */}
        {/* 03 // CASE STUDIES                                */}
        {/* ================================================== */}
        <section
          id="case-studies"
          aria-label="Technical Case Studies"
          className="relative z-10 py-24 sm:py-32 border-b border-[#1c1c24] bg-[#070709]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-blue-400 font-medium">03 //</span>
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  SYSTEM CASE STUDIES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                PRODUCTION ARCHITECTURE STUDIES
              </h2>
              <p className="text-sm text-zinc-300">
                Detailed breakdowns of distributed architecture, enterprise identity federation, streaming pipelines, and AI-enabled workflows.
              </p>
            </div>

            {/* 01: 73Strings Case Study */}
            <div className="mb-16">
              <CaseStudy73Strings />
            </div>

            {/* 02: Livcast Case Study */}
            <div className="mb-16">
              <CaseStudyLivcast />
            </div>

            {/* 03: AI-Powered Customer Support Automation Case Study */}
            <div>
              <CaseStudyAiSupport />
            </div>
          </div>
        </section>

        {/* ================================================== */}
        {/* 04 // CAPABILITIES (WHAT I BUILD)                 */}
        {/* ================================================== */}
        <CapabilitiesSection />

        {/* ================================================== */}
        {/* 05 // ENGINEERING PLAYGROUND                      */}
        {/* ================================================== */}
        <EngineeringPlayground />

        {/* ================================================== */}
        {/* 06 // SKILLS / TECHNOLOGY MATRIX                  */}
        {/* ================================================== */}
        <SkillsSection />

        {/* ================================================== */}
        {/* 07 // WHAT I CAN HELP WITH                        */}
        {/* ================================================== */}
        <ServicesSection />

        {/* ================================================== */}
        {/* 08 // RESUME SECTION                              */}
        {/* ================================================== */}
        <ResumeSection />

        {/* ================================================== */}
        {/* 09 // CONTACT SECTION                             */}
        {/* ================================================== */}
        <ContactSection />
      </main>

      <Footer />
      <ChatWidget />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
