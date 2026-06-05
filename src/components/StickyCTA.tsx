"use client";

import { useState, useEffect, useCallback } from "react";
import { trackEvent } from "@/hooks/useTracking";

const DISMISS_KEY = "sticky_cta_dismissed";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 8000);
    const handleScroll = () => {
      const scrolled =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight || 1);
      if (scrolled > 0.3) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => { clearTimeout(timer); window.removeEventListener("scroll", handleScroll); };
  }, []);

  const dismiss = useCallback(() => {
    localStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="complementary"
      aria-label="Quick contact bar"
      className="fixed bottom-0 left-0 right-0 z-[200] flex items-center justify-center gap-3 px-4 py-3 bg-[#0A2540]/95 backdrop-blur-md border-t border-[#415A77]"
    >
      <a
        href="/WesleySilva_Latam_AgileProjectDelivery_BR_C1English.docx"
        download
        data-track-event="cv_download"
        data-track-category="lead"
        data-track-label="sticky_cta"
        onClick={dismiss}
        className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2 bg-[#4CC9F0] hover:bg-[#4CC9F0]/80 text-[#0D1B2A] font-bold rounded-full text-sm transition-colors shadow-lg"
      >
        ⬇ Download CV
      </a>

      <a
        href="mailto:wesley.zilva@gmail.com?subject=Interview%20Request%20%E2%80%94%20Wesley%20Zilva"
        data-track-event="schedule_call"
        data-track-category="lead"
        data-track-label="sticky_cta"
        onClick={() => { trackEvent("schedule_call", { event_category: "lead", event_label: "sticky_cta" }); dismiss(); }}
        className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2 border border-[#4CC9F0] text-[#4CC9F0] hover:bg-[#4CC9F0]/10 font-bold rounded-full text-sm transition-colors"
      >
        📅 Schedule a Call
      </a>

      <button
        onClick={dismiss}
        aria-label="Dismiss"
        className="ml-1 text-[#E0E1DD]/40 hover:text-[#E0E1DD] text-xl leading-none"
      >
        ✕
      </button>
    </div>
  );
}
