"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ZoomIn } from "lucide-react";
import { useState } from "react";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const aspectClasses = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

export function GalleryShowcase({ hideHeading = false }: { hideHeading?: boolean }) {
  const [selected, setSelected] = useState<(typeof GALLERY_IMAGES)[0] | null>(null);

  return (
    <section id="gallery" className="bg-white py-20 dark:bg-slate-950 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView>
          {!hideHeading && (
            <SectionHeading
              eyebrow="Gallery"
              title="Moments at BOLEXMAN"
              description="Explore our campus, classrooms, events, and the vibrant life of our school community."
            />
          )}
        </FadeInView>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY_IMAGES.map((image, i) => (
            <FadeInView
              key={image.id}
              delay={i * 0.05}
              className={cn(
                "group relative h-full min-h-[200px] cursor-pointer overflow-hidden rounded-2xl",
                aspectClasses[image.aspect]
              )}
            >
              <button
                className="relative h-full w-full"
                onClick={() => setSelected(image)}
                aria-label={`View ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-all duration-300 group-hover:bg-primary/40">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </button>
            </FadeInView>
          ))}
        </div>
      </div>

      <Dialog.Root open={!!selected} onOpenChange={() => setSelected(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 p-4">
            <Dialog.Title className="sr-only">
              {selected ? selected.alt : "Gallery image preview"}
            </Dialog.Title>
            {selected && (
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
                <Dialog.Close className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white">
                  <X className="h-5 w-5" />
                </Dialog.Close>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="font-heading text-xl font-bold text-white">{selected.alt}</p>
                  <p className="text-sm text-white/70">{selected.category}</p>
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
