'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Copy, Check, MapPin, ArrowUpRight, AlertCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      subject: String(formData.get('opportunity') || 'General Inquiry'),
      message: String(formData.get('message') || '').trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatusMessage({ text: 'Please fill in all required fields.', type: 'error' });
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setStatusMessage({
          text: 'Thank you! Your message has been received. I will reply to you shortly.',
          type: 'success',
        });
        form.reset();
      } else {
        // Fallback to mailto link
        const mailtoUrl = `mailto:${PORTFOLIO_DATA.socials.email}?subject=${encodeURIComponent(
          `[${payload.subject}] from ${payload.name}`
        )}&body=${encodeURIComponent(payload.message + `\n\nFrom: ${payload.name} (${payload.email})`)}`;

        setStatusMessage({
          text: 'Server dispatch offline. Click to launch your mail client directly.',
          type: 'info',
        });
        window.open(mailtoUrl, '_blank');
      }
    } catch {
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.socials.email}?subject=${encodeURIComponent(
        `[${payload.subject}] from ${payload.name}`
      )}&body=${encodeURIComponent(payload.message + `\n\nFrom: ${payload.name} (${payload.email})`)}`;

      setStatusMessage({
        text: 'Connection unavailable. Opening your default mail client...',
        type: 'info',
      });
      window.open(mailtoUrl, '_blank');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Collaboration"
      className="relative z-10 py-24 sm:py-32 border-b border-[#1c1c24] bg-[#070709]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-blue-400 font-medium">09 //</span>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              COMMUNICATION CHANNEL
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            {PORTFOLIO_DATA.contact.heading}
          </h2>
          <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed">
            {PORTFOLIO_DATA.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0b0b10] border border-[#202028] rounded-xl p-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                Direct Channels
              </span>

              {/* Email with copy button */}
              <div className="p-3 bg-[#111118] border border-[#20202a] rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <a
                    href={`mailto:${PORTFOLIO_DATA.socials.email}`}
                    className="text-xs font-mono text-zinc-300 hover:text-white truncate"
                  >
                    {PORTFOLIO_DATA.socials.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 text-zinc-400 hover:text-white hover:bg-[#181822] rounded transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={PORTFOLIO_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#111118] border border-[#20202a] hover:border-zinc-500 rounded-lg flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono text-zinc-300 group-hover:text-white">
                    linkedin.com/in/neel-shah-215099192
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
              </a>

              {/* GitHub */}
              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#111118] border border-[#20202a] hover:border-zinc-500 rounded-lg flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-zinc-300" />
                  <span className="text-xs font-mono text-zinc-300 group-hover:text-white">
                    github.com/Neelshah768
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
              </a>

              {/* Location */}
              <div className="p-3 bg-[#111118] border border-[#20202a] rounded-lg flex items-center gap-2.5 text-xs font-mono text-zinc-400">
                <MapPin className="w-4 h-4 text-zinc-400" />
                <span>Ahmedabad, Gujarat, India (UTC +5:30)</span>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-[#0b0b10] border border-[#202028] rounded-xl p-5 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <span className="text-xs font-bold text-white block">
                  Status: Available for Opportunities
                </span>
                <span className="text-[11px] text-zinc-400">
                  Open to full-time backend roles, distributed systems contracts, and architectural consulting.
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#0b0b10] border border-[#202028] rounded-xl p-6 sm:p-8 space-y-4"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Chen"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#111118] border border-[#22222e] rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#111118] border border-[#22222e] rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Opportunity Type */}
              <div>
                <label htmlFor="contact-opp" className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Opportunity Type
                </label>
                <select
                  id="contact-opp"
                  name="opportunity"
                  defaultValue={PORTFOLIO_DATA.contact.opportunityTypes[0]}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#111118] border border-[#22222e] rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                >
                  {PORTFOLIO_DATA.contact.opportunityTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Project or Role Details *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Outline the scope, tech stack, or engineering position..."
                  className="w-full px-3.5 py-2.5 text-xs bg-[#111118] border border-[#22222e] rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition-colors resize-y"
                />
              </div>

              {/* Feedback Message */}
              {statusMessage && (
                <div
                  className={`p-3 rounded-lg text-xs font-mono flex items-center gap-2 ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
                      : statusMessage.type === 'error'
                      ? 'bg-red-950/60 border border-red-500/40 text-red-300'
                      : 'bg-blue-950/60 border border-blue-500/40 text-blue-300'
                  }`}
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{statusMessage.text}</span>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-lg transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{submitting ? 'DISPATCHING...' : 'SEND MESSAGE'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
