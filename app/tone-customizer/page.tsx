import { Metadata } from "next";
import { ToneCustomizerStudio } from "@/components/ToneCustomizerStudio";
import { BookOpen, Briefcase, Megaphone, Feather, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Writing Tone Customizer — Academic, Business & Creative Modes",
  description: "Fine-tune your AI humanization tone across 5 specialized modes: Academic Paper, Conversational, Professional Business, Persuasive Marketing, and Creative Storytelling.",
  openGraph: {
    title: "AI Writing Tone Customizer — Academic, Business & Creative Modes",
    description: "Fine-tune your AI humanization tone across 5 specialized modes: Academic Paper, Conversational, Professional Business, Persuasive Marketing, and Creative Storytelling.",
    url: "https://swiftaihumanizer.com/tone-customizer",
  },
  twitter: {
    title: "AI Writing Tone Customizer — Academic, Business & Creative Modes",
    description: "Fine-tune your AI humanization tone across 5 specialized modes: Academic Paper, Conversational, Professional Business, Persuasive Marketing, and Creative Storytelling.",
  },
};

export default function ToneCustomizerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          AI Writing Tone Customization Studio
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          Fine-tune the exact authorial voice of your humanized prose across 5 specialized writing personas while preserving 100% of original formatting and subheadings.
        </p>
      </div>

      {/* Interactive Studio Component */}
      <ToneCustomizerStudio />

      {/* Crawlable Informational Explainer (Bumps word count to 500+ words) */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 space-y-8 shadow-xs">
        
        <div className="space-y-3">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
            How Specialized Writing Tones Work
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            AI text humanization is not one-size-fits-all. An academic paper submitted to Turnitin requires formal scholarly vocabulary without colloquialisms, whereas a viral blog post or marketing email needs punchy sentence rhythms, contractions, and direct audience engagement. Swift AI Tone Customizer rebalances POS distributions, sentence length variance, and transition markers tailored to your specific audience.
          </p>
        </div>

        {/* 5 Tone Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold mb-1">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
              Academic Paper Mode
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Maintains formal scholarly terminology and precise objective reasoning while purging robotic ChatGPT transitions (&quot;furthermore,&quot; &quot;in conclusion,&quot; &quot;testament to&quot;).
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-1">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
              Conversational / General
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Employs natural spoken English cadences, natural contractions, and varied sentence lengths. Ideal for Medium articles, personal blogs, and everyday writing.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="w-9 h-9 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center font-bold mb-1">
              <Briefcase className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
              Professional Business
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Delivers concise, executive-ready communication for corporate emails, stakeholder updates, and strategy proposals without unnecessary AI filler.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold mb-1">
              <Megaphone className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
              Persuasive Marketing
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              High-converting, action-oriented copy that builds emotional resonance with readers. Perfect for landing pages, ad copy, and sales outreach campaigns.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold mb-1">
              <Feather className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
              Creative Story Mode
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Rich sensory descriptions, dynamic narrative pacing, and vivid sentence structures that bring personal essays and creative fiction to life.
            </p>
          </div>

        </div>

      </section>
    </div>
  );
}
