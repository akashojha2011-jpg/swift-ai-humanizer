"use client";

import { GraduationCap, Briefcase, Feather, Megaphone, Scale, UserCheck } from "lucide-react";

export function UseCases() {
  const cases = [
    {
      title: "Content Creators & Bloggers",
      desc: "Turn rough ChatGPT or Claude drafts into engaging, human-sounding articles that hold reader attention and rank high on Google.",
      icon: Feather,
      color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900",
    },
    {
      title: "Students & Academic Writers",
      desc: "Humanize essays, literature reviews, and research papers to eliminate false AI detector flags while protecting your original voice.",
      icon: GraduationCap,
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400 border-blue-100 dark:border-blue-900",
    },
    {
      title: "Marketing & Copywriters",
      desc: "Inject authentic brand warmth and persuasive human cadence into AI-generated sales pages, newsletters, and campaign briefs.",
      icon: Megaphone,
      color: "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400 border-amber-100 dark:border-amber-900",
    },
    {
      title: "Business Executives & PR",
      desc: "Polish AI-assisted client proposals, press releases, and executive communications so they sound personal, clear, and professional.",
      icon: Briefcase,
      color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900",
    },
    {
      title: "Legal & Corporate HR Teams",
      desc: "Transform AI draft templates for policy documents, job descriptions, and internal updates into natural, accessible communication.",
      icon: Scale,
      color: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400 border-purple-100 dark:border-purple-900",
    },
    {
      title: "Freelancers & Job Seekers",
      desc: "Customize AI-assisted cover letters, resume summaries, and client emails so hiring managers read compelling, authentic human writing.",
      icon: UserCheck,
      color: "bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-400 border-sky-100 dark:border-sky-900",
    },
  ];

  return (
    <section className="py-12 border-t border-slate-200/80 dark:border-slate-800 space-y-8 font-sans max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
          Who Can Benefit from Swift AI Humanizer? Essentially, Everyone!
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Tailored humanization algorithms for students, content creators, marketers, executives, and job seekers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c, idx) => {
          const Icon = c.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 rounded-3xl space-y-4 shadow-float hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${c.color} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
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
