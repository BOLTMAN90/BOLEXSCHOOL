"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { useState } from "react";

export function AIAssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div className="fixed bottom-6 left-6 z-50 hidden md:block">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 overflow-hidden rounded-2xl border border-white/20 bg-white/90 shadow-2xl backdrop-blur-xl dark:bg-slate-900/90"
          >
            <div className="flex items-center justify-between bg-gradient-to-r from-primary to-secondary px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold">BOLEXMAN AI</p>
                  <p className="text-xs text-white/80">Ask about admissions & programs</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close AI assistant">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="h-48 space-y-3 overflow-y-auto p-4">
              <div className="flex gap-2">
                <Bot className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                <div className="rounded-xl bg-slate-100 p-3 text-sm dark:bg-slate-800">
                  Hi! I can help you learn about BOLEXMAN programs, admissions, and campus
                  life. What would you like to know?
                </div>
              </div>
            </div>
            <div className="flex gap-2 border-t border-slate-200 p-3 dark:border-slate-700">
              <input
                type="text"
                placeholder="Ask a question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 rounded-full bg-slate-100 px-4 py-2 text-sm outline-none dark:bg-slate-800"
              />
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-primary"
                aria-label="Send question"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
        aria-label="Open AI assistant"
      >
        <Sparkles className="h-4 w-4 text-accent" />
        Ask BOLEXMAN AI
      </button>
    </div>
  );
}
