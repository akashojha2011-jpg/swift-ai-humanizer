import { Check, X } from "lucide-react";

export function ComparisonTable() {
  const rows = [
    {
      feature: "Preserves Bullets, Numbers & Bold Formatting",
      swift: true,
      superhumanizer: false,
      aihumanize: false,
      cleverhumanizer: false,
      rehumanize: false,
      aurawrite: false,
      highlight: true,
    },
    {
      feature: "IEEE Research-Backed Methodology (Nguyen et al., 2023)",
      swift: true,
      superhumanizer: false,
      aihumanize: false,
      cleverhumanizer: false,
      rehumanize: false,
      aurawrite: false,
      highlight: true,
    },
    {
      feature: "Rich Text HTML Clipboard Copying",
      swift: true,
      superhumanizer: true,
      aihumanize: false,
      cleverhumanizer: false,
      rehumanize: false,
      aurawrite: false,
    },
    {
      feature: "100% Free Unlimited Word Rewriting (No Sign-Up)",
      swift: true,
      superhumanizer: true,
      aihumanize: false,
      cleverhumanizer: false,
      rehumanize: true,
      aurawrite: false,
    },
    {
      feature: "Bypasses Turnitin 2026 & GPTZero v2",
      swift: true,
      superhumanizer: true,
      aihumanize: true,
      cleverhumanizer: true,
      rehumanize: true,
      aurawrite: true,
    },
    {
      feature: "5 Specialized Writing Tones (Academic, Casual, etc.)",
      swift: true,
      superhumanizer: false,
      aihumanize: true,
      cleverhumanizer: false,
      rehumanize: false,
      aurawrite: false,
    },
    {
      feature: "Bulk File Upload (.docx/.txt Support)",
      swift: true,
      superhumanizer: false,
      aihumanize: true,
      cleverhumanizer: false,
      rehumanize: false,
      aurawrite: false,
    },
    {
      feature: "Zero Data Logging & Ephemeral Privacy",
      swift: true,
      superhumanizer: true,
      aihumanize: true,
      cleverhumanizer: true,
      rehumanize: true,
      aurawrite: true,
    },
  ];

  return (
    <section className="py-12 border-t border-slate-200/80 dark:border-slate-800 space-y-8 max-w-6xl mx-auto font-sans">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
          What Makes Swift AI Humanizer Different From Competitors
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          Swift AI Humanizer is the only free AI text humanizer that combines line-by-line rich text formatting preservation with an IEEE research-backed 10-signal NLP transformation engine. Unlike competing tools that strip formatting or enforce paywalls, Swift AI delivers instant, undetectable rewriting at zero cost.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-4 sm:p-6 shadow-float overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse min-w-[780px]">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/90 text-slate-900 dark:text-white font-heading font-bold text-xs">
              <th className="py-4 px-3 w-1/3">Feature / Capability</th>
              <th className="py-4 px-3 text-center bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 rounded-t-xl font-extrabold text-xs sm:text-sm border-x border-emerald-200 dark:border-emerald-800/80">
                Swift AI
              </th>
              <th className="py-4 px-2 text-center text-slate-600 dark:text-slate-400 font-semibold">Superhumanizer.ai</th>
              <th className="py-4 px-2 text-center text-slate-600 dark:text-slate-400 font-semibold">AIHumanize.io</th>
              <th className="py-4 px-2 text-center text-slate-600 dark:text-slate-400 font-semibold">CleverHumanizer.ai</th>
              <th className="py-4 px-2 text-center text-slate-600 dark:text-slate-400 font-semibold">ReHumanize.io</th>
              <th className="py-4 px-2 text-center text-slate-600 dark:text-slate-400 font-semibold">AuraWriteAI.com</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-sans">
            {rows.map((r, i) => (
              <tr
                key={i}
                className={r.highlight ? "bg-emerald-50/50 dark:bg-emerald-950/30 font-bold" : "hover:bg-slate-50/50 dark:hover:bg-slate-950/50"}
              >
                <td className="py-3 px-3 font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-between gap-2">
                  <span>{r.feature}</span>
                  {r.highlight && (
                    <span className="text-[9px] font-mono font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0">
                      Unique Feature
                    </span>
                  )}
                </td>
                <td className="py-3 px-3 text-center bg-emerald-50/40 dark:bg-emerald-950/20 border-x border-emerald-200 dark:border-emerald-800/40 font-bold">
                  {r.swift ? (
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-2xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  ) : (
                    <X className="w-4 h-4 text-slate-300 mx-auto" />
                  )}
                </td>
                <td className="py-3 px-2 text-center">
                  {r.superhumanizer ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  ) : (
                    <X className="w-4 h-4 text-slate-300 dark:text-slate-700 mx-auto" />
                  )}
                </td>
                <td className="py-3 px-2 text-center">
                  {r.aihumanize ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  ) : (
                    <X className="w-4 h-4 text-slate-300 dark:text-slate-700 mx-auto" />
                  )}
                </td>
                <td className="py-3 px-2 text-center">
                  {r.cleverhumanizer ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  ) : (
                    <X className="w-4 h-4 text-slate-300 dark:text-slate-700 mx-auto" />
                  )}
                </td>
                <td className="py-3 px-2 text-center">
                  {r.rehumanize ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  ) : (
                    <X className="w-4 h-4 text-slate-300 dark:text-slate-700 mx-auto" />
                  )}
                </td>
                <td className="py-3 px-2 text-center">
                  {r.aurawrite ? (
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
