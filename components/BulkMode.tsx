"use client";

import { useState } from "react";
import { Upload, FileText, CheckCircle2, Loader2, Download, Trash2, Layers } from "lucide-react";
import { humanizeText, HumanizeTone, HumanizeMode } from "@/lib/humanizerEngine";

interface BulkItem {
  id: string;
  name: string;
  originalText: string;
  humanizedText?: string;
  status: "idle" | "processing" | "done" | "error";
  humanScore?: number;
}

interface BulkModeProps {
  tone: HumanizeTone;
  mode: HumanizeMode;
}

export function BulkMode({ tone, mode }: BulkModeProps) {
  const [items, setItems] = useState<BulkItem[]>([
    {
      id: "doc-1",
      name: "Chapter_1_AI_Summary.txt",
      originalText: "Furthermore, it is important to note that artificial intelligence plays a crucial role in modern educational paradigms.",
      status: "idle",
    },
    {
      id: "doc-2",
      name: "Marketing_Campaign_v2.docx",
      originalText: "In conclusion, utilizing cutting-edge algorithms has the ability to revolutionize customer acquisition seamlessly.",
      status: "idle",
    }
  ]);
  const [isProcessingAll, setIsProcessingAll] = useState(false);
  const [pastedBatch, setPastedBatch] = useState("");

  const handleAddSnippet = () => {
    if (!pastedBatch.trim()) return;
    const newItem: BulkItem = {
      id: `doc-${Date.now()}`,
      name: `Batch_Doc_${items.length + 1}.txt`,
      originalText: pastedBatch.trim(),
      status: "idle",
    };
    setItems([...items, newItem]);
    setPastedBatch("");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text) {
          setItems(prev => [
            ...prev,
            {
              id: `file-${Date.now()}-${index}`,
              name: file.name,
              originalText: text,
              status: "idle",
            }
          ]);
        }
      };
      reader.readAsText(file);
    });
  };

  const handleRemove = (id: string) => {
    setItems(items.filter(i => i.id !== id));
  };

  const processBatch = async () => {
    setIsProcessingAll(true);

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.status === "done") continue;

      setItems(prev =>
        prev.map(it => (it.id === item.id ? { ...it, status: "processing" } : it))
      );

      try {
        const res = await humanizeText(item.originalText, { tone, mode });
        setItems(prev =>
          prev.map(it =>
            it.id === item.id
              ? {
                  ...it,
                  humanizedText: res.humanizedText,
                  humanScore: res.afterMetrics.humanScore,
                  status: "done",
                }
              : it
          )
        );
      } catch (e) {
        setItems(prev =>
          prev.map(it => (it.id === item.id ? { ...it, status: "error" } : it))
        );
      }
    }

    setIsProcessingAll(false);
  };

  const handleDownloadAll = () => {
    const content = items
      .filter(i => i.humanizedText)
      .map(i => `--- ${i.name} (Human Score: ${i.humanScore}%) ---\n\n${i.humanizedText}\n\n`)
      .join("\n");

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `SwiftAI_Batch_Export_${Date.now()}.txt`;
    a.click();
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-card space-y-6 transition-colors">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
              Bulk / Batch Processing Mode
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Process multiple articles, essays, or documents simultaneously.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={processBatch}
            disabled={isProcessingAll || items.length === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-40 transition-all shadow-sm"
          >
            {isProcessingAll ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
            <span>{isProcessingAll ? "Processing Batch..." : "Run Batch Humanizer"}</span>
          </button>

          {items.some(i => i.status === "done") && (
            <button
              onClick={handleDownloadAll}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Export All</span>
            </button>
          )}
        </div>
      </div>

      {/* Input section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <textarea
            value={pastedBatch}
            onChange={(e) => setPastedBatch(e.target.value)}
            placeholder="Paste text snippet here to add to batch list..."
            className="w-full h-24 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500 resize-none font-sans"
          />
          <button
            onClick={handleAddSnippet}
            disabled={!pastedBatch.trim()}
            className="mt-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 disabled:opacity-40"
          >
            + Add Snippet to Queue
          </button>
        </div>

        <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center justify-center text-center space-y-2 hover:border-brand-500 transition-colors bg-slate-50/50 dark:bg-slate-950/50 relative">
          <Upload className="w-6 h-6 text-brand-600 dark:text-brand-400" />
          <span className="text-xs font-medium text-slate-700 dark:text-slate-200">Upload Files (.txt, .docx)</span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500">Drag files or click to browse</span>
          <input
            type="file"
            multiple
            accept=".txt,.doc,.docx"
            onChange={handleFileUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
      </div>

      {/* Item List */}
      <div className="space-y-3">
        <span className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
          Batch Queue ({items.length} items)
        </span>

        {items.length === 0 ? (
          <p className="text-xs text-slate-400 dark:text-slate-500 italic text-center py-6">
            Queue is empty. Add text snippets or upload files above.
          </p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/80 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <FileText className="w-5 h-5 text-brand-600 dark:text-brand-400 shrink-0" />
                <div className="overflow-hidden">
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate block">
                    {item.name}
                  </span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                    {item.humanizedText || item.originalText}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {item.status === "processing" && (
                  <span className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 font-mono">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" /> Humanizing...
                  </span>
                )}
                {item.status === "done" && (
                  <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                    {item.humanScore}% Human
                  </span>
                )}
                {item.status === "idle" && (
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                    Ready
                  </span>
                )}

                <button
                  onClick={() => handleRemove(item.id)}
                  className="p-1 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
