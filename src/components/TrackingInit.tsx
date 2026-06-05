"use client";

import { useEffect } from "react";
import { trackEvent, trackPageView, setClarity } from "@/hooks/useTracking";

// Mapeia section id → label legível (usado no page_view e pushState)
const SECTION_LABELS: Record<string, string> = {
  home:      "Home",
  about:     "Chronology",
  portfolio: "Portfolio Projects",
  tools:     "Tools & Platforms",
  loom:      "See me on Loom",
  contact:   "Contact",
};

export default function TrackingInit() {
  useEffect(() => {
    // ── 1. UTM capture — lê params da URL e envia para GA4 + Clarity ──
    const params = new URLSearchParams(window.location.search);
    const utmSource   = params.get("utm_source");
    const utmMedium   = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");
    if (utmSource) {
      trackEvent("utm_entry", {
        event_category: "acquisition",
        event_label: utmSource,
        ...(utmMedium   ? { utm_medium:   utmMedium }   : {}),
        ...(utmCampaign ? { utm_campaign: utmCampaign } : {}),
      });
      setClarity("utm_source",   utmSource);
      if (utmMedium)   setClarity("utm_medium",   utmMedium);
      if (utmCampaign) setClarity("utm_campaign", utmCampaign);
    }

    // ── 2. Click tracking via data-track-event ──
    const handleClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-track-event]");
      if (!el) return;
      const eventName = el.getAttribute("data-track-event") ?? "";
      const category  = el.getAttribute("data-track-category") ?? "engagement";
      const label     = el.getAttribute("data-track-label") ?? "";
      if (eventName) trackEvent(eventName, { event_category: category, event_label: label });
    };
    document.addEventListener("click", handleClick, { capture: true });

    // ── 3. Section view + tempo por seção ──
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const seen      = new Set<string>();
    const entryTime: Record<string, number> = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          const id = (target as HTMLElement).id;
          if (!id) return;
          if (isIntersecting) {
            entryTime[id] = Date.now();
            if (!seen.has(id)) {
              seen.add(id);
              const label = SECTION_LABELS[id] ?? id;
              history.pushState(null, "", `#${id}`);
              trackPageView(`#${id}`, label);
              trackEvent("section_view", { event_category: "navigation", event_label: id });
            }
          } else if (entryTime[id]) {
            const seconds = Math.round((Date.now() - entryTime[id]) / 1000);
            if (seconds >= 2) {
              trackEvent("section_time", {
                event_category: "engagement",
                event_label: id,
                value: String(seconds),
              });
            }
            delete entryTime[id];
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));

    // ── 4. Clarity tags base ──
    setClarity("visitor_type", "portfolio");
    setClarity("page_lang",    "en");

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      observer.disconnect();
    };
  }, []);

  return null;
}
