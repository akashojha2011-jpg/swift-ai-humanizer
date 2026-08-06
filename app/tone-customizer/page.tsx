"use client";

import { useState } from "react";
import { Sliders, Wand2, Copy, Check, Sparkles, FileText, FileCheck } from "lucide-react";
import { humanizeText, HumanizeTone, convertMarkdownToHTML } from "@/lib/humanizerEngine";

export default function ToneCustomizerPage() {
  const [input, setInput] = useState(
    "Furthermore, it is important to note that artificial intelligence plays a crucial role in modern educational paradigms, fostering enhanced engagement and robust learning outcomes."
  );
  const [selectedTone, setSelectedTone] = useState<HumanizeTone>("academic");
  const [output, setOutput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);

  const tones: { id: HumanizeTone; title: string; desc: string; sample: string }[] = [
    {
      id: "academic",
      title: "Academic Paper",
      desc: "Formal scholarly prose suitable for research essays, dissertations, and journal submissions.",
      sample: "Keeps formal terminology while eliminating robotic LLM transition markers.",
    },
    {
      id: "casual",
      title: "Conversational / General",
      desc: "Natural spoken English with contractions, varied sentence rhythms, and warm tone.",
      sample: "Great for blog posts, social media, medium articles, and personal writing.",
    },
    {
      id: "professional",
      title: "Professional Business",
      desc: "Clear, concise corporate communication for emails, proposals, and executive summaries.",
      sample: "Polished and direct without corporate jargon or artificial AI fluff.",
    },
    {
      id: "marketing",
      title: "Persuasive Marketing",
      desc: "High-converting copy designed to captivate readers and prompt clear action.",
      sample: "Engaging and punchy phrasing for landing pages and promotional emails.",
    },
    {
      id: "creative",
      title: "Creative Story",
      desc: "Expressive prose with rich sensory details, varied pacing, and narrative flair.",
      sample: "Vivid sentence structures that bring fiction and personal narratives to life.",
    },
  ];

  const handleTune = async () => {
    if (!input.trim()) return;
    setIsProcessing(true);
    try {
      const res = await humanizeText(input, { tone: selectedTone, mode: "deep" });
      setOutput(res.humanizedText);
    } catch (e) {
      console.error(e);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 font-sans">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white">
          Tone Customization Studio
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Fine-tune the exact writing personality of your output across 5 specialized tones with zero meaning or bullet loss.
        </p>
      </div>

      {/* Tone Cards Selector */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {tones.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelectedTone(t.id)}
            className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between space-y-2 ${
              selectedTone === t.id
                ? "bg-brand-50/90 dark:bg-emerald-950/80 border-brand-500 dark:border-emerald-600 shadow-md scale-[1.02]"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
            }`}
          >
            <div className="space-y-1">
              <span className={`text-xs font-heading font-extrabold block ${
                selectedTone === t.id ? "text-brand-900 dark:text-emerald-300" : "text-slate-900 dark:text-white"
              }`}>
                {t.title}
              </span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                {t.desc}
              </p>
            </div>
            {selectedTone === t.id && (
              <span className="text-[10px] font-mono font-bold text-brand-600 dark:text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3" /> Active Tone
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Main Workbench */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl shadow-float">
        {/* Left: Input */}
        <div className="space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <label className="font-heading font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-600 dark:text-emerald-400" />
              <span>Input Draft</span>
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste text here to tune tone..."
              className="w-full h-64 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-500 resize-none font-sans leading-relaxed"
            />
          </div>

          <button
            onClick={handleTune}
            disabled={isProcessing || !input.trim()}
            className="w-full py-3.5 rounded-full font-heading font-bold text-xs text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-40 shadow-md flex items-center justify-center gap-2 transition-all"
          >
            <Wand2 className="w-4 h-4" />
            <span>{isProcessing ? "Tuning Tone..." : `Apply ${selectedTone.toUpperCase()} Tone`}</span>
          </button>
        </div>

        {/* Right: Output */}
        <div className="space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-heading font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Tuned Result</span>
              </label>
              {output && (
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 font-bold">
                  Tone Applied
                </span>
              )}
            </div>

            <div className="w-full h-64 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-sm text-slate-800 dark:text-slate-200 overflow-y-auto leading-relaxed font-sans">
              {output ? (
                <div
                  className="prose prose-slate dark:prose-invert max-w-none text-sm"
                  dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(output) }}
                />
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-2">
                  <Sliders className="w-6 h-6 text-slate-400 animate-pulse" />
                  <p className="text-xs text-slate-400 font-medium">Select a tone and click Apply to preview tuned prose</p>
                </div>
              )}
            </div>
          </div>

          {output && (
            <button
              onClick={handleCopy}
              className="w-full py-3.5 rounded-full font-heading font-bold text-xs text-brand-900 dark:text-emerald-200 bg-brand-50 dark:bg-emerald-950 border border-brand-200 dark:border-emerald-800 hover:bg-brand-100 flex items-center justify-center gap-2 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-brand-600" />}
              <span>{copied ? "Copied Tuned Output!" : "Copy Tuned Output"}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
