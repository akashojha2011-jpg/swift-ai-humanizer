import Link from "next/link";
import dynamic from "next/dynamic";
import { Sparkles, ShieldCheck, Wand2, Layers, ArrowRight, CheckCircle2, FileCheck, BookOpen, RefreshCw, Cpu, Award } from "lucide-react";
import { HumanizerTool } from "@/components/HumanizerTool";
import { DetectorMarquee } from "@/components/DetectorMarquee";

import { WhySwiftAISection } from "@/components/WhySwiftAISection";
import { HowToHumanizeSection } from "@/components/HowToHumanizeSection";

// Dynamically import heavy below-the-fold components for ultra-fast mobile initial page load (LCP)
const AIHumanizerOverview = dynamic(() => import("@/components/AIHumanizerOverview").then((mod) => mod.AIHumanizerOverview), {
  ssr: true,
});
const DifferentiatorsChart = dynamic(() => import("@/components/DifferentiatorsChart").then((mod) => mod.DifferentiatorsChart), {
  ssr: true,
});
const ComparisonTable = dynamic(() => import("@/components/ComparisonTable").then((mod) => mod.ComparisonTable), {
  ssr: true,
});
const UseCases = dynamic(() => import("@/components/UseCases").then((mod) => mod.UseCases), {
  ssr: true,
});
const NecessitySection = dynamic(() => import("@/components/NecessitySection").then((mod) => mod.NecessitySection), {
  ssr: true,
});
const FAQSection = dynamic(() => import("@/components/FAQSection").then((mod) => mod.FAQSection), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#FAFBFC] dark:bg-[#0B1120] transition-colors font-sans">
      {/* Planicorn Soft Top Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-grammarly-hero pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 space-y-16">
        {/* Freshness Strip */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold shadow-2xs">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Last updated August 2026. Detection models refreshed for Turnitin 2026 and GPTZero v2</span>
          </div>
        </div>

        {/* Hero Section matching Planicorn Typography */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-[42px] text-slate-900 dark:text-white tracking-tight leading-tight">
            Free AI Humanizer: Turn AI Text into 100% Human Writing
          </h1>

          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-sans">
            Convert ChatGPT, Claude, and Gemini text into natural, undetectable writing. Bypass Turnitin, GPTZero, and Copyleaks with research-backed precision. No sign-up required.
          </p>

          {/* Trust Bar Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600 dark:text-slate-300 font-semibold pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> 98%+ AI Bypass Score
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> 8 Detectors Covered
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> IEEE Research-Based
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> 100% Free • No Sign-Up
            </span>
          </div>
        </div>

        {/* 1. Main Editor Tool Widget */}
        <HumanizerTool />

        {/* Animated Detector Marquee Widget */}
        <DetectorMarquee />

        {/* 2. Introducing Swift AI Master Overview */}
        <AIHumanizerOverview />

        {/* 3. Why Swift AI Humanizer Section */}
        <WhySwiftAISection />

        {/* 4. How to Humanize AI Text for Free (5 Steps Tutorial) */}
        <HowToHumanizeSection />

        {/* 5. Performance Stats Bar & Research Methodology */}
        <div className="space-y-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 rounded-3xl p-8 shadow-xs text-center transition-colors">
            <div className="space-y-1">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-600 dark:text-emerald-400 tracking-tight">98.4%</div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">AI Bypass Score</div>
            </div>
            <div className="space-y-1">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-600 dark:text-emerald-400 tracking-tight">100%</div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Meaning &amp; Formatting Kept</div>
            </div>
            <div className="space-y-1">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-600 dark:text-emerald-400 tracking-tight">&lt; 1.5s</div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Instant Rewrite</div>
            </div>
            <div className="space-y-1">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-amber-600 dark:text-amber-400 tracking-tight">$0</div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Free Forever</div>
            </div>
          </div>

          <section className="bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200/80 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold font-mono">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>The Only Research-Backed AI Humanizer</span>
                </div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-slate-900 dark:text-white">
                  Built on Peer-Reviewed Detection Research
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  Most humanizers rely on random word-swapping. Swift AI reverse-engineers the actual classifiers AI detectors use, based on the IEEE-published study <em className="font-medium text-slate-900 dark:text-white">&quot;How to Detect AI-Generated Texts?&quot;</em> (Nguyen, Hatua &amp; Sung, 2023). We target the exact features detectors score on: Coleman-Liau readability, word density, and sentence-level predictability, then rebalance your text into natural human ranges instead of just scrambling words.
                </p>
              </div>

              <Link
                href="/how-it-was-made"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-xs text-white bg-brand-600 hover:bg-brand-700 shadow-2xs transition-all shrink-0 hover:scale-105"
              >
                <span>See full research breakdown</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>

        {/* 6. Key Advantages & Feature Comparisons */}
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="space-y-2 text-center">
            <DifferentiatorsChart />
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 font-medium">
              Higher pass rates because we target the actual signals detectors score, not just word choice.
            </p>
          </div>

          <ComparisonTable />

          <section className="py-8 border-t border-slate-200/60 dark:border-slate-800 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-900 dark:text-white">
                Built for Fast, Clean Rewriting
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-sans">
                Our rewrite engine offers rich text formatting preservation, 5 specialized writing tones, bulk document uploading, live detector scoring, and research-backed accuracy at zero cost.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              <div className="bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 p-5 rounded-3xl space-y-2 shadow-xs hover:-translate-y-0.5 transition-all">
                <div className="w-9 h-9 rounded-2xl bg-brand-50 dark:bg-emerald-950/90 border border-brand-200 dark:border-emerald-800 flex items-center justify-center text-brand-600 dark:text-emerald-400">
                  <FileCheck className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Preserves Bullets &amp; Bold</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Keep lists, bolding, and headers intact. Copy straight into Word or Docs.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 p-5 rounded-3xl space-y-2 shadow-xs hover:-translate-y-0.5 transition-all">
                <div className="w-9 h-9 rounded-2xl bg-emerald-50 dark:bg-emerald-950/90 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Wand2 className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">5 Writing Tones</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Switch between Academic, Conversational, Professional, Marketing, and Creative.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 p-5 rounded-3xl space-y-2 shadow-xs hover:-translate-y-0.5 transition-all">
                <div className="w-9 h-9 rounded-2xl bg-amber-50 dark:bg-amber-950/90 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Bulk Document Upload</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Process Word files (.docx) or paste multiple paragraphs at once.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 p-5 rounded-3xl space-y-2 shadow-xs hover:-translate-y-0.5 transition-all">
                <div className="w-9 h-9 rounded-2xl bg-sky-50 dark:bg-sky-950/90 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Live Detector Checks</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  View instant AI risk scores for Turnitin, GPTZero, and Copyleaks.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 p-5 rounded-3xl space-y-2 shadow-xs hover:-translate-y-0.5 transition-all">
                <div className="w-9 h-9 rounded-2xl bg-purple-50 dark:bg-purple-950/90 border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Research-Backed Accuracy</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Every rewrite is calibrated against the features real AI detectors measure.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* 7. Who Can Benefit (Use Cases) */}
        <UseCases />

        {/* 8. Necessity of Humanizing AI Text */}
        <NecessitySection />

        {/* 9. Frequently Asked Questions (FAQ) & Schema */}
        <FAQSection />

        {/* 9. Final CTA Banner */}
        <section className="bg-gradient-to-br from-brand-600 via-brand-600 to-brand-800 rounded-4xl p-12 text-center space-y-6 shadow-lg text-white max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight">
              Humanize Your Text Free
            </h2>
            <p className="text-sm opacity-90 leading-relaxed max-w-lg mx-auto font-sans">
              No account or credit card required. Paste your text above to start.
            </p>
          </div>

          <Link
            href="/#humanizer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-xs text-brand-900 bg-white hover:bg-slate-50 shadow-md transition-all hover:scale-105"
          >
            <span>Humanize Your Text Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
