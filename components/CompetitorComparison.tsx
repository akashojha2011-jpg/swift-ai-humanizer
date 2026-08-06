"use client";

import { Check, X, Shield, Sparkles } from "lucide-react";

export function CompetitorComparison() {
  const comparisonData = [
    {
      feature: "Preserves Bullets, Numbers & Bold Text",
      swift: true,
      superhumanizer: false,
      undetectable: false,
      stealthgpt: false,
    },
    {
      feature: "Rich Text Clipboard Support ('Copy Formatted')",
      swift: true,
      superhumanizer: false,
      undetectable: false,
      stealthgpt: false,
    },
    {
      feature: "100% Free Unlimited Usage",
      swift: true,
      superhumanizer: false,
      undetectable: false,
      stealthgpt: false,
    },
    {
      feature: "Bypasses Turnitin 2026 & GPTZero v2",
      swift: true,
      superhumanizer: true,
      undetectable: true,
      stealthgpt: true,
    },
    {
      feature: "5 Specialized Writing Tones (Academic, Casual, etc.)",
      swift: true,
      superhumanizer: false,
      undetectable: true,
      stealthgpt: false,
    },
    {
      feature: "Bulk File Upload (.docx / .txt)",
      swift: true,
      superhumanizer: false,
      undetectable: false,
      stealthgpt: false,
    },
    {
      feature: "Zero Account Sign-Up Required",
      swift: true,
      superhumanizer: false,
      undetectable: false,
      stealthgpt: false,
    },
  ];

  return (
    <section className="py-12 border-t border-slate-200/80 dark:border-slate-800 space-y-8 font-sans">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
          Swift AI Humanizer vs Competitors
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          See how Swift AI compares to paid humanization tools.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-4 sm:p-6 shadow-float max-w-5xl mx-auto overflow-x-auto transition-colors">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800">
              <th className="p-4 text-slate-900 dark:text-white font-heading font-bold text-sm w-1/3">
                Feature / Metric
              </th>
              <th className="p-4 text-brand-700 dark:text-emerald-300 bg-brand-50/80 dark:bg-emerald-950/60 border-x border-brand-200 dark:border-emerald-800/60 text-center w-1/6 font-bold rounded-t-xl">
                Swift AI
              </th>
              <th className="p-4 text-slate-700 dark:text-slate-300 text-center w-1/6 font-semibold">
                Superhumanizer
              </th>
              <th className="p-4 text-slate-700 dark:text-slate-300 text-center w-1/6 font-semibold">
                Undetectable.ai
              </th>
              <th className="p-4 text-slate-700 dark:text-slate-300 text-center w-1/6 font-semibold">
                StealthGPT
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {comparisonData.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/40 transition-colors">
                <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">
                  {row.feature}
                </td>
                <td className="p-4 text-center bg-brand-50/30 dark:bg-emerald-950/40 border-x border-brand-200/40 dark:border-emerald-900/50">
                  {row.swift ? (
                    <Check className="w-4 h-4 text-brand-600 dark:text-emerald-400 mx-auto stroke-[3]" />
                  ) : (
                    <X className="w-4 h-4 text-slate-400 mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center">
                  {row.superhumanizer ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  ) : (
                    <X className="w-4 h-4 text-slate-300 dark:text-slate-700 mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center">
                  {row.undetectable ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  ) : (
                    <X className="w-4 h-4 text-slate-300 dark:text-slate-700 mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center">
                  {row.stealthgpt ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  ) : (
                    <X className="w-4 h-4 text-slate-300 dark:text-slate-700 mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
