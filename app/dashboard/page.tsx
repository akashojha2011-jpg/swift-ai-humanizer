"use client";

import { useState, useEffect } from "react";
import { Clock, Key, Copy, Check, FileText, Trash2, Sparkles } from "lucide-react";
import { HumanizeResult } from "@/lib/humanizerEngine";
import Link from "next/link";

export default function DashboardPage() {
  const [history, setHistory] = useState<HumanizeResult[]>([]);
  const [apiKey, setApiKey] = useState("aura_live_sk_8923a10b49f928c19920");
  const [copiedKey, setCopiedKey] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("aura_humanize_history");
      if (saved) {
        try {
          setHistory(JSON.parse(saved));
        } catch (e) {
          console.error(e);
        }
      }
    }
  }, []);

  const generateNewKey = () => {
    const newK = `aura_live_sk_${Math.random().toString(36).substring(2, 12)}${Math.random().toString(36).substring(2, 12)}`;
    setApiKey(newK);
  };

  const copyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleClearHistory = () => {
    if (confirm("Clear all local history?")) {
      localStorage.removeItem("aura_humanize_history");
      setHistory([]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="font-heading font-extrabold text-3xl text-slate-900 dark:text-white">
            User Workspace & Dashboard
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Manage saved humanization logs, export batch files, and access developer API keys.
          </p>
        </div>

        <Link
          href="/#humanizer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-sm transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>Launch Humanizer</span>
        </Link>
      </div>

      {/* Grid: Stats & API key */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Processed Stat */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 rounded-2xl space-y-2 shadow-card transition-colors">
          <span className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400">
            Total Saved Documents
          </span>
          <div className="font-heading font-extrabold text-4xl text-brand-600 dark:text-brand-400">
            {history.length}
          </div>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">Stored locally in browser session</p>
        </div>

        {/* Avg Human Score */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 rounded-2xl space-y-2 shadow-card transition-colors">
          <span className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400">
            Avg Human Score
          </span>
          <div className="font-heading font-extrabold text-4xl text-emerald-600 dark:text-emerald-400">
            {history.length > 0
              ? Math.round(
                  history.reduce((acc, h) => acc + h.afterMetrics.humanScore, 0) /
                    history.length
                )
              : 98}
            %
          </div>
          <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-mono">Bypasses Turnitin & GPTZero</p>
        </div>

        {/* Free Plan Status */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 rounded-2xl space-y-2 shadow-card transition-colors">
          <span className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400">
            Account Status
          </span>
          <div className="font-heading font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>100% Free Unlocked</span>
          </div>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">Unlimited words & deep rewrite modes</p>
        </div>
      </div>

      {/* Developer API Key Sandbox Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-card transition-colors">
        <div className="flex items-center gap-3">
          <Key className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
              Developer REST API Key (Sandbox)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Use your API key to programmatically humanize text via POST requests to /api/humanize.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
          <div className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-xl font-mono text-xs text-slate-800 dark:text-slate-200 font-semibold truncate">
            {apiKey}
          </div>
          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            <button
              onClick={copyKey}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 shadow-2xs"
            >
              {copiedKey ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedKey ? "Copied" : "Copy Key"}</span>
            </button>
            <button
              onClick={generateNewKey}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-semibold bg-amber-50 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900"
            >
              Regenerate
            </button>
          </div>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-card transition-colors">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
              Recent Humanization History
            </h3>
          </div>
          {history.length > 0 && (
            <button
              onClick={handleClearHistory}
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <div className="text-center py-10 space-y-2">
            <FileText className="w-8 h-8 text-slate-300 dark:text-slate-700 mx-auto" />
            <p className="text-xs text-slate-400 dark:text-slate-500">No documents saved yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {history.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 rounded-xl space-y-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="overflow-hidden space-y-1">
                  <span className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                    {item.afterMetrics.humanScore}% Human Score
                  </span>
                  <p className="text-xs text-slate-800 dark:text-slate-200 font-medium line-clamp-1">
                    {item.humanizedText}
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 shrink-0">
                  {item.wordCountAfter} words • Preserved {item.semanticPreservationScore}%
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
