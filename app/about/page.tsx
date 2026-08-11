import Link from "next/link";
import { ShieldCheck, Sparkles, BookOpen, Layers, CheckCircle2, ArrowRight, Heart, Cpu, FileText, Lock } from "lucide-react";

export const metadata = {
  title: "About Us — Swift AI Humanizer",
  description: "Learn about Swift AI Humanizer's mission, IEEE research-backed technology, and formatting-aware AI text humanization engine.",
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-[#F9FAFB] dark:bg-[#0F172A] min-h-screen py-16 transition-colors font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-grammarly-hero pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-emerald-950/80 border border-brand-200 dark:border-emerald-800 text-brand-700 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-600 dark:text-emerald-400" />
            <span>Format-Aware AI Humanization Engine</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Empowering Writers with Undetectable, Natural Expression
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Swift AI Humanizer was built to bridge the gap between raw AI assistance and genuine human writing style — without stripping away rich text formatting or compromising your privacy.
          </p>
        </div>

        {/* Core Mission Statement Box */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-float space-y-6">
          <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
            Our Mission &amp; Purpose
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              In the modern AI era, Large Language Models (LLMs) like ChatGPT, Claude, and Gemini have revolutionized content creation. However, raw AI outputs frequently exhibit robotic hallmarks: uniform sentence lengths, cliché transition words (<em className="text-slate-900 dark:text-white font-medium">"moreover", "delve", "plays a crucial role"</em>), and rigid syntactic predictability.
            </p>
            <p>
              Traditional rewriter tools suffer from two critical flaws: they either perform basic single-word synonym swaps that fail modern AI detectors (Turnitin, Copyleaks, GPTZero), or they strip away paragraph breaks, bold headings, and bulleted lists.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white">Swift AI Humanizer</strong> solves both challenges simultaneously. Built on peer-reviewed IEEE machine learning research, our engine restructures sentence cadence and word density while keeping your original document layout completely intact.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
              The 4 Pillars of Swift AI Humanizer
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Why thousands of students, journalists, and researchers trust our engine every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 space-y-3 shadow-float">
              <div className="w-10 h-10 rounded-2xl bg-brand-50 dark:bg-emerald-950/90 border border-brand-200 dark:border-emerald-800 flex items-center justify-center text-brand-600 dark:text-emerald-400">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                1. Formatting-Aware Rewriting
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Our parser preserves Markdown formatting, bullet points, numbered lists, bold text, and heading hierarchies line-by-line so you can copy text directly back into Google Docs or Microsoft Word.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 space-y-3 shadow-float">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/90 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                2. IEEE Research-Backed Evasion
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Engineered directly against the 10 handcrafted NLP feature importance signals (Coleman-Liau readability score, word density, POS lexicon ratios) identified in published academic literature.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 space-y-3 shadow-float">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/90 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                3. Privacy First &amp; Zero Data Logging
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                We believe your private drafts belong to you. Text is processed ephemerally in RAM and immediately discarded. We never log, sell, or submit user text to public AI training datasets.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 space-y-3 shadow-float">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/90 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                4. Multi-Model Benchmark Verification
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Every transformation is validated in real-time against simulated detection models for Copyleaks, Turnitin 2026, GPTZero v2, and Originality.ai 3.0 to give you 98%+ human confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Technology & Engineering Overview */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-float space-y-6">
          <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
            Engineering &amp; Ethical Commitment
          </h2>
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              We advocate for responsible writing enhancement. Swift AI Humanizer is designed to assist authors in refining drafts, eliminating robotic phrasing, and expressing their ideas naturally.
            </p>
            <p>
              Our web platform is 100% free forever, supported by clean non-intrusive architecture without paywalls, word caps, or forced subscription sign-ups.
            </p>
          </div>
        </div>

        {/* Featured On Badges */}
        <div className="flex flex-col items-center justify-center space-y-4 pt-4">
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Featured On
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://yo.directory"
              target="_blank"
              rel="dofollow noopener"
              className="inline-block transition-transform hover:scale-105"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/yo-directory-badge.svg"
                alt="Featured on Yo.directory"
                width={260}
                height={94}
                className="block w-[240px] sm:w-[260px] max-w-full h-auto border-0 outline-none"
              />
            </a>

            <a
              href="https://dang.ai"
              target="_blank"
              rel="dofollow noopener"
              className="inline-block transition-transform hover:scale-105"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/dang-verified-light.png"
                alt="Verified on DANG!"
                width={260}
                height={94}
                className="block w-[240px] sm:w-[260px] max-w-full h-auto border-0 outline-none"
              />
            </a>

            <a
              href="https://saascity.io"
              target="_blank"
              rel="dofollow noopener"
              className="inline-block transition-transform hover:scale-105"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://saascity.io/badges/featured-light.svg"
                alt="Featured on SaaSCity"
                width={150}
                height={54}
                className="block w-[150px] max-w-full h-auto border-0 outline-none"
              />
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-heading font-extrabold text-lg text-emerald-950 dark:text-emerald-100 block">
              Ready to Humanize Your Text?
            </span>
            <p className="text-emerald-800 dark:text-emerald-300 font-sans">
              Test your AI draft live with our 4-stage humanization pipeline.
            </p>
          </div>

          <Link
            href="/#humanizer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all shrink-0 hover:scale-105"
          >
            <span>Try Humanizer Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
