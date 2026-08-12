"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Sparkles } from "lucide-react";

export interface GaugeChartProps {
  score?: number;
  label?: string;
}

export function GaugeChart({ score = 0, label = "AI GPT*" }: GaugeChartProps) {
  const clampedScore = Math.min(100, Math.max(0, score));
  // Total arc length for semi-circle with r=38
  const arcLength = 119.38;
  // Offset: 0% AI score displays full green arc (100% human confidence)
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
              Why is Swift AI Humanizer considered a leading AI to human text converter?
            </h2>

            <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base leading-relaxed">
              Our AI humanizer is considered to be among the best because we prioritize writing quality.
            </p>

            <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              Instead of taking the sledgehammer approach by swapping words randomly, introducing grammatical errors, adding awkward phrasing, and turning well-written content into something that resembles 2 AM forum posts, we focus on targeted elimination of AI writing patterns. The result is polished, natural-sounding content you&apos;d actually want to publish.
            </p>

            <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              <strong className="text-slate-900 dark:text-white font-bold">A note on AI detection:</strong> We are often asked if our tool guarantees any specific result using AI detectors. The answer is no; in fact, you should not trust anyone who promises such results. Different tools use different methods, and are constantly updated, so it is hard to promise specific results. However, no matter how you slice it, we always focus on one thing: making your text sound as natural and pleasant to read as possible.
            </p>

            {/* Site Theme CTA Button: Try Swift Free */}
            <div className="pt-2">
              <Link
                href="#humanizer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>Try Swift Free</span>
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
                  100% Free AI Humanizer, Humanize AI with No Ads, No Paywalls
                </p>

                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  You just discovered a truly free way to humanize AI content, bypass ChatGPT, and make your AI text undetectable in any niche of AI writing. Your content will be rewritten just like a human would do it. Our AI humanizer tool is marked as &quot;Human&quot; in Grammarly AI detector, QuillBot AI checker, ZeroGPT, GPTZero, and other popular AI detectors. You can humanize AI for free and reword any AI content to human without paying expensive writers. Easily humanize ChatGPT and bypass all other AI chat bots and models. And all of this is 100% free! Swift AI Humanizer is your human AI writer.
                </p>
              </div>

              {/* Footer Notice & Placeholder PDF Export */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                  <span className="w-3.5 h-3.5 bg-yellow-400 rounded-xs shrink-0" />
                  <span>Highlighted text is suspected to be most likely generated by AI*</span>
                </div>

                <span className="flex items-center gap-1.5 font-bold text-xs text-slate-400 dark:text-slate-500 shrink-0 cursor-default">
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>Export to PDF</span>
                </span>
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
