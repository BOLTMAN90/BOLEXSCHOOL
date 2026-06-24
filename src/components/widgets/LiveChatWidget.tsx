"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function LiveChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-80 overflow-hidden rounded-2xl border border-white/20 bg-white/90 shadow-2xl backdrop-blur-xl dark:bg-slate-900/90"
          >
            <div className="flex items-center justify-between bg-secondary px-4 py-3 text-white">
              <div>
                <p className="font-semibold">Live Support</p>
                <p className="text-xs text-white/80">We typically reply in minutes</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="h-48 space-y-3 overflow-y-auto p-4">
              <div className="rounded-xl bg-slate-100 p-3 text-sm dark:bg-slate-800">
                Hello! Welcome to BOLEXMAN. How can we help you today?
              </div>
            </div>
            <div className="flex gap-2 border-t border-slate-200 p-3 dark:border-slate-700">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 rounded-full bg-slate-100 px-4 py-2 text-sm outline-none dark:bg-slate-800"
              />
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-white"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-lg shadow-secondary/30 transition-transform hover:scale-105"
        )}
        aria-label="Open live chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
