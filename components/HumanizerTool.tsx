"use client";

import { useState, useEffect } from "react";
import {
  Sparkles,
  Zap,
  Wand2,
  Copy,
  Check,
  RotateCcw,
  RotateCw,
  Edit3,
  Download,
  Trash2,
  History,
  ClipboardPaste,
  Layers,
  ChevronDown,
  FileCheck,
  FileType,
} from "lucide-react";

import { analyzeTextAIDetection, AIDetectionMetrics } from "@/lib/aiDetector";
import {
  humanizeText,
  convertMarkdownToHTML,
  parseHTMLToMarkdown,
  HumanizeTone,
  HumanizeMode,
  HumanizeResult,
  PipelineStageResult,
} from "@/lib/humanizerEngine";
import { SAMPLE_PRESETS, PresetSample } from "@/lib/presets";
import { MultiStageProgress } from "./MultiStageProgress";
import { DetectorMetrics } from "./DetectorMetrics";
import { DiffViewer } from "./DiffViewer";
import { BulkMode } from "./BulkMode";

interface HumanizerToolProps {
  onOpenHistory?: () => void;
}

export function HumanizerTool({ onOpenHistory }: HumanizerToolProps) {
  const [activeTab, setActiveTab] = useState<"single" | "bulk">("single");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [tone, setTone] = useState<HumanizeTone>("casual");
  const [mode, setMode] = useState<HumanizeMode>("quick");

  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStage, setCurrentStage] = useState<PipelineStageResult | undefined>();
  const [result, setResult] = useState<HumanizeResult | null>(null);

  // Live AI scan debounce
  const [liveScan, setLiveScan] = useState<AIDetectionMetrics | null>(null);

  // Editing & Diff state
  const [isEditing, setIsEditing] = useState(false);
  const [showDiff, setShowDiff] = useState(false);
  const [diffMode, setDiffMode] = useState<"inline" | "sideBySide">("inline");

  // Output Undo/Redo stack
  const [historyStack, setHistoryStack] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [copiedRaw, setCopiedRaw] = useState(false);
  const [copiedRich, setCopiedRich] = useState(false);

  useEffect(() => {
    if (!input.trim() || input.length < 15) {
      setLiveScan(null);
      return;
    }
    const timer = setTimeout(() => {
      const metrics = analyzeTextAIDetection(input);
      setLiveScan(metrics);
    }, 300);

    return () => clearTimeout(timer);
  }, [input]);

  const handleHumanize = async () => {
    if (!input.trim()) return;

    setIsProcessing(true);
    setResult(null);
    setShowDiff(false);

    try {
      const res = await humanizeText(input, {
        tone,
        mode,
        onProgress: (stage) => setCurrentStage(stage),
      });

      setResult(res);
      setOutput(res.humanizedText);
      setHistoryStack([res.humanizedText]);
      setHistoryIdx(0);

      // Save to localStorage
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("aura_humanize_history");
        const list = saved ? JSON.parse(saved) : [];
        list.unshift(res);
        localStorage.setItem("aura_humanize_history", JSON.stringify(list.slice(0, 30)));
      }

      if (res.afterMetrics.humanScore >= 90) {
        import("canvas-confetti").then((module) => {
          module.default({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#059669", "#10B981", "#34D399"],
          });
        });
      }
    } catch (e: any) {
      console.error(e);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePasteEvent = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const htmlData = e.clipboardData.getData("text/html");
    if (htmlData) {
      const markdown = parseHTMLToMarkdown(htmlData);
      if (markdown && markdown.trim().length > 0 && /\w+/.test(markdown)) {
        e.preventDefault();
        setInput(markdown);
        return;
      }
    }
  };

  const handlePaste = async () => {
    try {
      if (typeof window !== "undefined" && navigator.clipboard && navigator.clipboard.read) {
        const items = await navigator.clipboard.read();
        for (const item of items) {
          if (item.types.includes("text/html")) {
            const blob = await item.getType("text/html");
            const html = await blob.text();
            const markdown = parseHTMLToMarkdown(html);
            if (markdown && markdown.trim() && /\w+/.test(markdown)) {
              setInput(markdown);
              return;
            }
          }
        }
      }
      const text = await navigator.clipboard.readText();
      if (text) {
        const cleanedText = text.replace(/<[^>]*>/g, "").trim();
        if (cleanedText) setInput(cleanedText);
      }
    } catch (e) {
      try {
        const text = await navigator.clipboard.readText();
        if (text) {
          const cleanedText = text.replace(/<[^>]*>/g, "").trim();
          if (cleanedText) setInput(cleanedText);
        }
      } catch (err) {
        console.error("Paste failed");
      }
    }
  };

  const handlePresetSelect = (preset: PresetSample) => {
    setInput(preset.text);
  };

  const handleCopyRaw = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopiedRaw(true);
    setTimeout(() => setCopiedRaw(false), 2000);
  };

  const handleCopyRichText = async () => {
    if (!output) return;
    const htmlContent = convertMarkdownToHTML(output);
    const plainText = output;

    try {
      if (typeof window !== "undefined" && window.ClipboardItem) {
        const htmlBlob = new Blob([htmlContent], { type: "text/html" });
        const textBlob = new Blob([plainText], { type: "text/plain" });
        await navigator.clipboard.write([
          new window.ClipboardItem({
            "text/html": htmlBlob,
            "text/plain": textBlob,
          }),
        ]);
      } else {
        await navigator.clipboard.writeText(plainText);
      }
      setCopiedRich(true);
      setTimeout(() => setCopiedRich(false), 2000);
    } catch (err) {
      navigator.clipboard.writeText(plainText);
      setCopiedRich(true);
      setTimeout(() => setCopiedRich(false), 2000);
    }
  };

  const handleDownload = (format: "txt" | "md" | "docx") => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Humanized_Content_${Date.now()}.${format}`;
    a.click();
  };

  const handleOutputChange = (val: string) => {
    setOutput(val);
    const newStack = historyStack.slice(0, historyIdx + 1);
    newStack.push(val);
    setHistoryStack(newStack);
    setHistoryIdx(newStack.length - 1);
  };

  const handleUndo = () => {
    if (historyIdx > 0) {
      setHistoryIdx(historyIdx - 1);
      setOutput(historyStack[historyIdx - 1]);
    }
  };

  const handleRedo = () => {
    if (historyIdx < historyStack.length - 1) {
      setHistoryIdx(historyIdx + 1);
      setOutput(historyStack[historyIdx + 1]);
    }
  };

  const wordCountInput = (input.match(/\b\w+\b/g) || []).length;
  const wordCountOutput = (output.match(/\b\w+\b/g) || []).length;

  return (
    <section id="humanizer" className="scroll-mt-24 space-y-6 max-w-6xl mx-auto">
      {/* Grammarly Editor Container */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-4 sm:p-6 shadow-grammarly space-y-5 transition-colors">
        {/* Top Control Bar */}
        <div className="bg-slate-50/90 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Left: Mode Switcher Pills & Format Badge */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
              <button
                onClick={() => setMode("quick")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  mode === "quick"
                    ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                <span>Super Lite</span>
              </button>

              <button
                onClick={() => setMode("deep")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  mode === "deep"
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                <span>Super Ultra</span>
              </button>
            </div>

            {/* Purpose / Tone Dropdown */}
            <div className="relative flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-1.5 shadow-2xs">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 mr-1.5 shrink-0">Tone:</span>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value as HumanizeTone)}
                className="bg-transparent text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer appearance-none pr-6"
              >
                <option value="casual" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Conversational / General</option>
                <option value="academic" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Academic Paper</option>
                <option value="professional" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Professional Business</option>
                <option value="marketing" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Persuasive Marketing</option>
                <option value="creative" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">Creative Story</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>

            {/* Formatting Preserved Badge */}
            <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <FileCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Format Preserved (Bullets & Bold)</span>
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
            {onOpenHistory && (
              <button
                onClick={onOpenHistory}
                className="flex items-center gap-1.5 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                <History className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                <span>History</span>
              </button>
            )}

            <button
              onClick={() => setActiveTab(activeTab === "single" ? "bulk" : "single")}
              className={`flex items-center gap-1.5 transition-colors ${
                activeTab === "bulk" ? "text-brand-600 dark:text-brand-400 font-bold" : "hover:text-brand-600 dark:hover:text-brand-400"
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span>Bulk Upload</span>
            </button>
          </div>
        </div>

        {/* Tab switch body */}
        {activeTab === "bulk" ? (
          <BulkMode tone={tone} mode={mode} />
        ) : (
          <div className="space-y-6">
            {/* Side-by-Side Editor Panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Left Panel: Input */}
              <div className="bg-slate-50/70 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/70 dark:border-slate-800">
                  <span className="font-heading font-extrabold text-sm text-slate-900 dark:text-white">
                    Input Text
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 font-mono font-medium">
                      {wordCountInput}/1200 words
                    </span>
                    {input && (
                      <button
                        onClick={() => { setInput(""); setResult(null); setOutput(""); }}
                        className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                        title="Clear Input"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Textarea Area */}
                <div className="relative flex-1 min-h-[300px]">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onPaste={handlePasteEvent}
                    placeholder="Paste your AI text here (formatted text from Google Docs/Word supported)..."
                    className="w-full h-full min-h-[300px] bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-xl p-4 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-all resize-none font-sans leading-relaxed shadow-2xs"
                  />

                  {/* Centered Paste Pill Button when empty */}
                  {!input && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4">
                      <button
                        onClick={handlePaste}
                        className="pointer-events-auto flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-100 shadow-md transition-all hover:scale-105"
                      >
                        <ClipboardPaste className="w-4 h-4 text-brand-600 dark:text-emerald-400" />
                        <span>Paste Text</span>
                      </button>

                      <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-2 mt-6 max-w-md">
                        {SAMPLE_PRESETS.map((p) => (
                          <button
                            key={p.id}
                            onClick={() => handlePresetSelect(p)}
                            className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-emerald-950 hover:text-brand-700 dark:hover:text-emerald-300 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all shadow-2xs"
                          >
                            {p.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Left Card Action Footer */}
                <div className="pt-1 flex items-center justify-between">
                  <div>
                    {liveScan && (
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                        liveScan.overallScore > 40
                          ? "bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800"
                          : "bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                      }`}>
                        AI Risk: {liveScan.overallScore}%
                      </span>
                    )}
                  </div>

                  <button
                    onClick={handleHumanize}
                    disabled={isProcessing || !input.trim()}
                    className="px-7 py-3 rounded-full font-heading font-bold text-xs text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-40 shadow-md shadow-brand-600/20 transition-all flex items-center gap-2 hover:scale-[1.02]"
                  >
                    <Wand2 className="w-4 h-4" />
                    <span>{isProcessing ? "Humanizing..." : "Humanize My Text"}</span>
                  </button>
                </div>
              </div>

              {/* Right Panel: Human Output */}
              <div className="bg-slate-50/70 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/70 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-extrabold text-sm text-slate-900 dark:text-white">
                      Human output
                    </span>
                    {result && (
                      <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                        {result.afterMetrics.humanScore}% Human Passed
                      </span>
                    )}
                  </div>

                  {output && (
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handleUndo}
                        disabled={historyIdx <= 0}
                        className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 disabled:opacity-30"
                        title="Undo"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={handleRedo}
                        disabled={historyIdx >= historyStack.length - 1}
                        className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 disabled:opacity-30"
                        title="Redo"
                      >
                        <RotateCw className="w-3.5 h-3.5" />
                      </button>

                      {result && (
                        <button
                          onClick={() => setShowDiff(!showDiff)}
                          className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold transition-colors ${
                            showDiff
                              ? "bg-brand-100 dark:bg-emerald-950 text-brand-700 dark:text-emerald-300"
                              : "text-slate-500 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800"
                          }`}
                        >
                          Diff
                        </button>
                      )}

                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className={`p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800 ${
                          isEditing ? "text-brand-600 dark:text-emerald-400 bg-brand-50 dark:bg-emerald-950" : ""
                        }`}
                        title="Edit mode"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Output Container */}
                <div className="relative flex-1 min-h-[300px]">
                  {showDiff && result ? (
                    <DiffViewer
                      originalText={result.originalText}
                      humanizedText={output}
                      viewMode={diffMode}
                    />
                  ) : isEditing ? (
                    <textarea
                      value={output}
                      onChange={(e) => handleOutputChange(e.target.value)}
                      className="w-full h-full min-h-[300px] bg-white dark:bg-slate-900 border border-brand-400 rounded-xl p-4 text-sm text-slate-800 dark:text-slate-100 focus:outline-none resize-none font-sans leading-relaxed shadow-2xs"
                    />
                  ) : (
                    <div className="w-full h-full min-h-[300px] bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-xl p-4 text-sm text-slate-800 dark:text-slate-100 overflow-y-auto leading-relaxed font-sans shadow-2xs">
                      {output ? (
                        <div
                          className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(output) }}
                        />
                      ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-2 py-12">
                          <Sparkles className="w-6 h-6 text-amber-500 fill-amber-500 animate-pulse" />
                          <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                            Processed text will appear here with headings & formatting intact
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Right Card Footer */}
                <div className="pt-1 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs text-slate-400 font-mono font-medium">
                    {wordCountOutput} words
                  </span>

                  {output && (
                    <div className="flex items-center gap-2">
                      {/* Copy Formatted / Rich Text Button */}
                      <button
                        onClick={handleCopyRichText}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-brand-900 dark:text-emerald-200 bg-brand-50 dark:bg-emerald-950 border border-brand-200 dark:border-emerald-800 hover:bg-brand-100 dark:hover:bg-emerald-900 transition-all shadow-2xs"
                        title="Copy styled Rich Text (pastes into Google Docs, Word & Notion with bolding & bullets intact)"
                      >
                        {copiedRich ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <FileType className="w-3.5 h-3.5 text-brand-600 dark:text-emerald-400" />}
                        <span>{copiedRich ? "Copied Formatted!" : "Copy Formatted"}</span>
                      </button>

                      {/* Copy Raw Text Button */}
                      <button
                        onClick={handleCopyRaw}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-600/20 transition-all"
                      >
                        {copiedRaw ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedRaw ? "Copied" : "Copy Raw"}</span>
                      </button>

                      <button
                        onClick={() => handleDownload("txt")}
                        className="p-2 rounded-full text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors"
                        title="Download .txt"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Stepper Progress & Detector Metrics */}
            <MultiStageProgress currentStage={currentStage} isProcessing={isProcessing} />
            <DetectorMetrics before={result?.beforeMetrics} after={result?.afterMetrics} />
          </div>
        )}
      </div>
    </section>
  );
}
