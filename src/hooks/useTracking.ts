"use client";

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, string>,
    ) => void;
    clarity?: (command: string, ...args: string[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string>,
): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", eventName, params);
  window.clarity?.("event", eventName);
}

export function trackPageView(hash: string, sectionLabel: string): void {
  if (typeof window === "undefined") return;
  const path = window.location.pathname + hash;
  const title = `${sectionLabel} · Wesley Gomes da Silva`;
  window.gtag?.("event", "page_view", {
    page_title:    title,
    page_path:     path,
    page_location: window.location.origin + path,
  });
  window.clarity?.("event", "page_view");
  window.clarity?.("set", "section", sectionLabel);
}

export function setClarity(key: string, value: string): void {
  if (typeof window === "undefined") return;
  window.clarity?.("set", key, value);
}
