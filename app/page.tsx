import Link from "next/link";
import { Sparkles, ShieldCheck, Wand2, Layers, ArrowRight, CheckCircle2, FileCheck } from "lucide-react";
import { HumanizerTool } from "@/components/HumanizerTool";
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
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-[42px] text-slate-900 dark:text-white tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
            Free AI Humanizer: Turn AI Text into 100% Human Writing
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-sans">
            The best free AI humanizer to convert ChatGPT, Claude, and Gemini text into natural, undetectable human writing. No sign-up required.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-300 font-semibold pt-1">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> 100% Free
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Preserves Bullets &amp; Bold
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Turnitin &amp; GPTZero Safe
            </span>
          </div>
        </div>

        {/* Rewriter Workbench Tool */}
        <HumanizerTool />

        {/* Performance Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-8 shadow-float max-w-6xl mx-auto text-center transition-colors">
          <div className="space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-600 dark:text-emerald-400">98.4%</div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">AI Bypass Score</div>
          </div>
          <div className="space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-600 dark:text-emerald-400">100%</div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Meaning &amp; Formatting Kept</div>
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
        <section className="py-12 border-t border-slate-200/80 dark:border-slate-800 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Humanize AI Text in 4 Steps
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

        {/* Key Features */}
        <section className="py-12 border-t border-slate-200/80 dark:border-slate-800 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Built for Fast, Clean Rewriting
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 rounded-3xl space-y-3 shadow-float hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-brand-50 dark:bg-emerald-950/90 border border-brand-200 dark:border-emerald-800 flex items-center justify-center text-brand-600 dark:text-emerald-400">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">Preserves Bullets &amp; Bold</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Keep lists, bolding, and headers intact. Copy straight into Word or Google Docs.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 rounded-3xl space-y-3 shadow-float hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/90 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Wand2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">5 Writing Tones</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Switch between Academic, Conversational, Professional, Marketing, and Creative styles.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 rounded-3xl space-y-3 shadow-float hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/90 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">Bulk Document Upload</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Process Word files (.docx) or paste multiple paragraphs at once.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 rounded-3xl space-y-3 shadow-float hover:-translate-y-1 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/90 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">Live Detector Checks</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                View instant AI risk scores for Turnitin, GPTZero, and Copyleaks.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <UseCases />

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
