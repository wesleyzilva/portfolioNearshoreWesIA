"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { trackEvent, trackPageView } from "@/hooks/useTracking";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Chronology", href: "#about" },
  { label: "Portfolio Projects", href: "#portfolio" },
  { label: "Tools & Platforms", href: "#tools" },
  { label: "See me on Loom", href: "#loom" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSidebar();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeSidebar]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleMenuItemClick = (label: string, href: string) => {
    trackEvent("menu_click", { event_category: "navigation", event_label: label });
    history.pushState(null, "", href);
    trackPageView(href, label);
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    closeSidebar();
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="sidebar-nav"
        className="fixed top-4 left-4 z-50 flex flex-col justify-center items-center w-11 h-11 gap-1.5 rounded-md bg-[#0A2540] text-white shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A2540]"
      >
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-6 h-0.5 bg-white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black"
            onClick={closeSidebar}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="sidebar-nav"
            key="sidebar"
            role="navigation"
            aria-label="Main navigation"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 z-50 h-full w-[70vw] max-w-xs bg-[#0A2540] shadow-2xl flex flex-col pt-6 pb-10"
          >
            <div className="flex justify-end px-5 mb-8">
              <button
                onClick={closeSidebar}
                aria-label="Close navigation menu"
                className="text-white w-10 h-10 flex items-center justify-center rounded-md text-2xl font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                ✕
              </button>
            </div>

            <ul className="flex flex-col gap-1 px-6">
              {menuItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleMenuItemClick(label, href); }}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleMenuItemClick(label, href); } }}
                    className="block w-full py-4 px-3 text-white text-xl font-bold rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
