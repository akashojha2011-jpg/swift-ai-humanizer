"use client";

import { Heart, ShieldCheck, Globe, TrendingUp, SearchCheck, Award } from "lucide-react";

export function NecessitySection() {
  const points = [
    {
      title: "Authenticity & Real Connection",
      desc: "Humans gravitate towards content with emotional depth, real stories, and genuine voice. Humanizing adds that essential personal touch.",
      icon: Heart,
      color: "bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400 border-rose-100 dark:border-rose-900",
    },
    {
      title: "Eliminating Robotic Flaws",
      desc: "Even with LLM advancements, human refinement is needed to strip away repetitive phrasing, unnatural syntax, and subtle AI bias.",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900",
    },
    {
      title: "Cultural Sensitivity & Tone",
      desc: "Respecting regional nuances and conversational context is crucial for relatability—something raw AI prompts often miss.",
      icon: Globe,
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400 border-blue-100 dark:border-blue-900",
    },
    {
      title: "Boosting Conversions",
      desc: "Emotionally resonant, human-crafted messaging builds stronger customer connections and drives higher click-through rates.",
      icon: TrendingUp,
      color: "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400 border-amber-100 dark:border-amber-900",
    },
    {
      title: "Search Engine & E-E-A-T Quality",
      desc: "Search engines prioritize valuable, human-centric information that demonstrates real Experience, Expertise, and Trustworthiness.",
      icon: SearchCheck,
      color: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400 border-purple-100 dark:border-purple-900",
    },
    {
      title: "Building Reader Credibility",
      desc: "Genuine content fosters long-term trust among readers. Swift AI adds a layer of authenticity reflecting real human perspective.",
      icon: Award,
      color: "bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-400 border-sky-100 dark:border-sky-900",
    },
  ];

  return (
    <section className="py-12 border-t border-slate-200/80 dark:border-slate-800 space-y-8 font-sans max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
          Why Is Humanizing AI Text Necessary?
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          While AI tools generate draft text at lightning speed, humanizing AI text remains essential for reader trust, conversion performance, and search engine compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 rounded-3xl space-y-3 shadow-float hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${p.color} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                  {p.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {p.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
