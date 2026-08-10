"use client";

import { useState } from "react";
import { List, ChevronDown, ChevronUp } from "lucide-react";
import { TOCItem } from "@/lib/markdown";

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!items || items.length === 0) return null;

  return (
    <nav className="bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-2xs transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left text-slate-900 dark:text-white font-heading font-bold text-base hover:opacity-80 transition-opacity focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-700 dark:text-emerald-300 shrink-0">
            <List className="w-4 h-4" />
          </div>
          <span>Table of Contents ({items.length} sections)</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-slate-400 dark:text-slate-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-slate-400 dark:text-slate-500" />
        )}
      </button>

      {isOpen && (
        <ul className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2 text-xs sm:text-sm font-sans">
          {items.map((item) => (
            <li key={item.id} className="font-medium text-slate-700 dark:text-slate-300">
              <a
                href={`#${item.id}`}
                className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors block py-0.5"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
