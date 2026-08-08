import { HelpCircle, CheckCircle2 } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      q: "What is an AI humanizer?",
      a: "An AI humanizer is a tool that converts AI-generated text from ChatGPT, Claude, or Gemini into natural human-sounding writing. It removes detection patterns that AI detectors like GPTZero and Turnitin recognize, while preserving your original meaning and formatting.",
    },
    {
      q: "Does Swift AI humanizer really bypass GPTZero and Turnitin?",
      a: "Yes. Swift AI Humanizer has been tested against 5,000 ChatGPT-4o and Claude 3.5 Sonnet samples with a 98% bypass rate on both GPTZero and Turnitin 2026.",
    },
    {
      q: "Will this change the meaning of my text?",
      a: "No. Swift AI preserves all meaning, facts, and formatting. We only adjust sentence structure, add natural contractions, and vary tone to make it sound human-written.",
    },
    {
      q: "Is Swift AI humanizer completely free?",
      a: "Yes, 100% free forever. No credit card, no account signup, unlimited usage.",
    },
    {
      q: "Why Humanize AI with Swift AI Humanizer?",
      a: "Humanizing AI text prevents false positive flags on institutional AI detectors, enhances readability with natural sentence burstiness, and preserves your exact document formatting, bold text, and bullet lists.",
    },
    {
      q: "Can I humanize AI text on mobile devices?",
      a: "Yes! Swift AI Humanizer is fully responsive and works seamlessly across mobile phones, tablets, and desktop browsers without requiring app downloads or sign-ups.",
    },
    {
      q: "Does Swift AI Humanizer preserve my bullet points and bold formatting?",
      a: "Yes! Bullet lists, numbers, bolding, and headers stay 100% intact. You can use the 'Copy Formatted' button to paste directly into Google Docs or Word with all styling preserved.",
    },
    {
      q: "Which AI detectors does Swift AI Humanizer pass?",
      a: "Outputs pass top AI detectors including Turnitin 2026, GPTZero v2, Copyleaks, Originality.ai, and ZeroGPT with 98%+ human confidence scores.",
    },
    {
      q: "How does Swift AI humanize ChatGPT and Claude text?",
      a: "It eliminates formal AI buzzwords ('moreover', 'tapestry', 'delve'), injects natural contractions, varies sentence length, and boosts perplexity and burstiness naturally.",
    },
    {
      q: "Can I process full Word documents (.docx) or bulk text?",
      a: "Yes. Click the 'Bulk Article Rewriter' link in the top menu or footer to process Word files or multiple text blocks at once.",
    },
  ];

  return (
    <section id="faq" className="py-12 border-t border-slate-200/80 dark:border-slate-800 space-y-8 max-w-4xl mx-auto font-sans scroll-mt-20">
      <div className="text-center space-y-2">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Everything you need to know about how our free AI humanizer works.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-all shadow-2xs space-y-3"
          >
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-brand-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>{faq.q}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-8 border-l-2 border-brand-100 dark:border-slate-800">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
