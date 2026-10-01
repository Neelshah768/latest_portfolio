'use client';

import { useEffect, useRef, useState } from 'react';
import { useChat, type Message } from 'ai/react';
import { MessageSquare, X, Send, Terminal, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [clientError, setClientError] = useState<string | null>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, append, error } = useChat({
    api: '/api/chat',
    onError: (err) => {
      console.warn('Chat interaction error:', err);
      setClientError('Direct AI connection unavailable. Using grounded knowledge base fallback.');
    },
    onResponse: () => {
      setClientError(null);
    },
  });

  const listRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    'Tell me about the 73Strings architecture',
    'How did Neel reduce API response times by 50%?',
    'What identity and SCIM protocols does Neel build?',
    'How can I get in touch with Neel?',
  ];

  // Auto scroll to the latest message
  useEffect(() => {
    if (!open) return;
    const el = bottomRef.current;
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages.length, open, isLoading]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative h-12 w-12 rounded-full bg-[#121218] border border-[#272736] text-white flex items-center justify-center shadow-2xl hover:border-blue-500/60 transition-all group"
            onClick={() => setOpen(true)}
            aria-label="Open engineering AI assistant"
          >
            <MessageSquare size={18} className="text-blue-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#070709]" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.2 }}
            className="w-[92vw] max-w-md h-[72vh] max-h-[580px] bg-[#0c0c12] border border-[#242432] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#1f1f2c] bg-[#101018]">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#181824] border border-[#2a2a3a] text-blue-400">
                  <Terminal size={14} />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <span>Neel&apos;s Engineering Assistant</span>
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Trained on Verified CV KB</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-[#1c1c28] transition-colors"
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-xs">
              {messages.length === 0 && (
                <div className="text-left space-y-2">
                  <div className="inline-block p-3.5 rounded-xl bg-[#13131c] border border-[#20202e] text-zinc-300 leading-relaxed max-w-[90%]">
                    <p className="font-medium text-white mb-1">
                      Hello. I am Neel Shah&apos;s engineering portfolio assistant.
                    </p>
                    <p className="text-zinc-400 text-[11px]">
                      Ask about his backend architecture, distributed systems experience on 73Strings, SCIM/IAM implementations, AI customer support workflow, or API optimizations.
                    </p>
                  </div>
                </div>
              )}

              {messages.map((m: Message) => (
                <div
                  key={m.id}
                  className={m.role === 'user' ? 'text-right' : 'text-left'}
                >
                  <div
                    className={`inline-block p-3 rounded-xl text-xs max-w-[85%] leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-blue-600 text-white font-medium'
                        : 'bg-[#14141e] border border-[#222230] text-zinc-200 whitespace-pre-line'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="text-left">
                  <div className="inline-block px-3 py-2 rounded-lg bg-[#14141e] border border-[#22222e] text-zinc-400 font-mono text-[10px] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span>Consulting knowledge base...</span>
                  </div>
                </div>
              )}

              {clientError && (
                <div className="text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-300 font-mono text-[10px]">
                    <AlertCircle size={12} className="shrink-0" />
                    <span>{clientError}</span>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 0 && (
              <div className="px-4 py-3 border-t border-[#1a1a26] bg-[#0e0e16]">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Suggested Questions:
                </div>
                <div className="flex flex-col gap-1.5">
                  {suggestions.map((q) => (
                    <button
                      key={q}
                      type="button"
                      disabled={isLoading}
                      onClick={() => {
                        setClientError(null);
                        append({ role: 'user', content: q });
                      }}
                      className="text-left text-[11px] font-mono px-2.5 py-1.5 rounded bg-[#13131c] border border-[#20202e] hover:border-blue-500/50 hover:text-white text-zinc-300 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                setClientError(null);
                handleSubmit(e);
              }}
              className="p-3 border-t border-[#1f1f2c] flex items-center gap-2 bg-[#0d0d14]"
            >
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about backend systems or experience..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 text-xs bg-[#14141e] border border-[#252536] rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50 transition-colors"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
