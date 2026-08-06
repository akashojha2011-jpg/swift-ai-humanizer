import Link from "next/link";
import { BookOpen, ArrowRight, Clock } from "lucide-react";

export const metadata = {
  title: "AI Detection Guides & Writing Tips — Swift AI Humanizer",
  description: "Learn how Turnitin 2026 and GPTZero detect AI text, and how to write natural, undetectable content.",
};

const POSTS = [
  {
    slug: "how-gptzero-and-turnitin-detect-ai-text",
    title: "How GPTZero and Turnitin 2026 Detect AI Writing in 2026",
    excerpt: "Understand perplexity, burstiness, and the signature formal buzzwords that trigger AI detectors.",
    date: "August 2026",
    readTime: "5 min read",
  },
  {
    slug: "5-essential-tips-to-make-chatgpt-text-sound-human",
    title: "5 Simple Rules to Make ChatGPT Sound Completely Natural",
    excerpt: "Injecting contractions, breaking long sentences, and preserving original bullet points.",
    date: "August 2026",
    readTime: "4 min read",
  },
  {
    slug: "avoiding-false-positives-in-academic-writing",
    title: "Avoiding AI Detector False Positives in Academic Essays",
    excerpt: "Why ESL writers get falsely flagged by Turnitin and how to protect your research papers.",
    date: "August 2026",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white">
          Writers Guides & AI Tips
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Expert guides on AI detection algorithms, perplexity scoring, and humanization strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl space-y-4 shadow-float hover:-translate-y-1 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.date} • {post.readTime}</span>
              </div>
              <h2 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-emerald-400 pt-2">
              <span>Read Guide</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
