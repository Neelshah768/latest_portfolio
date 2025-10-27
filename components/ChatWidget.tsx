'use client';

import { useEffect, useRef, useState } from 'react';
import { useChat, type Message } from 'ai/react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({ api: '/api/chat' });
  const listRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    'How many years of experience do you have?',
    'What technologies do you work with?',
    'Tell me about a notable project.',
    'How can I contact you?'
  ];

  // Auto scroll to the latest message
  useEffect(() => {
    if (!open) return;
    const el = bottomRef.current;
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages.length, open]);

  return (
    <div className="fixed bottom-6 right-6 z-[120]">
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative h-14 w-14 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow group"
            onClick={() => setOpen(true)}
            aria-label="Open chat"
          >
            {/* Pulsing ring */}
            <span className="absolute inset-0 rounded-full bg-black dark:bg-white animate-ping opacity-20" />
            
            <MessageCircle size={24} className="relative z-10" />
            
            {/* AI indicator dot */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <Sparkles size={10} className="text-white" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-[90vw] max-w-md h-[70vh] max-h-[600px] bg-white dark:bg-black border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
                    <Sparkles size={16} className="text-white dark:text-black" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-black" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Neel's AI Assistant</div>
                  <div className="text-xs text-zinc-500">Always online</div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <X size={18} />
              </motion.button>
            </div>

            {/* Messages */}
            <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Welcome message */}
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-left"
                >
                  <div className="inline-block px-4 py-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900 max-w-[85%]">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={14} className="text-blue-500" />
                      <span className="text-xs font-semibold text-zinc-500">AI Assistant</span>
                    </div>
                    <p className="text-sm leading-relaxed">
                      Hi! 👋 I'm Neel's AI assistant. Ask me anything about his experience, projects, or skills!
                    </p>
                  </div>
                </motion.div>
              )}

              {messages.map((m: Message, index) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={m.role === 'user' ? 'text-right' : 'text-left'}
                >
                  <div
                    className={`inline-block px-4 py-3 rounded-2xl text-sm max-w-[85%] leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-black text-white dark:bg-white dark:text-black rounded-tr-sm'
                        : 'bg-zinc-100 dark:bg-zinc-900 rounded-tl-sm'
                    }`}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-left"
                >
                  <div className="inline-block px-4 py-3 rounded-2xl bg-zinc-100 dark:bg-zinc-900">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-zinc-400 dark:bg-zinc-600 rounded-full"
                          animate={{ y: [-2, 2, -2] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Suggestions (only when conversation is empty) */}
            {messages.length === 0 && (
              <div className="px-4 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
                <div className="text-xs font-semibold text-zinc-500 mb-2">Suggested questions:</div>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((q) => (
                    <motion.button
                      key={q}
                      type="button"
                      disabled={isLoading}
                      onClick={() => append({ role: 'user', content: q })}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="text-xs px-3 py-2 rounded-lg bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 disabled:opacity-50 transition-colors"
                    >
                      {q}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-2 bg-white dark:bg-black">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about Neel…"
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors disabled:opacity-50"
              />
              <motion.button
                type="submit"
                disabled={isLoading || !input.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-black dark:bg-white text-white dark:text-black disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Send message"
              >
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


