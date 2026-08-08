import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogData";
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from "lucide-react";

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
    title: `${post.title} — Swift AI Humanizer Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://swiftaihumanizer.com/blog/${post.slug}`,
    },
  };
}

function parseMarkdownSection(text: string) {
  const lines = text.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let tableHeaders: string[] = [];

  const flushTable = (key: string) => {
    if (inTable && tableHeaders.length > 0) {
      elements.push(
        <div key={key} className="overflow-x-auto my-6 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xs bg-white dark:bg-slate-900">
          <table className="w-full text-left text-xs border-collapse font-sans">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-heading font-bold">
                {tableHeaders.map((th, i) => (
                  <th key={i} className="p-3.5 border-r border-slate-200/80 dark:border-slate-800 last:border-0">{th.trim()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, rIdx) => (
                <tr key={rIdx} className="border-b border-slate-100 dark:border-slate-800/80 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-3.5 border-r border-slate-100 dark:border-slate-800/80 last:border-0 text-slate-700 dark:text-slate-300 font-medium">
                      {renderFormattedInlineText(cell.trim())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      inTable = false;
      tableHeaders = [];
      tableRows = [];
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const cells = trimmed.split("|").slice(1, -1);
      if (trimmed.includes("---")) return;
      if (!inTable) {
        inTable = true;
        tableHeaders = cells;
      } else {
        tableRows.push(cells);
      }
      return;
    } else if (inTable) {
      flushTable(`table-${index}`);
    }

    if (!trimmed) return;

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={index} className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white pt-8 pb-2 border-b border-slate-200/80 dark:border-slate-800">
          {trimmed.replace("## ", "")}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={index} className="font-heading font-bold text-xl text-slate-900 dark:text-white pt-5 pb-1">
          {trimmed.replace("### ", "")}
        </h3>
      );
    } else if (trimmed.startsWith("- ")) {
      elements.push(
        <li key={index} className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed list-disc ml-5 pl-1 my-1.5">
          {renderFormattedInlineText(trimmed.replace("- ", ""))}
        </li>
      );
    } else if (/^\d+\.\s/.test(trimmed)) {
      const content = trimmed.replace(/^\d+\.\s/, "");
      elements.push(
        <li key={index} className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed list-decimal ml-5 pl-1 my-1.5 font-semibold">
          {renderFormattedInlineText(content)}
        </li>
      );
    } else if (trimmed === "---") {
      elements.push(<hr key={index} className="border-slate-200 dark:border-slate-800 my-8" />);
    } else {
      elements.push(
        <p key={index} className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans my-3">
          {renderFormattedInlineText(trimmed)}
        </p>
      );
    }
  });

  if (inTable) {
    flushTable("table-end");
  }

  return elements;
}

function renderFormattedInlineText(text: string) {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|_[^_]+_|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(<strong key={match.index} className="font-bold text-slate-900 dark:text-white">{token.slice(2, -2)}</strong>);
    } else if ((token.startsWith("_") && token.endsWith("_")) || (token.startsWith("*") && token.endsWith("*"))) {
      parts.push(<em key={match.index} className="italic text-slate-800 dark:text-slate-200">{token.slice(1, -1)}</em>);
    } else if (token.startsWith("[") && token.includes("](")) {
      const label = token.substring(1, token.indexOf("]"));
      const href = token.substring(token.indexOf("](") + 2, token.length - 1);
      parts.push(
        <Link key={match.index} href={href} className="text-brand-600 dark:text-emerald-400 font-bold hover:underline">
          {label}
        </Link>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 font-sans">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-600 dark:hover:text-emerald-400 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Blog</span>
      </Link>

      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <span className="flex items-center gap-1.5 font-bold text-brand-600 dark:text-emerald-400 bg-brand-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full border border-brand-200 dark:border-emerald-800">
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
          <span className="flex items-center gap-1">
            <User className="w-3.5 h-3.5" />
            {post.author}
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white leading-tight">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans pt-2 italic border-l-4 border-brand-500 dark:border-emerald-400 pl-4">
          {post.excerpt}
        </p>
      </div>

      {/* Main Rendered Long-Form Article Body */}
      <div className="space-y-4 text-slate-700 dark:text-slate-300">
        {parseMarkdownSection(post.content)}
      </div>

      {/* Bottom Conversion CTA Banner */}
      <div className="bg-gradient-to-br from-brand-600 via-brand-600 to-brand-800 rounded-3xl p-8 sm:p-10 text-center text-white space-y-4 shadow-xl mt-14">
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl">
          Humanize Your AI Drafts Free
        </h3>
        <p className="text-xs sm:text-sm opacity-90 max-w-lg mx-auto font-sans">
          Bypass Turnitin 2026, GPTZero, and Copyleaks with 98%+ human pass rates. Preserves 100% of formatting with zero sign-up required.
        </p>
        <Link
          href="/#humanizer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-heading font-bold text-xs text-brand-900 bg-white hover:bg-slate-50 shadow-lg transition-all hover:scale-105"
        >
          <span>Try Swift AI Humanizer Free</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
