import Link from "next/link";
import { Sparkles, ShieldCheck, Wand2, Layers, ArrowRight, CheckCircle2, FileCheck } from "lucide-react";
import { HumanizerTool } from "@/components/HumanizerTool";
import { CompetitorComparison } from "@/components/CompetitorComparison";
import { FAQSection } from "@/components/FAQSection";
import { UseCases } from "@/components/UseCases";
import { SEOContentSection } from "@/components/SEOContentSection";
import { DifferentiatorsChart } from "@/components/DifferentiatorsChart";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#F9FAFB] dark:bg-[#0F172A] transition-colors">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-grammarly-hero pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 space-y-16">
        {/* Main Hero Banner */}
        <div className="text-center max-w-5xl mx-auto space-y-5">
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-[40px] text-slate-900 dark:text-white tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
            Best Free AI Humanizer – Instantly Bypass GPTZero & Turnitin
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto font-sans">
            Convert ChatGPT, Claude, and Gemini text into natural human-sounding writing. 98% bypass accuracy with zero sign up required.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-300 font-semibold pt-1">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> 100% Free Forever
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Preserves Bullets & Formatting
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Turnitin & GPTZero Safe
            </span>
          </div>

          {/* Table of Contents / Internal Anchor Links */}
          <nav aria-label="Page Quick Sections" className="flex flex-wrap items-center justify-center gap-2 pt-3">
            <a href="#what-is-ai-humanizer" className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 transition-all">
              #what-is-ai-humanizer
            </a>
            <a href="#how-it-works" className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 transition-all">
              #how-it-works
            </a>
            <a href="#why-swift-ai" className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 transition-all">
              #why-swift-ai
            </a>
            <a href="#features" className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 transition-all">
              #features
            </a>
            <a href="#faq" className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 transition-all">
              #faq
            </a>
          </nav>
        </div>

        {/* Intro Section: What is an AI Humanizer? */}
        <section id="what-is-ai-humanizer" className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-float max-w-4xl mx-auto space-y-4 scroll-mt-20">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            What is an AI Humanizer?
          </h2>
          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-3 font-sans">
            <p>
              An <strong>AI humanizer</strong> is a specialized writing tool that rewrites AI-generated text from ChatGPT, Claude, and Gemini into authentic, natural writing that reads as if authored by a real human. Most raw content produced by generative AI models contains rigid statistical patterns—such as low perplexity and uniform sentence length—that institutional AI detectors like <strong>GPTZero</strong> and <strong>Turnitin 2026</strong> easily identify. Our <strong>free AI humanizer</strong> eliminates these mathematical signals by adjusting sentence structure, adding organic contractions, and varying writing cadence while keeping your original facts, bullet points, and core meaning 100% intact.
            </p>
            <p>
              Whether you are a student safeguarding academic essays from false positive flags, a content creator publishing SEO articles, a marketer polishing ad copy, or a business professional refining corporate emails, our <strong>best AI humanizer</strong> delivers fast, undetectable rewrites with zero account registration required. <Link href="/blog/what-is-ai-humanizer" className="text-brand-600 dark:text-emerald-400 font-bold hover:underline">Learn what an AI humanizer is</Link>, <Link href="/blog/ai-humanizer-for-students" className="text-brand-600 dark:text-emerald-400 font-bold hover:underline">read our guide for students</Link>, or <Link href="/blog/best-free-ai-humanizer-2026" className="text-brand-600 dark:text-emerald-400 font-bold hover:underline">see how we compare to other tools</Link>.
            </p>
          </div>
        </section>

        {/* Rewriter Workbench Tool */}
        <div id="humanizer">
          <HumanizerTool />
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-8 shadow-float max-w-6xl mx-auto text-center transition-colors">
          <div className="space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-600 dark:text-emerald-400">98.4%</div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">AI Bypass Score</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-600 dark:text-emerald-400">100%</div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Meaning & Formatting Kept</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-600 dark:text-emerald-400">&lt; 1.5s</div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Instant Rewrite</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-amber-600 dark:text-amber-400">$0</div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Free Forever</div>
          </div>
        </div>

        {/* Interactive Comparison Section */}
        <DifferentiatorsChart />

        {/* SEO Keywords & Intent Section */}
        <SEOContentSection />

        {/* How It Works Section */}
        <section id="how-it-works" className="py-12 border-t border-slate-200/80 dark:border-slate-800 space-y-10 scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              How Swift AI Works
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Simple, automatic rewriting that keeps your original meaning and formatting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 rounded-3xl space-y-3 shadow-float hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-brand-50 dark:bg-emerald-950/90 border border-brand-100 dark:border-emerald-800 flex items-center justify-center font-mono font-bold text-sm text-brand-600 dark:text-emerald-400">
                01
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Removes AI Words</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Flags robotic transitions like "moreover" and "in conclusion".
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 rounded-3xl space-y-3 shadow-float hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/90 border border-amber-100 dark:border-amber-800 flex items-center justify-center font-mono font-bold text-sm text-amber-600 dark:text-amber-400">
                02
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Adjusts Rhythm</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Mixes sentence lengths and adds natural contractions.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 rounded-3xl space-y-3 shadow-float hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/90 border border-emerald-100 dark:border-emerald-800 flex items-center justify-center font-mono font-bold text-sm text-emerald-600 dark:text-emerald-400">
                03
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Checks AI Scanners</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Tests output against GPTZero and Turnitin scoring models.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 rounded-3xl space-y-3 shadow-float hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/90 border border-sky-100 dark:border-sky-800 flex items-center justify-center font-mono font-bold text-sm text-sky-600 dark:text-sky-400">
                04
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Keeps Formatting</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Ensures all bullets, numbers, bold text, and facts stay 100% intact.
              </p>
            </div>
          </div>
        </section>

        {/* Features Built for Your Needs */}
        <UseCases />

        {/* Comparison Matrix */}
        <CompetitorComparison />

        {/* FAQs */}
        <FAQSection />

        {/* Bottom CTA Banner */}
        <section className="bg-gradient-to-br from-brand-600 via-brand-600 to-brand-800 rounded-4xl p-12 text-center space-y-6 shadow-xl text-white max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl">
              Humanize Your Text Free
            </h2>
            <p className="text-sm opacity-90 leading-relaxed max-w-lg mx-auto font-sans">
              No account or credit card required. Paste your text above to start.
            </p>
          </div>

          <Link
            href="/#humanizer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-xs text-brand-900 bg-white hover:bg-slate-50 shadow-lg transition-all hover:scale-105"
          >
            <span>Try Swift AI Humanizer Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
