"use client";

import Link from "next/link";
import { Sparkles, ShieldCheck, Search, CheckCircle2, Zap } from "lucide-react";

export function AIHumanizerOverview() {
  return (
    <section className="space-y-10 max-w-6xl mx-auto font-sans">
      {/* Master Overview Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xs space-y-8">
        
        {/* Main H2 Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Next-Generation AI Refinement</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-slate-900 dark:text-white leading-snug">
            Introducing Swift AI: Your Premier Free AI-to-Human Text Converter
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-4xl">
            Swift AI Humanizer is an advanced, free online platform designed to transform AI-generated drafts from ChatGPT, Claude, Gemini, Copilot, and QuillBot into smooth, human-sounding content. Built for writers, students, marketers, and business professionals, our converter eliminates robotic phrasing while preserving your exact meaning, subheaders, and rich text formatting.
          </p>
        </div>

        {/* Sub-block: Understanding AI Text Humanization */}
        <div className="bg-emerald-50/40 dark:bg-slate-800/40 border-l-4 border-emerald-500 dark:border-emerald-400 p-5 rounded-r-2xl space-y-2">
          <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
            Understanding AI Text Humanization
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Humanizing AI text is the art of recalibrating machine-generated drafts so they resonate naturally with human readers. Large Language Models (LLMs) tend to rely on predictable sentence lengths, flat tonal structures, and cliché transitional phrases like &quot;moreover,&quot; &quot;furthermore,&quot; and &quot;in conclusion.&quot; Swift AI rebalances syntax and vocabulary entropy, producing polished writing that feels warm, authentic, and completely human.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 p-5 rounded-2xl space-y-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Natural Rhythm</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Varies sentence lengths and injects organic human cadence so reading feels effortless.
            </p>
          </div>

          <div className="bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 p-5 rounded-2xl space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Meaning Preservation</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Keeps all original facts, core arguments, headers, and bullet formatting 100% intact.
            </p>
          </div>

          <div className="bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 p-5 rounded-2xl space-y-2">
            <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Detector Evasion</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Eliminates signature AI classifier markers to pass Turnitin, GPTZero, and Copyleaks.
            </p>
          </div>

          <div className="bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 p-5 rounded-2xl space-y-2">
            <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
              <Search className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">SEO Quality Output</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Crafts high-perplexity human writing favored by Google Search quality algorithms.
            </p>
          </div>
        </div>

        {/* Footer Link */}
        <div className="pt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
          Ready to refine your text? Paste your draft into{" "}
          <Link href="#humanizer" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
            Swift AI Humanizer above
          </Link>{" "}
          to convert it into human writing for free.
        </div>

      </div>
    </section>
  );
}
