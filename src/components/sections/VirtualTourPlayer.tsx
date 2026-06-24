"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { VIRTUAL_TOUR_CHAPTERS } from "@/lib/constants";

interface VirtualTourPlayerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function getChapterAtTime(time: number) {
  let accumulated = 0;

  for (let index = 0; index < VIRTUAL_TOUR_CHAPTERS.length; index += 1) {
    const chapter = VIRTUAL_TOUR_CHAPTERS[index];
    if (time < accumulated + chapter.duration) {
      return {
        chapterIndex: index,
        chapter,
        elapsed: time - accumulated,
      };
    }
    accumulated += chapter.duration;
  }

  const lastChapter = VIRTUAL_TOUR_CHAPTERS[VIRTUAL_TOUR_CHAPTERS.length - 1];
  return {
    chapterIndex: VIRTUAL_TOUR_CHAPTERS.length - 1,
    chapter: lastChapter,
    elapsed: lastChapter.duration,
  };
}

export function VirtualTourPlayer({ open, onOpenChange }: VirtualTourPlayerProps) {
  const [globalTime, setGlobalTime] = useState(0);

  const totalDuration = useMemo(
    () => VIRTUAL_TOUR_CHAPTERS.reduce((sum, chapter) => sum + chapter.duration, 0),
    []
  );

  const { chapterIndex, chapter } = useMemo(
    () => getChapterAtTime(globalTime),
    [globalTime]
  );

  useEffect(() => {
    if (!open) {
      setGlobalTime(0);
      return;
    }

    const timer = window.setInterval(() => {
      setGlobalTime((current) => {
        const next = current + 0.1;
        return next >= totalDuration ? 0 : next;
      });
    }, 100);

    return () => window.clearInterval(timer);
  }, [open, totalDuration]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex max-h-[95vh] w-[min(100vw-2rem,960px)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl bg-slate-950 shadow-2xl">
          <Dialog.Title className="sr-only">BOLEXMAN virtual campus tour</Dialog.Title>
          <Dialog.Description className="sr-only">
            Guided automatic tour of BOLEXMAN International Academy
          </Dialog.Description>

          <div className="relative aspect-video w-full overflow-hidden bg-black">
            <AnimatePresence mode="sync">
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1.12 }}
                exit={{ opacity: 0 }}
                transition={{ duration: chapter.duration, ease: "linear" }}
                className="absolute inset-0"
              >
                <Image
                  src={chapter.image}
                  alt={chapter.title}
                  fill
                  className="object-cover"
                  sizes="960px"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40" />

            <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm">
              Chapter {chapterIndex + 1} of {VIRTUAL_TOUR_CHAPTERS.length}
            </div>

            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
              aria-label="Close virtual tour"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <h3 className="text-xl font-bold text-white sm:text-2xl">{chapter.title}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">
                {chapter.narration}
              </p>
            </div>
          </div>

          <div className="space-y-2 bg-slate-950 p-4 sm:p-5">
            <div
              aria-hidden
              className="relative h-2 overflow-hidden rounded-full bg-white/15"
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-secondary transition-[width] duration-100 ease-linear"
                style={{ width: `${(globalTime / totalDuration) * 100}%` }}
              />
            </div>

            <div className="flex items-center justify-between gap-3 text-xs text-white/60">
              <span>
                {formatTime(globalTime)} / {formatTime(totalDuration)}
              </span>
              <span>{chapter.title}</span>
              <span className="text-white/40">Playing automatically</span>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
