import Link from "next/link";
import { PenTool, Megaphone, Briefcase, Search, UserCheck } from "lucide-react";

export function AIHumanizerOverview() {
  return (
    <div className="space-y-10 max-w-6xl mx-auto font-sans">
      {/* Card 1: What is an AI humanizer? */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xs space-y-6">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-slate-900 dark:text-white">
          What is an AI humanizer?
        </h2>

        <div className="space-y-6">
          {/* Block 1 with green left accent */}
          <div className="border-l-4 border-emerald-500 dark:border-emerald-400 pl-4 py-1 space-y-2">
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              An AI humanizer is an intelligent writing refinement engine that elevates AI-generated drafts into natural, engaging human prose. It works by eliminating monotonous sentence structures, flat tonal delivery, and robotic phrasing while keeping your core message, key data points, and formatting 100% intact.
            </p>
          </div>

          {/* Block 2 with green left accent */}
          <div className="border-l-4 border-emerald-500 dark:border-emerald-400 pl-4 py-1 space-y-1.5">
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
              What does it mean to humanize AI text?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Humanizing is calibration, not scrambling. The underlying thoughts remain identical — the voice transforms to sound effortless and authentic.
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 pt-2 font-medium">
          Paste your AI-written text into{" "}
          <Link href="/#humanizer" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
            Swift AI Humanizer
          </Link>{" "}
          and receive undetectable human writing for free.
        </p>
      </section>

      {/* Card 2: How can an AI Humanizer help you? */}
      <section className="bg-emerald-50/40 dark:bg-slate-900/60 border border-emerald-100/80 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xs space-y-6">
        <div className="space-y-3">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-slate-900 dark:text-white">
            How can an AI Humanizer help you?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl font-sans">
            Swift AI Humanizer makes AI content warmer, more natural, and easier to read without losing your original meaning. Because Large Language Models (LLMs) output repetitive phrasing across every domain, professionals use our humanizer for distinct goals:
          </p>
        </div>

        {/* 5 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/70 p-5 rounded-2xl space-y-1.5 shadow-2xs">
            <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <PenTool className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Writers, bloggers, and content creators</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Refines rough AI drafts by removing repetitive sentence openers, cliché AI vocabulary, and robotic transitions.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/70 p-5 rounded-2xl space-y-1.5 shadow-2xs">
            <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <Megaphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Marketers, PR teams, and social media specialists</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Injects authentic brand voice and persuasive human rhythm into AI-generated marketing copy, emails, and campaign briefs.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/70 p-5 rounded-2xl space-y-1.5 shadow-2xs">
            <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Business professionals and customer-facing teams</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Polishes AI-assisted emails and client proposals to ensure they feel personal, warm, and professional rather than automated.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/70 p-5 rounded-2xl space-y-1.5 shadow-2xs">
            <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>SEO writers and content marketing teams</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Maintains target keyword placements and structural headings while elevating readability and passing search engine quality checks.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/70 p-5 rounded-2xl space-y-1.5 shadow-2xs md:col-span-2">
            <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Job seekers and freelancers</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Customizes AI cover letters and resume summaries so hiring managers read compelling human writing instead of cookie-cutter templates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
