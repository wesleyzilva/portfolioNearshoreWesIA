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

export function setClarity(key: string, value: string): void {
  if (typeof window === "undefined") return;
  window.clarity?.("set", key, value);
}
