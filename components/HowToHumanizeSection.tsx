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
      text: "Visit https://swiftaihumanizer.com in your web browser.",
    },
    {
      number: 2,
      label: "Step 2",
      text: "Paste your ChatGPT, Claude, or Gemini text into the editor.",
    },
    {
      number: 3,
      label: "Step 3",
      text: "Choose the writing mode and tone that best suits your audience.",
    },
    {
      number: 4,
      label: "Step 4",
      text: "Click \"Humanize AI text\" to process your content in seconds.",
    },
    {
      number: 5,
      label: "Step 5",
      text: "Copy your natural, publish-ready content with formatting preserved.",
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
              
              {/* Split Panel */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800 p-6 gap-6">
                
                {/* Left Pane: Sample Input Text */}
                <div className="space-y-4 flex flex-col justify-between pr-0 md:pr-2">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200 font-heading">
                        Why writers and creators choose Swift AI Humanizer
                      </h4>
                      <Trash2 className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0" />
                    </div>

                    <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans space-y-2 max-h-[260px] overflow-y-auto pr-1">
                      <p>
                        Getting AI to draft your content is easy, but getting it to sound like a real person is another story. Most generic rewriters make things worse by injecting typos, replacing simple words with overly fancy synonyms, or stripping away your paragraph breaks and bullet points.
                      </p>
                      <p>
                        Swift AI Humanizer takes a completely different approach. We focus on natural rhythm, vocabulary variation, and sentence structure. Instead of fighting detectors with cheap tricks, we refine your text into smooth, engaging, and publishable writing that naturally passes AI inspection.
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

              {/* Full Width Pale Green Bottom Bar: Changed button text to 'Humanize AI text' */}
              <div className="bg-emerald-50/80 dark:bg-emerald-950/50 p-4 border-t border-emerald-100 dark:border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-center sm:text-left">
                  Want your text to sound more authentic?
                </span>
                <Link
                  href="#humanizer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs transition-transform hover:scale-105 shrink-0 shadow-xs"
                >
                  <span>Humanize AI text</span>
                  <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
                </Link>
              </div>

            </div>
          </div>

          {/* Right Column: Copy & Step List (Bottom button removed as requested) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white tracking-tight leading-snug">
              How to Humanize AI Text in 5 Simple Steps
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              Transforming your AI drafts into human-sounding writing takes just a few clicks:
            </p>

            {/* Componentized StepList */}
            <StepList steps={DEFAULT_STEPS} />
          </div>

        </div>
      </div>
    </section>
  );
}
