"use client";

import { useState } from "react";
import { Search, AlertTriangle, ArrowRight, Wand2 } from "lucide-react";
import { analyzeTextAIDetection, AIDetectionMetrics } from "@/lib/aiDetector";
import Link from "next/link";

export default function AIDetectorPage() {
  const [input, setInput] = useState(
    "Furthermore, it is important to note that artificial intelligence plays a crucial role in modern educational paradigms. In conclusion, utilizing cutting-edge algorithms has the ability to revolutionize learning."
  );
  const [metrics, setMetrics] = useState<AIDetectionMetrics | null>(null);

  const handleScan = () => {
    if (!input.trim()) return;
    const res = analyzeTextAIDetection(input);
    setMetrics(res);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 font-sans">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white">
          Free AI Detector & Risk Checker
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Test any text against simulated scoring matrices for GPTZero v2, Turnitin 2026, Originality.ai, and Copyleaks.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl space-y-6 shadow-float">
        <div className="space-y-2">
          <label className="font-heading font-extrabold text-sm text-slate-900 dark:text-white flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-brand-600 dark:text-emerald-400" />
              <span>Paste Text to Scan</span>
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {(input.match(/\b\w+\b/g) || []).length} words
            </span>
          </label>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your essay or AI text to check detection risk..."
            className="w-full h-48 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-500 resize-none font-sans leading-relaxed"
          />
        </div>

        <button
          onClick={handleScan}
          disabled={!input.trim()}
          className="w-full py-3.5 rounded-full font-heading font-bold text-xs text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-40 shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
        >
          <Search className="w-4 h-4" />
          <span>Run AI Detector Scan</span>
        </button>

        {/* Scan Results */}
        {metrics && (
          <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            {/* Overall Score Banner */}
            <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
              metrics.overallScore > 40
                ? "bg-rose-50 dark:bg-rose-950/80 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200"
                : "bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
            }`}>
              <div className="space-y-1 text-center sm:text-left">
                <div className="font-heading font-extrabold text-2xl">
                  {metrics.overallScore > 40 ? "High AI Detection Risk" : "100% Human Passed"}
                </div>
                <p className="text-xs opacity-90">
                  {metrics.overallScore > 40
                    ? `Found ${metrics.tells.length} robotic AI tell phrases that will flag on Turnitin & GPTZero.`
                    : "Writing exhibits natural burstiness and perplexity."}
                </p>
              </div>

              <div className="text-center shrink-0">
                <div className="font-heading font-extrabold text-4xl">
                  {metrics.overallScore}%
                </div>
                <div className="text-[10px] font-mono font-semibold text-slate-500">AI Probability</div>
              </div>
            </div>

            {/* Individual Detector Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-1">
                <span className="text-[11px] font-mono text-slate-500">GPTZero v2</span>
                <div className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                  {metrics.detectors.gptZero}% AI
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-1">
                <span className="text-[11px] font-mono text-slate-500">Turnitin 2026</span>
                <div className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                  {metrics.detectors.turnitin}% AI
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-1">
                <span className="text-[11px] font-mono text-slate-500">Originality.ai</span>
                <div className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                  {metrics.detectors.originality}% AI
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-1">
                <span className="text-[11px] font-mono text-slate-500">Copyleaks</span>
                <div className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                  {metrics.detectors.copyleaks}% AI
                </div>
              </div>
            </div>

            {/* Flagged AI Tells */}
            {metrics.tells.length > 0 && (
              <div className="space-y-3 bg-amber-50/60 dark:bg-amber-950/40 p-5 rounded-2xl border border-amber-200 dark:border-amber-900/60">
                <h4 className="font-heading font-bold text-xs text-amber-900 dark:text-amber-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Flagged AI Tell Phrases</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {metrics.tells.map((tell, idx) => (
                    <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300">
                      "{tell.type}" ({tell.description})
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA to Humanize */}
            <div className="text-center pt-2">
              <Link
                href="/#humanizer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-heading font-bold text-xs text-white bg-brand-600 hover:bg-brand-700 shadow-md transition-all hover:scale-105"
              >
                <Wand2 className="w-4 h-4" />
                <span>Humanize This Text Free</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
