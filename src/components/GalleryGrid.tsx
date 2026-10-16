'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages, unsplash } from '@/lib/data';

/**
 * Editorial masonry (CSS columns) with captions, plus a keyboard-accessible
 * lightbox: Escape closes, arrows move through the set.
 */
export default function GalleryGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenIndex((i) =>
        i === null ? i : (i + dir + galleryImages.length) % galleryImages.length
      ),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    // Lock background scroll while the lightbox is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [openIndex, close, step]);

  const active = openIndex === null ? null : galleryImages[openIndex];

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {galleryImages.map((img, i) => (
          <figure key={img.id} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Open image: ${img.alt}`}
              className="group relative block w-full overflow-hidden rounded-card border border-line bg-parchment text-left"
            >
              <Image
                src={unsplash(img.id, 900, 72)}
                alt={img.alt}
                width={900}
                height={img.tall ? 1200 : 680}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.02]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            <figcaption className="mt-2 px-0.5 text-xs leading-relaxed text-ink-faint">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close image"
            className="absolute right-4 top-4 p-2 text-cream/70 transition-colors hover:text-cream"
          >
            <X size={24} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-cream/70 transition-colors hover:text-cream sm:left-4"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-cream/70 transition-colors hover:text-cream sm:right-4"
          >
            <ChevronRight size={28} />
          </button>

          <figure
            className="max-h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Contain-fit at a fixed box: next/image with intrinsic size */}
            <Image
              src={unsplash(active.id, 1600, 80)}
              alt={active.alt}
              width={1600}
              height={1070}
              priority
              sizes="min(100vw - 2rem, 56rem)"
              className="mx-auto max-h-[80vh] w-auto max-w-full rounded-card object-contain"
            />
            <figcaption className="mx-auto mt-4 max-w-prose text-center text-sm text-cream/70">
              {active.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
