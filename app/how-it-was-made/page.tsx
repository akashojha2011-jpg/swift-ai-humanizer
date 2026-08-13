import Link from "next/link";
import { ArrowRight, BookOpen, Cpu, ShieldCheck, CheckCircle2, FileText, Zap, BarChart2, Layers, Award } from "lucide-react";

export const metadata = {
  title: "IEEE Research & Architecture | Swift AI",
  description: "Learn how Swift AI Humanizer reverse-engineers AI detector classifiers (Turnitin, Copyleaks, GPTZero) using peer-reviewed IEEE research (Nguyen, Hatua & Sung, 2023).",
};

export default function HowItWasMadePage() {
  return (
    <div className="relative overflow-hidden bg-[#F9FAFB] dark:bg-[#0F172A] min-h-screen py-12 transition-colors font-sans">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-grammarly-hero pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Based on IEEE Published Research (2023)</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
            How Swift AI Was Engineered to Beat AI Detectors
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Rather than using surface-level word swaps, Swift AI Humanizer reverse-engineers machine learning classifiers using the 10 handcrafted NLP features identified by IEEE researchers <span className="font-semibold text-slate-900 dark:text-white">(Nguyen, Hatua & Sung)</span>.
          </p>
        </div>

        {/* DIAGRAM 1: High Level System Architecture */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-float space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-600 dark:text-emerald-400">
              System Architecture Diagram
            </span>
            <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
              The 4-Stage Evasion & Transformation Pipeline
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              How raw AI text passes through feature extraction, SHAP balancing, and natural human reconstruction.
            </p>
          </div>

          {/* Architecture Vector SVG Diagram */}
          <div className="w-full overflow-x-auto py-4">
            <svg viewBox="0 0 1000 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full min-w-[750px]">
              {/* Stage 1 Box */}
              <rect x="20" y="40" width="200" height="200" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-slate-950 dark:stroke-slate-800" />
              <rect x="35" y="55" width="36" height="36" rx="10" fill="#EF4444" fillOpacity="0.1" />
              <path d="M53 67V79M47 73H59" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              <text x="35" y="115" fill="#0F172A" className="dark:fill-white" fontSize="15" fontWeight="700">1. Raw AI Input</text>
              <text x="35" y="138" fill="#64748B" className="dark:fill-slate-400" fontSize="12">ChatGPT, Claude, Gemini</text>
              <text x="35" y="160" fill="#94A3B8" className="dark:fill-slate-500" fontSize="11">• Low Perplexity</text>
              <text x="35" y="178" fill="#94A3B8" className="dark:fill-slate-500" fontSize="11">• Low Burstiness (&lt; 40)</text>
              <text x="35" y="196" fill="#94A3B8" className="dark:fill-slate-500" fontSize="11">• High Word Density</text>
              <text x="35" y="214" fill="#94A3B8" className="dark:fill-slate-500" fontSize="11">• Rigid POS Nouns</text>

              {/* Arrow 1 */}
              <path d="M230 140H260" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" />
              <polygon points="265,140 257,135 257,145" fill="#059669" />

              {/* Stage 2 Box */}
              <rect x="270" y="40" width="210" height="200" rx="16" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" className="dark:fill-slate-950 dark:stroke-slate-800" />
              <rect x="285" y="55" width="36" height="36" rx="10" fill="#3B82F6" fillOpacity="0.1" />
              <path d="M303 67V79M297 73H309" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
              <text x="285" y="115" fill="#0F172A" className="dark:fill-white" fontSize="15" fontWeight="700">2. IEEE Feature Scan</text>
              <text x="285" y="138" fill="#64748B" className="dark:fill-slate-400" fontSize="12">Nguyen et al. (2023)</text>
              <text x="285" y="160" fill="#3B82F6" fontSize="11" fontWeight="600">• Coleman-Liau Index</text>
              <text x="285" y="178" fill="#3B82F6" fontSize="11" fontWeight="600">• Word Density (#char/#w)</text>
              <text x="285" y="196" fill="#3B82F6" fontSize="11" fontWeight="600">• POS Noun/Verb Ratios</text>
              <text x="285" y="214" fill="#3B82F6" fontSize="11" fontWeight="600">• Punctuation Count</text>

              {/* Arrow 2 */}
              <path d="M490 140H520" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" />
              <polygon points="525,140 517,135 517,145" fill="#059669" />

              {/* Stage 3 Box */}
              <rect x="530" y="40" width="210" height="200" rx="16" fill="#F8FAFC" stroke="#059669" strokeWidth="2" className="dark:fill-slate-950 dark:stroke-slate-800" />
              <rect x="545" y="55" width="36" height="36" rx="10" fill="#10B981" fillOpacity="0.1" />
              <path d="M563 67V79M557 73H569" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
              <text x="545" y="115" fill="#0F172A" className="dark:fill-white" fontSize="15" fontWeight="700">3. SHAP Evasion Engine</text>
              <text x="545" y="138" fill="#64748B" className="dark:fill-slate-400" fontSize="12">RF & XGB Classifier Bypass</text>
              <text x="545" y="160" fill="#059669" fontSize="11" fontWeight="600">• Clause Inversion</text>
              <text x="545" y="178" fill="#059669" fontSize="11" fontWeight="600">• Burstiness Injection</text>
              <text x="545" y="196" fill="#059669" fontSize="11" fontWeight="600">• Contraction Restoral</text>
              <text x="545" y="214" fill="#059669" fontSize="11" fontWeight="600">• 250+ Predictability Breaker</text>

              {/* Arrow 3 */}
              <path d="M750 140H780" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" />
              <polygon points="785,140 777,135 777,145" fill="#059669" />

              {/* Stage 4 Box */}
              <rect x="790" y="40" width="190" height="200" rx="16" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" className="dark:fill-emerald-950/40 dark:stroke-emerald-800" />
              <rect x="805" y="55" width="36" height="36" rx="10" fill="#10B981" />
              <path d="M817 73L822 78L830 68" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="805" y="115" fill="#065F46" className="dark:fill-emerald-300" fontSize="15" fontWeight="800">4. Passed Output</text>
              <text x="805" y="138" fill="#047857" className="dark:fill-emerald-400" fontSize="12">98%+ Human Confidence</text>
              <text x="805" y="160" fill="#065F46" className="dark:fill-emerald-300" fontSize="11">• Copyleaks Passed</text>
              <text x="805" y="178" fill="#065F46" className="dark:fill-emerald-300" fontSize="11">• Turnitin 2026 Safe</text>
              <text x="805" y="196" fill="#065F46" className="dark:fill-emerald-300" fontSize="11">• GPTZero v2 Passed</text>
              <text x="805" y="214" fill="#065F46" className="dark:fill-emerald-300" fontSize="11">• Originality.ai 3.0 Safe</text>
            </svg>
          </div>
        </div>

        {/* The 4 Key IEEE Research Breakthroughs */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              The 4 Key Research Breakthroughs
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Extracted directly from SHAP feature importance graphs in the IEEE paper.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 space-y-4 shadow-float">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/90 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold font-mono text-sm">
                01
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                Coleman-Liau Readability Index Balancing
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                The IEEE paper proved that <strong className="text-slate-900 dark:text-white">Coleman-Liau score</strong> is the #1 most influential SHAP feature used by Random Forest detectors. Synthetic text maintains an unnaturally rigid grade level (12-14+). Swift AI adjusts sentence boundary density to bring the score into natural human baseline ranges (7.5 - 9.5).
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                Formula: 0.0588 * L - 0.296 * S - 15.8
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 space-y-4 shadow-float">
              <div className="w-10 h-10 rounded-2xl bg-brand-50 dark:bg-emerald-950/90 border border-brand-200 dark:border-emerald-800 flex items-center justify-center text-brand-600 dark:text-emerald-400 font-bold font-mono text-sm">
                02
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                Word Density Equalization (#chars / #words)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                XGBoost classifiers heavily rely on <strong className="text-slate-900 dark:text-white">Word Density</strong>. AI models consistently produce longer average character counts per word (&gt; 5.2 chars). Swift AI's Word Density Equalizer automatically replaces multi-syllable AI jargon with 1-2 syllable grounded human vocabulary.
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                E.g., "comprehensively utilize" ➔ "fully use"
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 space-y-4 shadow-float">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/90 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold font-mono text-sm">
                03
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                POS Lexicon Rebalancing (Pronouns & Verbs)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                The research highlights a significant POS gap: synthetic text over-indexes on static nouns and adjectives while severely under-indexing on personal pronouns (<em className="text-slate-900 dark:text-white">we, you, it's, our</em>) and active verbs. Swift AI rebalances POS ratios back to human natural distributions.
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                Nouns &amp; Adjectives ➔ Active Action Verbs &amp; Contractions
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 space-y-4 shadow-float">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/90 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 font-bold font-mono text-sm">
                04
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                Predictability &amp; N-Gram Cluster Elimination
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                Detectors scan for predictable bigram/trigram sequences like <em className="text-slate-900 dark:text-white">"plays a pivotal role in"</em> or <em className="text-slate-900 dark:text-white">"advancements in"</em>. Our 250+ Predictability Breaker identifies these exact n-gram clusters and replaces them with unpredictable human idioms.
              </p>
              <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                High Perplexity + 0% Repetitive N-Grams
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-float space-y-6">
          <div className="space-y-1">
            <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
              Detector Classifier Features vs. Swift AI Counter-Measures
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Comparison between the 10 IEEE paper features and Swift AI's transformation modules.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-heading font-bold">
                  <th className="py-3 px-4">IEEE Paper Feature</th>
                  <th className="py-3 px-4">Classifier Weight (SHAP)</th>
                  <th className="py-3 px-4">Synthetic Text Trait (SGT)</th>
                  <th className="py-3 px-4">Swift AI Humanization Fix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300 font-sans">
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Coleman-Liau Index</td>
                  <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-mono font-bold">Rank 1 (Top Signal)</td>
                  <td className="py-3 px-4">Rigid 12–14+ grade level</td>
                  <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Adjusted to 7.5–9.5 human range</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Word Density (#char/#word)</td>
                  <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-mono font-bold">Rank 2 (Top Signal)</td>
                  <td className="py-3 px-4">High avg word length (&gt; 5.2 chars)</td>
                  <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Equalized with short 1-2 syllable words</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Text Error / Natural Variance</td>
                  <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-mono font-bold">Rank 3 Signal</td>
                  <td className="py-3 px-4">Sterile zero-flaw mechanics</td>
                  <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Injects natural parentheticals &amp; human flow</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Title &amp; Punctuation Count</td>
                  <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-mono font-bold">Rank 4 Signal</td>
                  <td className="py-3 px-4">Uniform repetitive punctuation</td>
                  <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Varied comma &amp; clause cadence</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">POS Pronoun &amp; Verb Count</td>
                  <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400 font-mono font-bold">Rank 5 Signal</td>
                  <td className="py-3 px-4">Noun-heavy, pronoun-scarce</td>
                  <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">Restores contractions &amp; personal pronouns</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Paper Attribution Card */}
        <div className="bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-emerald-900 dark:text-emerald-200">
          <div className="space-y-2">
            <span className="font-heading font-extrabold text-lg block text-emerald-950 dark:text-emerald-100">
              Academic Paper Reference
            </span>
            <p className="leading-relaxed max-w-2xl font-sans">
              <strong className="font-bold">"How to Detect AI-Generated Texts?"</strong> — Nguyen, T. T., Hatua, A., &amp; Sung, A. H. (2023). <em>IEEE International Conference on Machine Learning &amp; Applications</em>.
            </p>
          </div>
          <Link
            href="/#humanizer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all shrink-0 hover:scale-105"
          >
            <span>Test Humanizer Live</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
