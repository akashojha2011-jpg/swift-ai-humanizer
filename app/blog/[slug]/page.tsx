import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogData";
import { parseBlogMarkdown } from "@/lib/markdown";
import { InvestopediaTOC } from "@/components/InvestopediaTOC";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

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
    <div className="min-h-screen bg-[#FAFBFC] dark:bg-[#0B1120] font-sans transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-600 dark:hover:text-emerald-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Guides &amp; Benchmarks</span>
        </Link>

        {/* Investopedia Header Layout */}
        <header className="max-w-4xl space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8 mb-10">
          <div className="inline-block px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold font-mono uppercase tracking-wide">
            {post.category}
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white leading-[1.15] tracking-tight">
            {post.title}
          </h1>

          {/* Investopedia Byline: By AUTHOR Published DATE */}
          <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>By</span>
            <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider underline underline-offset-2 decoration-slate-300 dark:decoration-slate-700">
              {post.author}
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span>{post.authorTitle}</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span>Published {post.date} 06:00 AM EDT</span>
          </div>
        </header>

        {/* Investopedia 2-Column Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sticky Left Sidebar Table of Contents */}
          <InvestopediaTOC items={toc} />

          {/* Main Article Content Column */}
          <main className="flex-1 max-w-3xl min-w-0 space-y-6">
            {/* Excerpt Lead Box */}
            <div className="bg-slate-100/80 dark:bg-slate-900/90 border-l-4 border-slate-900 dark:border-emerald-500 p-5 rounded-r-xl text-sm sm:text-base text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
              {post.excerpt}
            </div>

            {/* Markdown Body Output */}
            <div
              className="space-y-6 text-base sm:text-lg leading-relaxed text-slate-800 dark:text-slate-200"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* Investopedia Bottom CTA Banner */}
            <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-8 text-center text-white space-y-4 shadow-md mt-14 border border-slate-800">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Swift AI Humanizer Tool</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Ready to Humanize Your AI Content?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-sans">
                Convert ChatGPT, Claude, and Gemini text into natural human writing with formatting preserved. 100% free with no account required.
              </p>
              <Link
                href="/#humanizer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-heading font-bold text-xs text-slate-900 bg-white hover:bg-emerald-400 transition-all hover:scale-105 shadow-md"
              >
                <span>Try Swift AI Humanizer Free</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
