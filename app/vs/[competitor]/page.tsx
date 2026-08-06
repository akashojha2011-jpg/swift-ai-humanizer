import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, X, Shield, Sparkles, ArrowRight } from "lucide-react";
import { COMPETITORS_DATA } from "@/lib/competitorData";

export async function generateStaticParams() {
  return Object.keys(COMPETITORS_DATA).map((slug) => ({ competitor: slug }));
}

export async function generateMetadata({ params }: { params: { competitor: string } }) {
  const comp = COMPETITORS_DATA[params.competitor];
  if (!comp) return {};
  return {
    title: `Swift AI Humanizer vs ${comp.name} — Feature & Accuracy Comparison`,
    description: comp.tagline,
  };
}

export default function CompetitorComparisonPage({ params }: { params: { competitor: string } }) {
  const comp = COMPETITORS_DATA[params.competitor];
  if (!comp) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white">
          Swift AI Humanizer vs {comp.name}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {comp.heroText}
        </p>
      </div>

      {/* Comparison Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-float overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800">
              <th className="p-4 text-slate-900 dark:text-white font-heading font-bold text-sm w-1/2">
                Feature / Performance
              </th>
              <th className="p-4 text-brand-700 dark:text-emerald-300 bg-brand-50/80 dark:bg-emerald-950/60 border-x border-brand-200 dark:border-emerald-800/60 text-center w-1/4 font-bold rounded-t-xl">
                Swift AI Humanizer
              </th>
              <th className="p-4 text-slate-700 dark:text-slate-300 text-center w-1/4 font-semibold">
                {comp.name}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {comp.features.map((row, idx) => (
              <tr key={idx}>
                <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">
                  {row.feature}
                </td>
                <td className="p-4 text-center bg-brand-50/30 dark:bg-emerald-950/40 border-x border-brand-200/40 dark:border-emerald-900/50 font-semibold text-brand-700 dark:text-emerald-300">
                  {typeof row.swiftHumanize === "boolean" ? (
                    row.swiftHumanize ? (
                      <Check className="w-4 h-4 text-brand-600 dark:text-emerald-400 mx-auto stroke-[3]" />
                    ) : (
                      <X className="w-4 h-4 text-slate-400 mx-auto" />
                    )
                  ) : (
                    row.swiftHumanize
                  )}
                </td>
                <td className="p-4 text-center text-slate-600 dark:text-slate-400">
                  {typeof row.competitor === "boolean" ? (
                    row.competitor ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto" />
                    ) : (
                      <X className="w-4 h-4 text-slate-300 dark:text-slate-700 mx-auto" />
                    )
                  ) : (
                    row.competitor
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pros & Advantages */}
      <div className="bg-emerald-50/70 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 p-6 rounded-3xl space-y-3">
        <h3 className="font-heading font-bold text-base text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
          <Check className="w-5 h-5 text-emerald-600" />
          <span>Why Writers Switch to Swift AI Humanizer</span>
        </h3>
        <ul className="space-y-2 text-xs text-emerald-800 dark:text-emerald-300">
          {comp.advantages.map((adv, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>{adv}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <Link
          href="/#humanizer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-xs text-white bg-brand-600 hover:bg-brand-700 shadow-md transition-all hover:scale-105"
        >
          <span>Try Swift AI Humanizer Free</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
