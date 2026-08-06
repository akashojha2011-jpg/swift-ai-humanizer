"use client";

import { computeWordDiff, DiffPart } from "@/lib/semanticDiff";

interface DiffViewerProps {
  originalText: string;
  humanizedText: string;
  viewMode?: "inline" | "sideBySide";
}

export function DiffViewer({ originalText, humanizedText, viewMode = "inline" }: DiffViewerProps) {
  const diffParts: DiffPart[] = computeWordDiff(originalText, humanizedText);

  if (viewMode === "sideBySide") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono leading-relaxed">
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-2 overflow-y-auto max-h-96">
          <span className="text-[11px] uppercase font-mono font-bold text-rose-600 dark:text-rose-400 block pb-1 border-b border-slate-200 dark:border-slate-800">
            Original Text (AI Input)
          </span>
          <p className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap">{originalText}</p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-2 overflow-y-auto max-h-96">
          <span className="text-[11px] uppercase font-mono font-bold text-emerald-600 dark:text-emerald-400 block pb-1 border-slate-200 dark:border-slate-800 border-b">
            Humanized Text (Output)
          </span>
          <p className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap">{humanizedText}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-xs leading-relaxed whitespace-pre-wrap font-sans max-h-96 overflow-y-auto">
      {diffParts.map((part, idx) => {
        if (part.added) {
          return (
            <span
              key={idx}
              className="bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 px-1 py-0.5 rounded underline font-medium"
            >
              {part.value}
            </span>
          );
        }
        if (part.removed) {
          return (
            <span
              key={idx}
              className="bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 line-through opacity-70 px-1 py-0.5 rounded mx-0.5"
            >
              {part.value}
            </span>
          );
        }
        return <span key={idx} className="text-slate-800 dark:text-slate-200">{part.value}</span>;
      })}
    </div>
  );
}
