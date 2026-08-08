"use client";

import { useState } from "react";
import { ShieldCheck, Zap, Sparkles, CheckCircle } from "lucide-react";

interface BenchmarkItem {
  name: string;
  score: number;
  label?: string;
  color: string;
  highlight?: boolean;
}

interface BenchmarkMetric {
  title: string;
  description: string;
  items: BenchmarkItem[];
}

export function DifferentiatorsChart() {
  const [activeMetric, setActiveMetric] = useState<"bypass" | "meaning" | "speed">("bypass");

  const metricsData: Record<"bypass" | "meaning" | "speed", BenchmarkMetric> = {
    bypass: {
      title: "Detection Pass Rate vs Modern AI Classifiers",
      description: "Tested against 5,000 ChatGPT-4o and Claude 3.5 Sonnet samples.",
      items: [
        { name: "Swift AI Humanizer", score: 98, color: "bg-brand-600 dark:bg-emerald-500", highlight: true },
        { name: "Superhumanizer", score: 95, color: "bg-slate-700 dark:bg-slate-600" },
        { name: "Undetectable.ai", score: 89, color: "bg-slate-500 dark:bg-slate-600" },
        { name: "StealthGPT", score: 86, color: "bg-slate-400 dark:bg-slate-600" },
      ],
    },
    meaning: {
      title: "Semantic & Core Fact Preservation",
      description: "Measures whether technical facts and bullet formatting stay unchanged.",
      items: [
        { name: "Swift AI Humanizer", score: 99, color: "bg-brand-600 dark:bg-emerald-500", highlight: true },
        { name: "Superhumanizer", score: 96, color: "bg-slate-700 dark:bg-slate-600" },
        { name: "Undetectable.ai", score: 82, color: "bg-slate-500 dark:bg-slate-600" },
        { name: "StealthGPT", score: 79, color: "bg-slate-400 dark:bg-slate-600" },
      ],
    },
    speed: {
      title: "Average Latency (Seconds per 500 Words)",
      description: "Lower is faster. Swift AI delivers instant line-by-line processing.",
      items: [
        { name: "Swift AI Humanizer", score: 95, label: "1.2s", color: "bg-brand-600 dark:bg-emerald-500", highlight: true },
        { name: "Superhumanizer", score: 80, label: "2.4s", color: "bg-slate-700 dark:bg-slate-600" },
        { name: "Undetectable.ai", score: 55, label: "5.1s", color: "bg-slate-500 dark:bg-slate-600" },
        { name: "StealthGPT", score: 40, label: "7.8s", color: "bg-slate-400 dark:bg-slate-600" },
      ],
    },
  };

  const current = metricsData[activeMetric];

  return (
    <section className="py-12 border-t border-slate-200/80 dark:border-slate-800 space-y-8 font-sans">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
          Why Swift AI Outperforms Paid Tools
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Compare real-world accuracy, meaning retention, and speed across top humanizers.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-float max-w-4xl mx-auto space-y-6 transition-colors">
        {/* Metric Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-950 rounded-2xl border border-slate-200/80 dark:border-slate-800">
          <button
            onClick={() => setActiveMetric("bypass")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeMetric === "bypass"
                ? "bg-white dark:bg-slate-800 text-brand-600 dark:text-emerald-400 shadow-2xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>AI Pass Rate</span>
          </button>

          <button
            onClick={() => setActiveMetric("meaning")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeMetric === "meaning"
                ? "bg-white dark:bg-slate-800 text-brand-600 dark:text-emerald-400 shadow-2xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Fact & Formatting Retention</span>
          </button>

          <button
            onClick={() => setActiveMetric("speed")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeMetric === "speed"
                ? "bg-white dark:bg-slate-800 text-brand-600 dark:text-emerald-400 shadow-2xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Rewrite Speed</span>
          </button>
        </div>

        {/* Header info */}
        <div className="space-y-1">
          <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
            {current.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {current.description}
          </p>
        </div>

        {/* Animated Bar Chart */}
        <div className="space-y-4 pt-2">
          {current.items.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className={`font-bold flex items-center gap-1.5 ${item.highlight ? "text-brand-600 dark:text-emerald-400 font-extrabold" : "text-slate-700 dark:text-slate-300"}`}>
                  {item.name}
                  {item.highlight && <CheckCircle className="w-3.5 h-3.5 text-brand-600 dark:text-emerald-400" />}
                </span>
                <span className="font-mono font-bold text-slate-600 dark:text-slate-400">
                  {item.label || `${item.score}%`}
                </span>
              </div>

              <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${item.color}`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
