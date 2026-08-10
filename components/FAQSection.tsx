import { ChevronDown } from "lucide-react";

export const FAQS_DATA = [
  {
    q: "What is an AI humanizer?",
    a: "An AI humanizer is a software tool that restructures AI-generated text from models like ChatGPT, Claude, and Gemini into natural human writing. It adjusts sentence burstiness, vocabulary entropy, and structural rhythm so the content reads authentically and passes AI detection filters like Turnitin and GPTZero.",
  },
  {
    q: "Does Swift AI Humanizer bypass Turnitin, GPTZero, and Originality.ai?",
    a: "Yes, Swift AI Humanizer achieves a 98.4% human confidence score across Turnitin 2026, GPTZero v2, Copyleaks, Originality.ai 3.0, and ZeroGPT. It works by rebalancing the specific statistical features—such as Coleman-Liau readability scores and n-gram predictability—that these detection systems analyze.",
  },
  {
    q: "Is Swift AI Humanizer completely free?",
    a: "Yes, Swift AI Humanizer is 100% free forever with no credit card, subscription, or account sign-up required. Users can humanize up to 1,200 words per request with unlimited daily usage.",
  },
  {
    q: "Is Swift AI Humanizer safe and private to use?",
    a: "Yes, Swift AI Humanizer processes text ephemerally in server RAM and immediately discards it after generating your rewrite. Input text is never saved to databases, logged, sold, or submitted to public AI training datasets.",
  },
  {
    q: "How is Swift AI Humanizer different from SuperHumanizer, AIHumanize.io, CleverHumanizer, ReHumanize, and AuraWrite AI?",
    a: "Unlike SuperHumanizer.ai, AIHumanize.io, CleverHumanizer.ai, ReHumanize.io, and AuraWriteAI.com, Swift AI Humanizer preserves your original rich text formatting (bold text, bullet points, and headers line-by-line) and uses an IEEE research-backed methodology targeting 10 NLP classifier signals rather than basic synonym replacement.",
  },
  {
    q: "How does an AI humanizer work behind the scenes?",
    a: "An AI humanizer works by analyzing the input text for artificial intelligence hallmarks—such as repetitive sentence lengths, low perplexity, and predictable transitions—and applying multi-pass transformations. It varies sentence cadences, injects organic contractions, and replaces robotic default phrasing with natural human expressions.",
  },
  {
    q: "Does Swift AI Humanizer preserve bold text, bullet points, and headings?",
    a: "Yes, Swift AI Humanizer includes a format-aware parser that keeps Markdown bullet points, numbered lists, bold text, and heading hierarchies intact through the entire humanization pipeline.",
  },
  {
    q: "Is using an AI humanizer considered cheating or plagiarism?",
    a: "No, using an AI humanizer to refine phrasing is not plagiarism because it does not copy another author's work or invent uncredited ideas. However, users should always review their institution's or employer's academic and editorial guidelines regarding AI-assisted writing.",
  },
  {
    q: "How do I humanize text from ChatGPT, Claude, or Gemini specifically?",
    a: "To humanize AI text from ChatGPT, Claude, or Gemini, copy the generated output, paste it into the Swift AI Humanizer input box, select your desired tone, and click 'Humanize Text'. The engine automatically detects and replaces the model's signature robotic phrasing patterns.",
  },
  {
    q: "What is the difference between humanizing, paraphrasing, and rewriting?",
    a: "Humanizing specifically targets and eliminates statistical AI artifacts (low burstiness and low perplexity) to make text undetectable by AI scanners. Paraphrasing rephrases sentences using different synonyms, while rewriting alters the overarching structure and flow of an entire passage.",
  },
  {
    q: "What are the common signature signals of AI-generated text?",
    a: "Common signature signals of AI text include overused transitional words ('delve', 'tapestry', 'moreover', 'in conclusion'), uniform sentence lengths, lack of informal contractions, and mathematically predictable word pairings.",
  },
  {
    q: "Can non-native English writers use an AI humanizer to prevent false positive flags?",
    a: "Yes, non-native English writers frequently face false positive flags on Turnitin and GPTZero because formal ESL writing matches the rigid grammatical patterns of AI models. Swift AI Humanizer introduces natural sentence variance and conversational flow to eliminate these false positive indicators.",
  },
  {
    q: "Can I upload Word documents (.docx) or bulk text for humanization?",
    a: "Yes, Swift AI Humanizer provides a dedicated Bulk Rewriter tool supporting .docx file uploads and multi-paragraph document processing for fast batch humanization.",
  },
  {
    q: "What is the word limit per request on Swift AI Humanizer?",
    a: "The free tier of Swift AI Humanizer allows up to 1,200 words per single request, and users can process an unlimited number of requests per day.",
  },
  {
    q: "How fast does Swift AI Humanizer process and rewrite text?",
    a: "Swift AI Humanizer processes most standard text passages in under 1.5 seconds thanks to an optimized low-latency transformation pipeline.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 border-t border-slate-200/60 dark:border-slate-800 space-y-12 max-w-6xl mx-auto font-sans">
      <div className="text-center space-y-2">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-900 dark:text-white">
          Frequently Asked Questions About AI Humanizers
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Direct, factual answers to common questions about AI text humanization, Turnitin detection bypass, formatting preservation, and privacy.
        </p>
      </div>

      {/* Crawlable SSR HTML 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
        {FAQS_DATA.map((faq, idx) => (
          <details
            key={idx}
            className="group border-b border-slate-200/70 dark:border-slate-800/80 pb-4 transition-colors [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="w-full text-left flex items-center justify-between gap-4 font-heading font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 cursor-pointer py-1 select-none">
              <span>{faq.q}</span>
              <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 group-open:rotate-180 group-open:text-emerald-600 dark:group-open:text-emerald-400" />
            </summary>

            <div className="pt-2.5 pb-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              <p>{faq.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
