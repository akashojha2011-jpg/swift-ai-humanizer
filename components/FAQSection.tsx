"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is Swift AI Humanizer?",
      a: "Swift AI Humanizer is a free tool that rewrites ChatGPT, Claude, and Gemini text so it reads as natural human writing while keeping your original meaning, formatting, and structure intact.",
    },
    {
      q: "How accurate is it at bypassing AI detectors?",
      a: "In internal testing across thousands of samples, Swift AI achieves a 98%+ human-confidence score against Turnitin, GPTZero, and Copyleaks by targeting the specific linguistic features these detectors measure.",
    },
    {
      q: "Is Swift AI Humanizer really free?",
      a: "Yes. There's no sign-up, no credit card, and no word cap on the free tier — you can humanize text as many times as you need at no cost.",
    },
    {
      q: "Which AI detectors does it bypass?",
      a: "Swift AI is built to pass Turnitin, GPTZero, Copyleaks, ZeroGPT, Quillbot, Originality.ai, Sapling, and Writer's AI detection systems.",
    },
    {
      q: "Does it change the meaning of my text?",
      a: "No. The rewrite engine only adjusts sentence rhythm, word choice, and structure — your facts, arguments, and intent stay exactly the same.",
    },
    {
      q: "How is Swift AI different from other humanizers?",
      a: "Most humanizer tools rely on random word-swapping. Swift AI is built on the IEEE-published research \"How to Detect AI-Generated Texts?\" (Nguyen, Hatua & Sung, 2023), targeting the exact features — Coleman-Liau readability, word density, sentence predictability — that detector classifiers actually score.",
    },
    {
      q: "Can I humanize AI text on mobile devices?",
      a: "Yes. Swift AI Humanizer works fully in the browser on any device — phone, tablet, or desktop — with no app download needed.",
    },
    {
      q: "Does it preserve bullet points and formatting?",
      a: "Yes. Unlike many humanizers that flatten text into plain paragraphs, Swift AI keeps bullet points, numbered lists, bold text, and subheaders intact through the rewrite.",
    },
    {
      q: "Is using an AI humanizer considered cheating or plagiarism?",
      a: "Humanizing doesn't introduce new ideas or copy someone else's work — it only changes how your own text is phrased. That said, if your school, employer, or platform requires fully original human writing, check their specific policy before submitting AI-assisted work, humanized or not.",
    },
    {
      q: "What's the difference between humanizing, paraphrasing, and rewriting?",
      a: "Humanizing adjusts tone and rhythm so text reads naturally while keeping the same wording and structure. Paraphrasing changes the wording while keeping the same idea. Rewriting goes further, reshaping both the wording and how the idea is expressed.",
    },
    {
      q: "Can I process Word documents or bulk text?",
      a: "Yes. Swift AI supports bulk document upload for .docx files, so you can humanize full drafts in one pass instead of pasting section by section.",
    },
    {
      q: "How do I humanize ChatGPT or Claude text specifically?",
      a: "Paste your ChatGPT or Claude output directly into the input box and click Humanize — the tool works the same way regardless of which AI model generated the original text.",
    },
    {
      q: "Is my text stored or shared?",
      a: "No. Your input and output text are processed for the rewrite only and are not sold or shared with third parties.",
    },
    {
      q: "What's the word limit per request?",
      a: "The free tier supports up to 1,200 words per request, with no limit on how many times you can use the tool.",
    },
  ];

  return (
    <section className="py-16 border-t border-slate-200/60 dark:border-slate-800 space-y-12 max-w-6xl mx-auto font-sans">
      <div className="text-center space-y-2">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-900 dark:text-white">
          Questions usually asked
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Can't find what you're looking for? We're always happy to chat.
        </p>
      </div>

      {/* Planicorn-style Minimal 2-Column FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border-b border-slate-200/70 dark:border-slate-800/80 py-4 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left flex items-center justify-between gap-4 font-heading font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-emerald-600 dark:text-emerald-400" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="pt-2 pb-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
