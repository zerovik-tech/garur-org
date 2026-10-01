"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ImageItem = { src: string; w: number; h: number };

export default function GalleryGrid({ images }: { images: ImageItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (openIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") setOpenIdx((i) => (i === null ? null : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setOpenIdx((i) => (i === null ? null : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openIdx, images.length]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = openIdx !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIdx]);

  const current = openIdx !== null ? images[openIdx] : null;

  return (
    <>
      {/* Masonry-style responsive grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [column-fill:_balance]">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIdx(i)}
            className="group relative mb-3 sm:mb-4 block w-full overflow-hidden rounded-xl border border-black/5 bg-neutral-100 break-inside-avoid focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
            aria-label={`Open photo ${i + 1} of ${images.length}`}
          >
            <Image
              src={img.src}
              alt={`Garur Civil Society — photo ${i + 1}`}
              width={img.w}
              height={img.h}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 pointer-events-none" />
          </button>
        ))}
      </div>

      {/* LIGHTBOX */}
      {current && openIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setOpenIdx(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${openIdx + 1} of ${images.length}`}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIdx(null);
            }}
            className="absolute top-3 right-3 sm:top-5 sm:right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIdx((i) => (i === null ? null : (i - 1 + images.length) % images.length));
            }}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl sm:text-2xl flex items-center justify-center transition-colors"
            aria-label="Previous photo"
          >
            ‹
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIdx((i) => (i === null ? null : (i + 1) % images.length));
            }}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl sm:text-2xl flex items-center justify-center transition-colors"
            aria-label="Next photo"
          >
            ›
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={`Garur Civil Society — photo ${openIdx + 1}`}
              width={current.w}
              height={current.h}
              sizes="90vw"
              className="max-w-full max-h-[85vh] w-auto h-auto rounded-lg object-contain"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium tabular-nums">
            {openIdx + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
