import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogData";
import { BookOpen, ArrowRight, Clock, UserCheck } from "lucide-react";

export const metadata = {
  title: "AI Humanizer Guides & Competitor Benchmarks — Swift AI",
  description: "Explore in-depth benchmarks comparing Swift AI Humanizer against SuperHumanizer, AIHumanize.io, and CleverHumanizer, plus guides on Turnitin 2026 detection algorithms.",
};

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white">
          AI Humanizer Guides &amp; Research Benchmarks
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          Data-backed comparisons, IEEE research breakdowns, and actionable writing guides for defeating Turnitin 2026, GPTZero v2, and Copyleaks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl space-y-4 shadow-float hover:-translate-y-1 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-bold">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <UserCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{post.author}</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-emerald-400">
                <span>Read Full Benchmark</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
