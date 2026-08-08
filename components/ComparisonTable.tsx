import { Check, X } from "lucide-react";

export function ComparisonTable() {
  const rows = [
    {
      feature: "Preserves Bullets, Numbers & Bold Text",
      swift: true,
      superhumanizer: false,
      undetectable: false,
      stealth: false,
    },
    {
      feature: "Rich Text Clipboard Support",
      swift: true,
      superhumanizer: true,
      undetectable: false,
      stealth: false,
    },
    {
      feature: "100% Free Unlimited Usage",
      swift: true,
      superhumanizer: true,
      undetectable: false,
      stealth: false,
    },
    {
      feature: "Bypasses Turnitin 2026 & GPTZero v2",
      swift: true,
      superhumanizer: true,
      undetectable: true,
      stealth: false,
    },
    {
      feature: "5 Specialized Writing Tones",
      swift: true,
      superhumanizer: false,
      undetectable: false,
      stealth: false,
    },
    {
      feature: "Bulk File Upload (.docx/.txt)",
      swift: true,
      superhumanizer: false,
      undetectable: true,
      stealth: false,
    },
    {
      feature: "Zero Account Sign-Up Required",
      swift: true,
      superhumanizer: true,
      undetectable: false,
      stealth: true,
    },
    {
      feature: "Research-Based Methodology (IEEE)",
      swift: true,
      superhumanizer: false,
      undetectable: false,
      stealth: false,
      highlight: true,
    },
  ];

  return (
    <section className="py-12 border-t border-slate-200/80 dark:border-slate-800 space-y-8 max-w-6xl mx-auto font-sans">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
          Why Swift AI Outperforms Competitors
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-300">
          Feature-by-feature comparison against major AI humanizer tools.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-8 shadow-float overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse min-w-[650px]">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/90 text-slate-900 dark:text-white font-heading font-bold text-xs">
              <th className="py-4 px-4 w-2/5">Feature / Metric</th>
              <th className="py-4 px-4 text-center bg-brand-50/80 dark:bg-emerald-950/60 text-brand-700 dark:text-emerald-300 rounded-t-xl font-extrabold text-sm border-x border-brand-200 dark:border-emerald-800/60">
                Swift AI
              </th>
              <th className="py-4 px-4 text-center text-slate-600 dark:text-slate-400">Superhumanizer</th>
              <th className="py-4 px-4 text-center text-slate-600 dark:text-slate-400">Undetectable.ai</th>
              <th className="py-4 px-4 text-center text-slate-600 dark:text-slate-400">StealthGPT</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-sans">
            {rows.map((r, i) => (
              <tr
                key={i}
                className={r.highlight ? "bg-emerald-50/60 dark:bg-emerald-950/40 font-bold" : "hover:bg-slate-50/50 dark:hover:bg-slate-950/50"}
              >
                <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span>{r.feature}</span>
                  {r.highlight && (
                    <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      IEEE Only
                    </span>
                  )}
                </td>
                <td className="py-3.5 px-4 text-center bg-brand-50/40 dark:bg-emerald-950/30 border-x border-brand-200 dark:border-emerald-800/40 font-bold">
                  {r.swift ? (
                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-2xs">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                  ) : (
                    <X className="w-4 h-4 text-slate-300 mx-auto" />
                  )}
                </td>
                <td className="py-3.5 px-4 text-center">
                  {r.superhumanizer ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  ) : (
                    <X className="w-4 h-4 text-slate-300 dark:text-slate-700 mx-auto" />
                  )}
                </td>
                <td className="py-3.5 px-4 text-center">
                  {r.undetectable ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  ) : (
                    <X className="w-4 h-4 text-slate-300 dark:text-slate-700 mx-auto" />
                  )}
                </td>
                <td className="py-3.5 px-4 text-center">
                  {r.stealth ? (
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
