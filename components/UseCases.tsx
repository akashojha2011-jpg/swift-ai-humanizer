"use client";

import { GraduationCap, Briefcase, Feather, Megaphone, FileText } from "lucide-react";

export function UseCases() {
  const cases = [
    {
      title: "Students & Academic Writers",
      desc: "Humanize essays, research papers, and assignments to bypass Turnitin and GPTZero false positives while protecting academic integrity.",
      icon: GraduationCap,
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400 border-blue-100 dark:border-blue-900",
    },
    {
      title: "Content Creators & Bloggers",
      desc: "Turn raw ChatGPT or Claude drafts into engaging, SEO-friendly articles that read naturally and retain google ranking quality.",
      icon: Feather,
      color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900",
    },
    {
      title: "Marketing & Ad Copywriters",
      desc: "Remove robotic AI tone from sales pages, email newsletters, and ad copy to increase conversions and reader connection.",
      icon: Megaphone,
      color: "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400 border-amber-100 dark:border-amber-900",
    },
    {
      title: "Business Professionals",
      desc: "Polished corporate communications, executive summaries, and business proposals with a warm, natural tone.",
      icon: Briefcase,
      color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900",
    },
  ];

  return (
    <section className="py-12 border-t border-slate-200/80 dark:border-slate-800 space-y-8 font-sans">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
          Built for All Content Needs
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Tailored humanization algorithms for students, professionals, and digital marketers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {cases.map((c, idx) => {
          const Icon = c.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 rounded-3xl space-y-4 shadow-float hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${c.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                  {c.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {c.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
