"use client";

import Link from "next/link";
import { Trash2, ThumbsUp, ThumbsDown, CheckCircle2, Download, Info, Sparkles } from "lucide-react";

export interface StatItem {
  label: string;
  dotColor: string;
  percentage: number;
}

export interface StatBarProps {
  items: StatItem[];
}

export function StatBar({ items }: StatBarProps) {
  return (
    <div className="space-y-2.5 pt-2">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 font-sans">
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${item.dotColor} shrink-0`} />
            <span className="text-[11px] sm:text-xs">{item.label}</span>
            <Info className="w-3 h-3 text-slate-300 dark:text-slate-600 shrink-0" />
          </div>
          <span className="font-bold text-slate-900 dark:text-white text-[11px] sm:text-xs">{item.percentage}%</span>
        </div>
      ))}
    </div>
  );
}

export interface StepItem {
  number: number;
  label: string;
  text: string;
}

export interface StepListProps {
  steps: StepItem[];
}

export function StepList({ steps }: StepListProps) {
  return (
    <div className="space-y-3 font-sans">
      {steps.map((step) => (
        <div key={step.number} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 shrink-0" />
          <p>
            <strong className="font-bold text-slate-900 dark:text-white">Step {step.number}: </strong>
            {step.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export function HowToHumanizeSection() {
  const DEFAULT_STEPS: StepItem[] = [
    {
      number: 1,
      label: "Step 1",
      text: "Visit this website: https://swiftaihumanizer.com via your browser.",
    },
    {
      number: 2,
      label: "Step 2",
      text: "Enter your AI generated text into the input box on the website.",
    },
    {
      number: 3,
      label: "Step 3",
      text: "Select the right humanization style for your goal.",
    },
    {
      number: 4,
      label: "Step 4",
      text: "Click on \"Humanize AI\" to start the process. It may take a few seconds.",
    },
    {
      number: 5,
      label: "Step 5",
      text: "That's it. Your text is now ready to use.",
    },
  ];

  const STAT_ITEMS: StatItem[] = [
    { label: "AI-generated", dotColor: "bg-orange-400", percentage: 0 },
    { label: "AI-generated & AI-refined", dotColor: "bg-amber-200 dark:bg-amber-800", percentage: 0 },
    { label: "Human-written & AI-refined", dotColor: "bg-sky-200 dark:bg-sky-800", percentage: 0 },
    { label: "Human-written", dotColor: "bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600", percentage: 100 },
  ];

  return (
    <section className="relative my-16 font-sans">
      {/* Soft Pastel Gradient Background Container */}
      <div className="bg-gradient-to-br from-pink-100/60 via-amber-100/50 via-emerald-100/60 to-sky-100/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-10 lg:p-14 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-xl relative overflow-hidden">
        
        {/* Soft Ambient Blur Element */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-200/40 dark:bg-amber-950/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Interactive Tool Preview Card */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col">
              
              {/* Split Panel (Multilanguage tabs removed as requested) */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800 p-6 gap-6">
                
                {/* Left Pane: Sample Input Text */}
                <div className="space-y-4 flex flex-col justify-between pr-0 md:pr-2">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200 font-heading">
                        Why is Swift AI Humanizer considered the best Free AI Humanizer?
                      </h4>
                      <Trash2 className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0" />
                    </div>

                    <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans space-y-2 max-h-[260px] overflow-y-auto pr-1">
                      <p>
                        First of all, no AI humanizer can guarantee a zero score on every AI detector. That&apos;s because 90% of these detectors aren&apos;t perfect either. Even if they were, it would be nearly impossible to achieve without making your content look awkward or unnatural. Many tools that claim to humanize AI text simply introduce errors, add random spaces, use strange word choices, or turn the writing into something overly conversational or &quot;forum-style&quot; - which makes it unusable in most cases. Why settle for weird, low-quality content?
                      </p>
                      <p>
                        Swift AI Humanizer is different. We actually care about proper grammar and readability. So, no, we won&apos;t promise you a 100% human score everywhere, but we do significantly lower your AI detection rate while keeping your content looking natural and polished! So yeah, Swift AI Humanizer is the best Humanizer tool nowadays!
                      </p>
                    </div>
                  </div>

                  {/* Left Pane Footer Bar */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span>146 Words</span>
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
                      <ThumbsDown className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
                      <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold ml-2">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Analysis complete</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Pane: Report Analysis Readout & Chart */}
                <div className="space-y-4 pl-0 md:pl-2 pt-4 md:pt-0">
                  <div className="text-center space-y-1">
                    <div className="flex items-center justify-center gap-1">
                      <span className="font-heading font-extrabold text-4xl text-slate-900 dark:text-white">0%</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <span>of text is likely AI</span>
                      <Info className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Mini Column Chart */}
                  <div className="flex items-end justify-center gap-8 h-20 pt-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col items-center gap-1 h-full justify-end">
                      <div className="w-8 bg-orange-100 dark:bg-orange-950/40 rounded-t-sm h-1" />
                      <span className="text-[10px] font-semibold text-slate-400">AI</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 h-full justify-end">
                      <div className="w-8 bg-emerald-500 dark:bg-emerald-600 rounded-t-sm h-full" />
                      <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-200">Human</span>
                    </div>
                  </div>

                  {/* Placeholder Download Report */}
                  <div className="text-center">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 dark:text-slate-500 cursor-default">
                      <Download className="w-3.5 h-3.5" />
                      <span>Download report</span>
                    </span>
                  </div>

                  {/* Breakdown Stat List */}
                  <StatBar items={STAT_ITEMS} />
                </div>

              </div>

              {/* Full Width Pale Green Bottom Bar */}
              <div className="bg-emerald-50/80 dark:bg-emerald-950/50 p-4 border-t border-emerald-100 dark:border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-center sm:text-left">
                  Want your text to sound more authentic?
                </span>
                <Link
                  href="#humanizer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs transition-transform hover:scale-105 shrink-0 shadow-xs"
                >
                  <span>Refine with Paraphraser</span>
                  <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
                </Link>
              </div>

            </div>
          </div>

          {/* Right Column: Copy & Step List */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight leading-snug">
              How can you Humanize AI text for Free?
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              Here&apos;s how you can humanize AI text for free using our Swift Free AI Humanizer:
            </p>

            {/* Componentized StepList */}
            <StepList steps={DEFAULT_STEPS} />

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

        </div>
      </div>
    </section>
  );
}
