import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogData";
import { ArrowRight, Clock } from "lucide-react";

export const metadata = {
  title: "AI Humanizer Guides & Research Benchmarks — Swift AI",
  description: "Explore in-depth benchmarks comparing Swift AI Humanizer against SuperHumanizer, AIHumanize.io, and CleverHumanizer, plus guides on Turnitin 2026 detection algorithms.",
};

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = BLOG_POSTS;

  return (
    <div className="min-h-screen bg-[#FAFBFC] dark:bg-[#0B1120] font-sans transition-colors py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-8 space-y-3">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Research, Guides &amp; Benchmarks
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans max-w-3xl">
            In-depth comparisons, IEEE research breakdowns, and actionable guides on AI detection classifiers, sentence rhythm, and content humanization.
          </p>
        </div>

        {/* Investopedia Featured Top Article */}
        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xs hover:shadow-md transition-all border-l-8 border-l-brand-600 dark:border-l-emerald-500"
          >
            <div className="space-y-4 max-w-4xl">
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold uppercase tracking-wider">
                  Featured • {featuredPost.category}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans">
                <div>
                  By <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider">{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-brand-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* 3-Column Grid for Remaining Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {otherPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-4 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-400">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider truncate max-w-[150px]">
                  By {post.author.split(" ")[0]} {post.author.split(" ")[1] || ""}
                </span>
                <div className="flex items-center gap-1 font-bold text-brand-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
