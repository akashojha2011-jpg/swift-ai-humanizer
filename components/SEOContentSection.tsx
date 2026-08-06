"use client";

import { CheckCircle2, Zap, Shield, FileCheck, Layers } from "lucide-react";

export function SEOContentSection() {
  return (
    <section className="py-12 border-t border-slate-200/80 dark:border-slate-800 space-y-12 font-sans">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          The Next-Generation AI Text Humanizer
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Swift AI Humanizer turns raw ChatGPT, Claude, and Gemini text into natural human writing while keeping your original formatting, headers, and bullet points intact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-7 rounded-3xl space-y-3 shadow-float transition-colors">
          <div className="w-10 h-10 rounded-2xl bg-brand-50 dark:bg-emerald-950/90 border border-brand-200 dark:border-emerald-800 flex items-center justify-center text-brand-600 dark:text-emerald-400">
            <FileCheck className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Preserves All Formatting</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Unlike basic tools that strip line breaks and lists into plain text, Swift AI preserves every single bullet point, bold phrase, numbered list, and subheader.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-7 rounded-3xl space-y-3 shadow-float transition-colors">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/90 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Turnitin & GPTZero Bypasser</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Eliminates formal AI buzzwords, introduces natural contractions, and adjusts sentence burstiness so your content passes Turnitin 2026 and GPTZero with 98%+ human confidence.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-7 rounded-3xl space-y-3 shadow-float transition-colors">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/90 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Rich Text Clipboard Support</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Click 'Copy Formatted' to copy fully styled HTML straight to your clipboard, allowing direct pasting into Google Docs, Microsoft Word, Notion, and Gmail.
          </p>
        </div>
      </div>
    </section>
  );
}
