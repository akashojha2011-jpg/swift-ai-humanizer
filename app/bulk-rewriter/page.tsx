"use client";

import { useState } from "react";
import { BulkMode } from "@/components/BulkMode";
import { HumanizeTone, HumanizeMode } from "@/lib/humanizerEngine";
import { Layers, ChevronDown, CheckCircle2, FileText } from "lucide-react";

export default function BulkRewriterPage() {
  const [tone, setTone] = useState<HumanizeTone>("casual");
  const [mode, setMode] = useState<HumanizeMode>("quick");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 font-sans">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white">
          Bulk AI Text Rewriter — Humanize Full Articles &amp; Documents Free
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          Swift AI Bulk Rewriter converts multi-paragraph documents and .docx files into natural, human-written text in a single pass. It preserves headers, bullet points, and formatting across your entire batch while bypassing AI detectors like Turnitin and GPTZero.
        </p>
      </div>

      {/* Control Bar for Batch Tone & Mode */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-brand-600 dark:text-emerald-400" />
          <span className="font-heading font-bold text-sm text-slate-900 dark:text-white">
            Batch Rewriter Controls
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex items-center bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 shadow-2xs">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 mr-1.5 shrink-0">Tone:</span>
            <select
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

      {/* Crawlable Informational Explainer */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 space-y-6 shadow-xs">
        <h2 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">
          How Bulk AI Text Rewriting Works
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          Bulk AI rewriting splits long documents into contextual blocks, processing each section while maintaining consistent terminology, narrative flow, and paragraph hierarchy. This ensures long-form essays, ebooks, and blog series pass AI detection without losing coherence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Multi-Paragraph Processing</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Rewrite thousands of words simultaneously across multiple article drafts without copying section by section.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Word Document (.docx) Support</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Upload Microsoft Word files directly to convert AI text into natural human writing with formatting preserved.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Batch Tone Uniformity</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Apply a single writing tone across all uploaded sections to maintain a cohesive voice throughout your entire project.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
