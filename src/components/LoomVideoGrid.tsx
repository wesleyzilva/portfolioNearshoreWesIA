"use client";

import { useEffect, useState } from "react";

const VIDEOS = [
  {
    id: "ce4ac8e75f2241a9b79c050b6a62719b",
    title: "About Me · Pitch",
    subtitle: "Who I am, how I work",
  },
  {
    id: "d0ecb82a63f846e8976f5a69a0993b8d",
    title: "Projects · Last 2 Years",
    subtitle: "Real deliveries, real results",
  },
  {
    id: "d8a765fd73fa4f73a35ba44609f621df",
    title: "My Work Style",
    subtitle: "Leadership & async delivery",
  },
];

export default function LoomVideoGrid() {
  const [active, setActive] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* ── VIDEO THUMBNAIL GRID ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {VIDEOS.map((v) => (
          <button
            key={v.id}
            onClick={() => setActive(v.id)}
            aria-label={`Play video: ${v.title}`}
            className="group relative flex flex-col rounded-2xl overflow-hidden border border-[#415A77]/50 hover:border-[#4CC9F0]/70 bg-[#0D1B2A] transition-all duration-200 hover:shadow-[0_0_24px_rgba(76,201,240,0.12)] text-left cursor-pointer"
          >
            {/* Thumbnail wrapper — 16:9 */}
            <div className="relative w-full aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.loom.com/sessions/thumbnails/${v.id}-with-play.gif`}
                alt={v.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-200" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#4CC9F0] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 opacity-90 group-hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#0D1B2A"
                    className="w-6 h-6 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card footer */}
            <div className="px-4 py-3">
              <p className="text-white font-semibold text-sm leading-tight">{v.title}</p>
              <p className="text-[#4CC9F0]/60 text-xs mt-0.5">{v.subtitle}</p>
            </div>
          </button>
        ))}
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setActive(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="absolute -top-10 right-0 flex items-center gap-1.5 text-[#E0E1DD]/70 hover:text-[#4CC9F0] text-sm font-semibold transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12 5.7 16.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z" />
              </svg>
              Close
            </button>

            {/* iFrame — 16:9 */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.loom.com/embed/${active}?autoplay=1`}
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen"
                title="Loom video"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
