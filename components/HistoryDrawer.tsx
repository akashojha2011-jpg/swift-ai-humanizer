"use client";

import { useState, useEffect } from "react";
import { X, Search, Clock, Trash2, ArrowUpRight, Copy, Check } from "lucide-react";
import { HumanizeResult } from "@/lib/humanizerEngine";

interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectHistoryItem?: (item: HumanizeResult) => void;
}

export function HistoryDrawer({ isOpen, onClose, onSelectHistoryItem }: HistoryDrawerProps) {
  const [history, setHistory] = useState<HumanizeResult[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResult, setSelectedResult] = useState<HumanizeResult | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("aura_humanize_history");
      if (saved) {
        try {
          setHistory(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to load history", e);
        }
      }
    }
  }, [isOpen]);

  const clearHistory = () => {
    if (confirm("Are you sure you want to clear all saved humanization history?")) {
      localStorage.removeItem("aura_humanize_history");
      setHistory([]);
      setSelectedResult(null);
    }
  };

  const filtered = history.filter(
    h =>
      h.originalText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.humanizedText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-2xl bg-white h-full border-l border-slate-200 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Clock className="w-5 h-5 text-brand-600" />
            <h3 className="font-heading font-bold text-lg text-slate-900">
              Saved Humanization History
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {history.length > 0 && (
              <button
                onClick={clearHistory}
                className="text-xs text-slate-500 hover:text-rose-600 p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors"
                title="Clear all history"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/50">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search past humanizations..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {selectedResult ? (
            <div className="space-y-4">
              <button
                onClick={() => setSelectedResult(null)}
                className="text-xs text-brand-600 hover:underline flex items-center gap-1 font-mono font-medium"
              >
                ← Back to History List
              </button>

              <div className="flex items-center justify-between bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <div>
                  <span className="text-xs font-mono text-slate-500">Score Improvement:</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-mono line-through text-rose-500">
                      {selectedResult.beforeMetrics.overallScore}% AI
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-700">
                      → {selectedResult.afterMetrics.humanScore}% Human
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(selectedResult.humanizedText)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-brand-600 text-white hover:bg-brand-700 transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy Output"}</span>
                </button>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono font-semibold text-slate-700 uppercase">
                  Original Input:
                </h4>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700 whitespace-pre-wrap font-sans">
                  {selectedResult.originalText}
                </div>

                <h4 className="text-xs font-mono font-semibold text-slate-700 uppercase pt-2">
                  Humanized Output:
                </h4>
                <div className="bg-white p-3.5 rounded-xl border border-emerald-300 text-xs text-slate-900 whitespace-pre-wrap font-sans shadow-2xs">
                  {selectedResult.humanizedText}
                </div>
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Clock className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-xs text-slate-500">No saved humanizations found.</p>
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedResult(item)}
                className="bg-slate-50 hover:bg-white border border-slate-200 rounded-xl p-4 transition-all cursor-pointer space-y-2 group shadow-2xs hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    {item.afterMetrics.humanScore}% Human Score
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-brand-600 transition-colors flex items-center gap-1">
                    Compare <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>

                <p className="text-xs text-slate-800 font-medium line-clamp-2 leading-relaxed">
                  {item.humanizedText}
                </p>

                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                  <span>{item.wordCountAfter} words</span>
                  <span>Preservation: {item.semanticPreservationScore}%</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50/50 text-center">
          <p className="text-[11px] text-slate-500">
            History is automatically saved in your browser local storage.
          </p>
        </div>
      </div>
    </div>
  );
}
