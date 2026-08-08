"use client";

import { AIDetectionMetrics } from "@/lib/aiDetector";
import { ShieldCheck, AlertCircle, ArrowDownRight, Award, Zap, RefreshCw, BarChart2 } from "lucide-react";

interface DetectorMetricsProps {
  before?: AIDetectionMetrics;
  after?: AIDetectionMetrics;
}

export function DetectorMetrics({ before, after }: DetectorMetricsProps) {
  if (!before && !after) return null;

  const detectors = [
    { name: "GPTZero", key: "gptZero" as const },
    { name: "Turnitin", key: "turnitin" as const },
    { name: "Originality.ai", key: "originality" as const },
    { name: "Copyleaks", key: "copyleaks" as const },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-card space-y-5 transition-colors">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
              AI Detection Benchmark Results
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Simulated multi-model analysis before & after humanization
          </p>
        </div>

        {after && (
          <div className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 px-3.5 py-1.5 rounded-xl">
            <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <div>
              <span className="text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-mono block">
                Human Confidence
              </span>
              <span className="font-heading font-extrabold text-lg text-emerald-700 dark:text-emerald-300">
                {after.humanScore}% Human
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 3 Pillars Breakdown Cards */}
      {after && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-slate-50/90 dark:bg-slate-950/90 border border-slate-200/80 dark:border-slate-800 rounded-xl text-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-700 dark:text-emerald-300 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">Unpredictability</span>
              <span className="font-bold text-slate-900 dark:text-white">{after.perplexityScore}% High Perplexity</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-emerald-950/80 border border-brand-200 dark:border-emerald-800 flex items-center justify-center text-brand-700 dark:text-emerald-300 shrink-0">
              <BarChart2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">Sentence Cadence</span>
              <span className="font-bold text-slate-900 dark:text-white">{after.burstinessScore}% High Burstiness</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-700 dark:text-emerald-300 shrink-0">
              <RefreshCw className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">Repetitiveness</span>
              <span className="font-bold text-emerald-700 dark:text-emerald-400">0% AI N-Grams</span>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Detectors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {detectors.map(det => {
          const scoreBefore = before?.detectors[det.key] || 0;
          const scoreAfter = after ? after.detectors[det.key] : scoreBefore;

          const isSafe = scoreAfter <= 15;
          const isWarning = scoreAfter > 15 && scoreAfter <= 35;

          return (
            <div
              key={det.name}
              className="bg-slate-50/80 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 rounded-xl p-3.5 space-y-2 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">{det.name}</span>
                {after && (
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isSafe
                      ? "bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                      : isWarning
                      ? "bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800"
                      : "bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800"
                  }`}>
                    {scoreAfter}% AI
                  </span>
                )}
              </div>

              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden flex">
                  {before && after ? (
                    <>
                      <div
                        className="h-full bg-rose-400 transition-all"
                        style={{ width: `${scoreAfter}%` }}
                      />
                      <div
                        className="h-full bg-emerald-500 transition-all"
                        style={{ width: `${Math.max(0, scoreBefore - scoreAfter)}%` }}
                      />
                    </>
                  ) : (
                    <div
                      className="h-full bg-rose-500 transition-all"
                      style={{ width: `${scoreBefore}%` }}
                    />
                  )}
                </div>

                {before && after && (
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
                    <span className="line-through text-rose-500">{scoreBefore}% AI</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center">
                      <ArrowDownRight className="w-3 h-3 inline" /> {scoreBefore - scoreAfter}%
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tells List */}
      {before && before.tells.length > 0 && (
        <div className="pt-1">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-2 font-semibold">
            Detected AI Tells ({before.tells.length}):
          </span>
          <div className="flex flex-wrap gap-2">
            {before.tells.map((tell, i) => (
              <span
                key={i}
                className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 flex items-center gap-1.5"
              >
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                {tell.type}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
