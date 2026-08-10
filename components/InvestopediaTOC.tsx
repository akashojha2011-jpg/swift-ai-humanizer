"use client";

import { useEffect, useState } from "react";
import { TOCItem } from "@/lib/markdown";
import { ChevronRight, List } from "lucide-react";

interface InvestopediaTOCProps {
  items: TOCItem[];
}

export function InvestopediaTOC({ items }: InvestopediaTOCProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <>
      {/* Mobile Collapsible TOC */}
      <div className="lg:hidden bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 my-6">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between text-left font-heading font-bold text-sm text-slate-900 dark:text-white"
        >
          <div className="flex items-center gap-2">
            <List className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Table of Contents</span>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            {isMobileOpen ? "Hide" : "Show"}
          </span>
        </button>

        {isMobileOpen && (
          <ul className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs font-sans">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center gap-1.5 transition-colors ${
                      isActive
                        ? "text-brand-600 dark:text-emerald-400 font-bold"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {isActive && <ChevronRight className="w-3 h-3 shrink-0" />}
                    <span>{item.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Desktop Investopedia Left Sticky Sidebar TOC */}
      <aside className="hidden lg:block w-60 shrink-0 self-start sticky top-28 space-y-3 pr-6">
        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
          Table of Contents
        </h4>

        <ul className="space-y-2 text-xs font-sans border-l border-slate-200 dark:border-slate-800/80 pl-3">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  className={`group flex items-start gap-1.5 py-0.5 leading-snug transition-all ${
                    isActive
                      ? "text-brand-600 dark:text-emerald-400 font-bold pl-1"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="text-brand-600 dark:text-emerald-400 font-bold text-[10px] select-none -ml-3">
                      ▶
                    </span>
                  )}
                  <span>{item.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
