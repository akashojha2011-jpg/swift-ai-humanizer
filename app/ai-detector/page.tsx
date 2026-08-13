import { Metadata } from "next";
import { AIDetectorTool } from "@/components/AIDetectorTool";
import { ShieldCheck, Cpu, SearchCheck, CheckCircle2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Free AI Detector & Risk Scanner | Swift AI",
  description: "Check any text against simulated AI detection matrices for Turnitin 2026, GPTZero v2, Copyleaks, and Originality.ai. Free online AI detector scanner with no sign-up.",
  openGraph: {
    title: "Free AI Detector & Risk Scanner | Swift AI",
    description: "Check any text against simulated AI detection matrices for Turnitin 2026, GPTZero v2, Copyleaks, and Originality.ai. Free online AI detector scanner with no sign-up.",
    url: "https://swiftaihumanizer.com/ai-detector",
  },
  twitter: {
    title: "Free AI Detector & Risk Scanner | Swift AI",
    description: "Check any text against simulated AI detection matrices for Turnitin 2026, GPTZero v2, Copyleaks, and Originality.ai. Free online AI detector scanner with no sign-up.",
  },
};

export default function AIDetectorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          Free AI Detector &amp; Risk Scanner
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          Scan your essays, blog posts, and articles against simulated AI detection matrices for Turnitin 2026, GPTZero v2, Originality.ai, and Copyleaks. Identify robotic tell-phrases before submitting your writing.
        </p>
      </div>

      {/* Interactive AI Detector Tool Widget Component */}
      <AIDetectorTool />

      {/* Detailed SEO Content Section (Bumps word count to 500+ words) */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xs space-y-8">
        
        <div className="space-y-3">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
            Understanding Multi-Detector AI Text Analysis
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            AI detectors do not actually read text like a human does. Instead, algorithms like Turnitin, GPTZero, and Copyleaks calculate statistical probability distributions across your vocabulary and sentence structure. When Large Language Models like ChatGPT, Claude, or Gemini write content, they output predictable patterns of uniform sentence length, low perplexity, and repetitive transitional phrases.
          </p>
        </div>

        {/* 4 Feature Analysis Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
              Perplexity &amp; Predictability
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Perplexity measures how surprising a word choice is to an AI model. AI tools pick high-probability next words, resulting in low perplexity scores. Human writers use unpredictable, creative vocabulary that spikes perplexity.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
              Burstiness &amp; Sentence Cadence
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Burstiness tracks variations in sentence structure and length. AI models output paragraphs with consistent, medium-length sentences. Human writers naturally alternate short punchy statements with complex compound clauses.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <SearchCheck className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
              N-Gram Lexicon Ratios
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Detectors flag specific cliché transitions and vocabulary clusters commonly associated with ChatGPT, such as &quot;furthermore,&quot; &quot;in conclusion,&quot; &quot;delve,&quot; &quot;tapestry,&quot; and &quot;testament to.&quot;
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
              Turnitin 2026 &amp; GPTZero Scanners
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Institutional scanners like Turnitin 2026 evaluate document-wide features and flag false positives on non-native English speakers. Swift AI Humanizer recalibrates these statistical signals into natural human ranges.
            </p>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
            Frequently Asked Questions About AI Detection
          </h3>
          
          <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>How accurate is this free AI detector scanner?</span>
              </h4>
              <p className="pl-6 leading-relaxed text-slate-500 dark:text-slate-400">
                Our free detector tool uses a composite statistical scoring model calibrated against the NLP parameters of Turnitin 2026, GPTZero v2, and Copyleaks, offering a high-precision preview of your text&apos;s detection risk.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>What should I do if my text is flagged as AI?</span>
              </h4>
              <p className="pl-6 leading-relaxed text-slate-500 dark:text-slate-400">
                If your draft shows a high AI probability, paste it into our free Swift AI Humanizer tool to automatically rebalance sentence cadences, remove robotic tell-phrases, and achieve a 100% human score while preserving your original formatting.
              </p>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
