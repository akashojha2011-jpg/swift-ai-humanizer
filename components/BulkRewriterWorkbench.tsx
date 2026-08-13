"use client";

import { useState } from "react";
import { BulkMode } from "@/components/BulkMode";
import { HumanizeTone, HumanizeMode } from "@/lib/humanizerEngine";
import { Layers, ChevronDown } from "lucide-react";

export function BulkRewriterWorkbench() {
  const [tone, setTone] = useState<HumanizeTone>("casual");
  const [mode, setMode] = useState<HumanizeMode>("quick");

  return (
    <div className="space-y-6">
      {/* Control Bar for Batch Tone & Mode */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm font-sans">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-brand-600 dark:text-emerald-400" />
          <span className="font-heading font-bold text-sm text-slate-900 dark:text-white">
            Batch Rewriter Controls
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex items-center bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 shadow-2xs">
            <label htmlFor="bulk-tone-select" className="text-xs font-bold text-slate-400 dark:text-slate-500 mr-1.5 shrink-0">
              Tone:
            </label>
            <select
              id="bulk-tone-select"
              aria-label="Select batch writing tone"
              value={tone}
              onChange={(e) => setTone(e.target.value as HumanizeTone)}
              className="bg-transparent text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer appearance-none pr-6"
            >
              <option value="casual" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Conversational / General</option>
              <option value="academic" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Academic Paper</option>
              <option value="professional" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Professional Business</option>
              <option value="marketing" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Persuasive Marketing</option>
              <option value="creative" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Creative Story</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
          </div>

          <div className="flex items-center bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setMode("quick")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                mode === "quick"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              Super Lite
            </button>
            <button
              onClick={() => setMode("deep")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                mode === "deep"
                  ? "bg-brand-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              Super Ultra
            </button>
          </div>
        </div>
      </div>

      {/* Main Bulk Workbench */}
      <BulkMode tone={tone} mode={mode} />
    </div>
  );
}
