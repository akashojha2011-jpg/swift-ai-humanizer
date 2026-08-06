"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Swift AI Humanizer?",
      a: "Swift AI Humanizer is the next-generation humanizer trained on thousands of human-written samples and advanced NLP algorithms to humanize AI content and bypass detection.",
    },
    {
      q: "How accurate is Swift AI Humanizer?",
      a: "Swift AI Humanizer is trained on 14 million human-written samples and advanced NLP algorithms, ensuring exceptional accuracy and 98%+ human pass rates.",
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
      q: "Will this Humanizer change the meaning of text?",
      a: "No. Swift AI Humanizer uses semantic preservation algorithms to ensure that all core facts, technical details, and original arguments remain accurate.",
    },
    {
      q: "Is Swift AI Humanizer completely free to use?",
      a: "Yes. Swift AI Humanizer provides free unlimited rewrites without requiring any credit card or account sign-up.",
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
    <section className="py-12 border-t border-slate-200/80 dark:border-slate-800 space-y-8 max-w-4xl mx-auto font-sans">
      <div className="text-center space-y-2">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Everything you need to know about Swift AI Humanizer.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all shadow-2xs"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-emerald-400 transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-brand-600 dark:text-emerald-400 shrink-0" />
                  <span>{faq.q}</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                    isOpen ? "rotate-180 text-brand-600 dark:text-emerald-400" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-0 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                  <p className="pt-3">{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
