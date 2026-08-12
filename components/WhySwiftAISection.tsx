"use client";

import { useState } from "react";
import Link from "next/link";


export interface GaugeChartProps {
  score?: number;
  label?: string;
}

export function GaugeChart({ score = 0, label = "AI GPT*" }: GaugeChartProps) {
  const clampedScore = Math.min(100, Math.max(0, score));
  // Arc length for r=38 semi-circle
  const arcLength = 119.38;
  const strokeDashoffset = (arcLength * clampedScore) / 100;

  return (
    <div className="flex flex-col items-center justify-center relative my-2">
      <div className="relative w-48 h-24 flex items-end justify-center">
        <svg className="w-48 h-28 overflow-visible" viewBox="0 0 100 55">
          {/* Background Track Arc */}
          <path
            d="M 12 50 A 38 38 0 0 1 88 50"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="8"
            strokeLinecap="round"
            className="dark:stroke-slate-800"
          />
          {/* Active Score Green Fill Arc */}
          <path
            d="M 12 50 A 38 38 0 0 1 88 50"
            fill="none"
            stroke="#10B981"
            strokeWidth="8"
            strokeDasharray={arcLength}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
          />
        </svg>

        {/* Centered Readout Label inside semi-circle */}
        <div className="absolute bottom-0 inset-x-0 text-center flex flex-col items-center justify-end pb-1">
          <span className="font-heading font-extrabold text-3xl text-slate-900 dark:text-white leading-none tracking-tight">
            {score}%
          </span>
          <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

export function WhySwiftAISection() {
  const [aiScore] = useState<number>(0);
  const [characterCount] = useState<number>(648);
  const [wordCount] = useState<number>(114);

  return (
    <section className="relative my-16 font-sans">
      {/* Soft Pastel Gradient Background Container */}
      <div className="bg-gradient-to-br from-emerald-100/70 via-amber-100/60 via-orange-100/40 to-rose-100/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-10 lg:p-14 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xl relative overflow-hidden">
        
        {/* Soft Ambient Radial Blur Element */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-200/40 dark:bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight leading-snug">
              What Makes Swift AI Humanizer the Industry Leader in AI Text Conversion?
            </h2>

            <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base leading-relaxed">
              We built Swift AI Humanizer with a simple philosophy: content should read naturally, flow effortlessly, and preserve its original meaning.
            </p>

            <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              Unlike basic rewriter tools that randomly swap words for bizarre synonyms, mangle grammar, or ruin your document&apos;s layout, Swift AI uses advanced natural language syntax rebalancing. Our engine specifically targets and neutralizes subtle AI hallmarks, such as uniform sentence rhythm, cliché transitions, and robotic vocabulary density, delivering clean, publication-ready text that feels genuinely human.
            </p>

            <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              <strong className="text-slate-900 dark:text-white font-bold">The Truth About AI Detection:</strong> We believe in total transparency. AI detectors update their algorithms constantly, and no tool on the market can guarantee a permanent 100% human score on every single classifier. That&apos;s why our primary objective is superior writing quality: crafting text that sounds authentic, engages your readers, and easily passes major detection checkers without resorting to artificial errors or awkward phrasing.
            </p>

            {/* Site Theme CTA Button: Humanize AI text */}
            <div className="pt-2">
              <Link
                href="#humanizer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>Humanize AI text</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Live Demo Card */}
          <div className="lg:col-span-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 space-y-6">
              
              <h3 className="text-center font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight">
                Your Text is Human written
              </h3>

              {/* Dynamic Fixed Arc Semi-Circle Gauge Component */}
              <GaugeChart score={aiScore} label="AI GPT*" />

              {/* Sub-headline & Marketing Explanation Copy */}
              <div className="space-y-3 text-center sm:text-left">
                <p className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  100% Free AI Text Humanization • Zero Ads, Unlimited Access
                </p>

                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  Transform stiff ChatGPT, Claude, or Gemini drafts into natural, human-sounding prose in seconds. Swift AI Humanizer restructures syntax, adjusts sentence cadence, and cleans up robotic phrasing while keeping all your original headings, lists, and bold text perfectly intact. Validated against leading AI checkers including Turnitin, GPTZero, Copyleaks, and Grammarly (completely free, forever).
                </p>
              </div>

              {/* Footer Notice */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                  <span className="w-3.5 h-3.5 bg-yellow-400 rounded-xs shrink-0" />
                  <span>Highlighted text is suspected to be most likely generated by AI*</span>
                </div>
              </div>

              {/* Stats Line */}
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 space-y-0.5 pt-1">
                <p>{characterCount} Characters</p>
                <p>{wordCount} Words</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
