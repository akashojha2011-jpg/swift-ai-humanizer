"use client";

import { useState } from "react";
import { BulkMode } from "@/components/BulkMode";
import { HumanizeTone, HumanizeMode } from "@/lib/humanizerEngine";
import { Layers, ChevronDown } from "lucide-react";

export default function BulkRewriterPage() {
  const [tone, setTone] = useState<HumanizeTone>("casual");
  const [mode, setMode] = useState<HumanizeMode>("quick");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 font-sans">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white">
          Bulk Article & Document Rewriter
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Upload Word documents (.docx, .txt) or paste multiple article snippets to humanize full batches simultaneously.
        </p>
      </div>

      {/* Control Bar for Batch Tone & Mode */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-brand-600 dark:text-emerald-400" />
          <span className="font-heading font-bold text-sm text-slate-900 dark:text-white">
            Batch Settings
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value as HumanizeTone)}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2 pr-8 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer appearance-none shadow-2xs"
            >
              <option value="casual">Tone: Conversational / General</option>
              <option value="academic">Tone: Academic Paper</option>
              <option value="professional">Tone: Professional Business</option>
              <option value="marketing">Tone: Persuasive Marketing</option>
              <option value="creative">Tone: Creative Story</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
          </div>

          <div className="flex items-center bg-slate-100 dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setMode("quick")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                mode === "quick"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              Super Lite
            </button>
            <button
              onClick={() => setMode("deep")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
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
