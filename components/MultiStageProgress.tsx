"use client";

import { CheckCircle2, Loader2, Search, Wand2, ShieldCheck, FileDiff } from "lucide-react";
import { PipelineStageResult } from "@/lib/humanizerEngine";

interface MultiStageProgressProps {
  currentStage?: PipelineStageResult;
  isProcessing: boolean;
}

const STAGES = [
  { key: "pattern_analysis", label: "Pattern Analysis", icon: Search, desc: "Scanning for AI tells & rhythm" },
  { key: "rewrite", label: "Adaptive Rewrite", icon: Wand2, desc: "Varying cadence & natural contractions" },
  { key: "quality_check", label: "Quality Check", icon: ShieldCheck, desc: "Verifying multi-detector scores" },
  { key: "meaning_check", label: "Semantic Verification", icon: FileDiff, desc: "Ensuring 100% meaning preservation" },
];

export function MultiStageProgress({ currentStage, isProcessing }: MultiStageProgressProps) {
  if (!isProcessing && !currentStage) return null;

  const currentIdx = STAGES.findIndex(s => s.key === currentStage?.stage);

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-card transition-all space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Loader2 className="w-4 h-4 text-brand-600 dark:text-brand-400 animate-spin" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200 font-mono">
            Execution Pipeline
          </span>
        </div>
        <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400">
          {currentStage?.progress || 0}% Complete
        </span>
      </div>

      {/* Stepper Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        {STAGES.map((stage, idx) => {
          const Icon = stage.icon;
          const isDone = currentIdx > idx || currentStage?.status === "completed";
          const isActive = currentIdx === idx && currentStage?.status === "running";

          return (
            <div
              key={stage.key}
              className={`p-3 rounded-xl border transition-all ${
                isActive
                  ? "bg-brand-50 dark:bg-brand-950/80 border-brand-300 dark:border-brand-800 text-brand-900 dark:text-brand-200 shadow-2xs"
                  : isDone
                  ? "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300"
                  : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 opacity-60"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                ) : isActive ? (
                  <Loader2 className="w-4 h-4 text-brand-600 dark:text-brand-400 animate-spin shrink-0" />
                ) : (
                  <Icon className="w-4 h-4 shrink-0" />
                )}
                <span className="text-xs font-semibold truncate">{stage.label}</span>
              </div>
              <p className="text-[11px] leading-tight text-slate-500 dark:text-slate-400 line-clamp-1">
                {stage.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Progress Line */}
      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-300 rounded-full"
          style={{ width: `${currentStage?.progress || 0}%` }}
        />
      </div>
    </div>
  );
}
