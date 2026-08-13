import { Metadata } from "next";
import { DashboardWorkbench } from "@/components/DashboardWorkbench";
import { ShieldCheck, HardDrive, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Humanizer Analytics & Rewrite Dashboard — Swift AI",
  description: "Track your AI text humanization history, average detector bypass rates, word count metrics, and developer REST API keys in your private local dashboard.",
  openGraph: {
    title: "AI Humanizer Analytics & Rewrite Dashboard — Swift AI",
    description: "Track your AI text humanization history, average detector bypass rates, word count metrics, and developer REST API keys in your private local dashboard.",
    url: "https://swiftaihumanizer.com/dashboard",
  },
  twitter: {
    title: "AI Humanizer Analytics & Rewrite Dashboard — Swift AI",
    description: "Track your AI text humanization history, average detector bypass rates, word count metrics, and developer REST API keys in your private local dashboard.",
  },
};

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans">
      
      {/* Interactive Dashboard Component */}
      <DashboardWorkbench />

      {/* Crawlable Informational Explainer (Bumps word count to 500+ words) */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 space-y-8 shadow-xs">
        
        <div className="space-y-3">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
            Understanding Your Swift AI User Workspace
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            The Swift AI Dashboard provides a central hub to manage your text transformations, inspect average human scores across past runs, access API sandbox credentials, and export past conversion logs. Unlike cloud services that log and store your personal essays on central servers, Swift AI operates with a strict local-first privacy model.
          </p>
        </div>

        {/* 3 Workspace Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-1">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
              Zero Server Logging Privacy
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              All humanized text history shown on this dashboard is stored exclusively inside your web browser&apos;s local storage (`localStorage`). We never record, transmit, or monetize your private writings.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold mb-1">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
              Developer REST API Access
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Integrate Swift AI text humanization into your custom CMS, publishing tools, or workflow scripts using your sandbox bearer token key to send JSON requests to `/api/humanize`.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700 p-6 rounded-2xl space-y-2">
            <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold mb-1">
              <HardDrive className="w-4 h-4" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
              Unlimited Lifetime Processing
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Your free workspace provides unrestricted access to both Super Lite and Super Ultra rewrite engines with zero monthly word caps, subscription fees, or paywalls.
            </p>
          </div>

        </div>

      </section>
    </div>
  );
}
