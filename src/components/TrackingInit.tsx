"use client";

import { useEffect } from "react";
import { trackEvent } from "@/hooks/useTracking";

export default function TrackingInit() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-track-event]");
      if (!el) return;
      const eventName = el.getAttribute("data-track-event") ?? "";
      const category = el.getAttribute("data-track-category") ?? "engagement";
      const label = el.getAttribute("data-track-label") ?? "";
      if (eventName) trackEvent(eventName, { event_category: category, event_label: label });
    };
    document.addEventListener("click", handleClick, { capture: true });

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          const id = (target as HTMLElement).id;
          if (isIntersecting && id && !seen.has(id)) {
            seen.add(id);
            trackEvent("section_view", { event_category: "navigation", event_label: id });
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => observer.observe(s));

    if (typeof window !== "undefined" && typeof window.clarity === "function") {
      window.clarity("set", "visitor_type", "portfolio");
      window.clarity("set", "page_lang", "en");
    }

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      observer.disconnect();
    };
  }, []);

  return null;
}
