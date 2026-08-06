import Link from "next/link";
import { Sparkles, ArrowRight, Wand2, Shield, FileCheck, Layers } from "lucide-react";
import { FAQSection } from "@/components/FAQSection";

export const metadata = {
  title: "How It Works — Swift AI Humanizer",
  description: "Learn how Swift AI Humanizer eliminates robotic AI writing patterns, preserves document formatting, and bypasses Turnitin 2026 and GPTZero.",
};

export default function HowItWorksPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 font-sans">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white">
          How Swift AI Humanizer Works
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Our specialized engine combines line-by-line formatting preservation with adaptive burstiness to rewrite ChatGPT, Claude, and Gemini text into clear human writing.
        </p>
      </div>

      {/* Process Steps */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-float flex flex-col md:flex-row items-start gap-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-emerald-950/90 border border-brand-200 dark:border-emerald-800 flex items-center justify-center font-mono font-bold text-brand-600 dark:text-emerald-400 shrink-0">
            01
          </div>
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">Line-by-Line Formatting Parser</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We extract bullet points, numbered lists, bold text, and subheadings before processing so your original document hierarchy stays 100% preserved.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-float flex flex-col md:flex-row items-start gap-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/90 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center font-mono font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
            02
          </div>
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">AI Buzzword Stripping & Contraction Injection</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Formal markers like "moreover", "tapestry", and "delve into" are replaced with warm, natural human phrasing and natural contractions.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-float flex flex-col md:flex-row items-start gap-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/90 border border-amber-200 dark:border-amber-800 flex items-center justify-center font-mono font-bold text-amber-600 dark:text-amber-400 shrink-0">
            03
          </div>
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">Burstiness & Perplexity Calibration</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Sentence lengths are dynamically varied to emulate genuine human cadence and bypass classifier algorithms.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-float flex flex-col md:flex-row items-start gap-6">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/90 border border-sky-200 dark:border-sky-800 flex items-center justify-center font-mono font-bold text-sky-600 dark:text-sky-400 shrink-0">
            04
          </div>
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">Rich Text Clipboard Export</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Click 'Copy Formatted' to copy fully styled HTML straight into Google Docs or Word with all bolding and bullet lists intact.
            </p>
          </div>
        </div>
      </div>

      <FAQSection />
    </div>
  );
}
