import { Metadata } from "next";
import { BulkRewriterWorkbench } from "@/components/BulkRewriterWorkbench";
import { Layers, CheckCircle2, FileText, Zap, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Bulk AI Text Rewriter: Full Documents | Swift AI",
  description: "Free bulk AI text rewriter tool. Upload Word documents (.docx) or multi-paragraph articles to humanize entire documents at once while preserving headers and bullet points.",
  openGraph: {
    title: "Bulk AI Text Rewriter: Full Documents | Swift AI",
    description: "Free bulk AI text rewriter tool. Upload Word documents (.docx) or multi-paragraph articles to humanize entire documents at once while preserving headers and bullet points.",
    url: "https://swiftaihumanizer.com/bulk-rewriter",
  },
  twitter: {
    title: "Bulk AI Text Rewriter: Full Documents | Swift AI",
    description: "Free bulk AI text rewriter tool. Upload Word documents (.docx) or multi-paragraph articles to humanize entire documents at once while preserving headers and bullet points.",
  },
};

export default function BulkRewriterPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          Bulk AI Text Rewriter — Humanize Full Articles &amp; Documents
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          Swift AI Bulk Rewriter converts multi-paragraph documents and .docx files into natural, human-written text in a single pass. Preserves headers, bullet points, and paragraph structure across your entire batch while bypassing Turnitin and GPTZero.
        </p>
      </div>

      {/* Interactive Bulk Workbench */}
      <BulkRewriterWorkbench />

      {/* Crawlable Informational Explainer (Bumps word count to 500+ words) */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 space-y-8 shadow-xs">
        
        <div className="space-y-3">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
            How Bulk AI Text Rewriting Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Managing long-form essays, multi-chapter ebooks, or entire content publishing schedules requires a streamable, batch-capable processing pipeline. Standard AI rewriters force you to copy and paste text paragraph by paragraph, losing rich text formatting and wasting valuable time. Swift AI Bulk Rewriter accepts full document uploads and converts thousands of words simultaneously while maintaining paragraph hierarchy.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                Multi-Paragraph Batch Processing
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Rewrite entire articles and manuscripts without splitting your draft manually into snippets. Contextual memory guarantees consistent vocabulary usage from opening intro to conclusion.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                Word Document (.docx) &amp; Text Support
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Upload Microsoft Word files directly to convert synthetic AI drafts into publishable human writing with bold titles, italics, and subheadings intact.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" />
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                Batch Tone &amp; Style Uniformity
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Select one of 5 specialized writing tones (Academic, Business, Conversational, Marketing, Creative) to maintain uniform authorial voice across every page of your project.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                Turnitin &amp; GPTZero Evasion
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Every sentence block undergoes perplexity rebalancing to eliminate robotic pattern clusters, ensuring institutional AI detectors classify your entire manuscript as 100% human-authored.
            </p>
          </div>

        </div>

        {/* Step Guide */}
        <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
            Steps to Bulk Humanize Your Documents
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <li>Choose your desired batch writing tone and bypass strength mode.</li>
            <li>Paste your full article text or upload your Word document (.docx).</li>
            <li>Click <strong>Humanize Batch Text</strong> to execute parallel section transformation.</li>
            <li>Copy the final formatted output directly into Google Docs or Word with 1-click export.</li>
          </ol>
        </div>

      </section>
    </div>
  );
}
