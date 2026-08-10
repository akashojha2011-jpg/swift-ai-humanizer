import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogData";
import { parseBlogMarkdown } from "@/lib/markdown";
import { Calendar, Clock, ArrowLeft, ArrowRight, UserCheck, List, Sparkles } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Swift AI Humanizer`,
    description: post.excerpt,
    alternates: {
      canonical: `https://swiftaihumanizer.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://swiftaihumanizer.com/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const { html, toc } = parseBlogMarkdown(post.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": "2026-08-10",
    "dateModified": "2026-08-10",
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": post.authorTitle,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Swift AI Humanizer",
      "logo": {
        "@type": "ImageObject",
        "url": "https://swiftaihumanizer.com/icon.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://swiftaihumanizer.com/blog/${post.slug}`,
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Guides &amp; Benchmarks</span>
      </Link>

      {/* Post Header */}
      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-bold">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white leading-tight tracking-tight">
          {post.title}
        </h1>

        {/* Author Bylines */}
        <div className="flex items-center gap-3 pt-2">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-700 dark:text-emerald-300 font-bold text-xs shrink-0">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">
              {post.author}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
              {post.authorTitle}
            </p>
          </div>
        </div>
      </div>

      {/* Excerpt Lead Box */}
      <div className="bg-emerald-50/60 dark:bg-slate-900/60 border-l-4 border-emerald-500 p-5 rounded-r-2xl text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed shadow-2xs">
        {post.excerpt}
      </div>

      {/* Crawlable Table of Contents (TOC) Box */}
      {toc.length > 0 && (
        <nav className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-heading font-bold text-base">
            <List className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Table of Contents</span>
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm font-sans pt-1">
            {toc.map((item) => (
              <li
                key={item.id}
                className={`transition-colors ${
                  item.level === 3 ? "pl-4 text-slate-500 dark:text-slate-400" : "font-semibold text-slate-700 dark:text-slate-200"
                }`}
              >
                <a
                  href={`#${item.id}`}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors block"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Main Content Body */}
      <div
        className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-6"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Bottom Call to Action Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 rounded-3xl p-8 text-center text-white space-y-4 shadow-lg mt-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Try Swift AI Humanizer Live</span>
        </div>
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl">
          Humanize Your AI Drafts Free
        </h3>
        <p className="text-xs sm:text-sm opacity-90 max-w-md mx-auto font-sans">
          Convert ChatGPT, Claude, and Gemini text into natural human writing with formatting preserved. Zero sign-up required.
        </p>
        <Link
          href="/#humanizer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-heading font-bold text-xs text-emerald-950 bg-white hover:bg-slate-50 transition-all hover:scale-105 shadow-md"
        >
          <span>Humanize Your Text Now</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
