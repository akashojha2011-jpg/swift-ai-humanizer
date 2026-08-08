import Link from "next/link";
import { ShieldCheck, Lock, EyeOff, Database, Server, UserCheck, FileText, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Swift AI Humanizer",
  description: "Read Swift AI Humanizer's strict privacy policy regarding ephemeral RAM text processing, zero data retention, and zero LLM training guarantees.",
};

export default function PrivacyPage() {
  return (
    <div className="relative overflow-hidden bg-[#F9FAFB] dark:bg-[#0F172A] min-h-screen py-16 transition-colors font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Strict Ephemeral Processing Policy</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Last updated: August 8, 2026 • Version 2.4
          </p>
        </div>

        {/* Highlight Guarantee Box */}
        <div className="bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 text-xs text-emerald-950 dark:text-emerald-200">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <Lock className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="font-heading font-extrabold text-base block text-emerald-950 dark:text-emerald-100">
              Our Zero Permanent Storage Commitment
            </span>
            <p className="leading-relaxed font-sans text-emerald-900 dark:text-emerald-300">
              Text pasted into Swift AI Humanizer is processed ephemerally in RAM strictly for the milliseconds needed to run our transformation pipeline. We never log, store, sell, or use your private writing to train AI models.
            </p>
          </div>
        </div>

        {/* Detailed Legal Sections */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-float space-y-10 text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-heading font-bold text-base">
              <Server className="w-4 h-4 text-brand-600 dark:text-emerald-400" />
              <h2>1. Ephemeral Data Processing Architecture</h2>
            </div>
            <p>
              When you submit text to the Swift AI Humanizer workbench, your input undergoes line-by-line pattern analysis, feature balancing, and formatting preservation entirely in stateless server memory (RAM).
            </p>
            <p>
              Once the humanized output is returned to your browser window, all internal representations of your submitted text are immediately purged from active memory. No persistent database entries, log files, or disk caches are created on our servers.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-heading font-bold text-base">
              <EyeOff className="w-4 h-4 text-brand-600 dark:text-emerald-400" />
              <h2>2. Zero Third-Party Selling &amp; Zero LLM Model Training</h2>
            </div>
            <p>
              We guarantee that your original text, transformed output, and personal document drafts are never sold, rented, or commercialized. Furthermore, Swift AI Humanizer does not feed submitted user text into public or private Large Language Model (LLM) training datasets (such as OpenAI, Anthropic, or Google Gemini datasets).
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-heading font-bold text-base">
              <Database className="w-4 h-4 text-brand-600 dark:text-emerald-400" />
              <h2>3. Client-Side Browser History &amp; LocalStorage Rights</h2>
            </div>
            <p>
              To provide a convenient user experience, your recent humanization history and selected theme preferences (light/dark mode) are stored strictly on your own device within client-side browser storage (<code className="font-mono text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-slate-950 px-1.5 py-0.5 rounded">localStorage</code>).
            </p>
            <p>
              This data never touches our servers. You maintain total authority to view, export, or clear your history at any time using the "Clear All History" button in the History Drawer or by clearing your web browser cache.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-heading font-bold text-base">
              <ShieldCheck className="w-4 h-4 text-brand-600 dark:text-emerald-400" />
              <h2>4. Security Standards &amp; Transport Encryption</h2>
            </div>
            <p>
              All communication between your browser and Swift AI Humanizer is encrypted using industry-standard TLS 1.3 / SSL HTTPS protocol with 256-bit encryption. This ensures your documents remain confidential and protected against eavesdropping during transmission.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-heading font-bold text-base">
              <UserCheck className="w-4 h-4 text-brand-600 dark:text-emerald-400" />
              <h2>5. Compliance with GDPR &amp; CCPA Privacy Regulations</h2>
            </div>
            <p>
              Because Swift AI Humanizer does not collect personal identity profiles, persistent user accounts, or stored document databases, we inherently satisfy the core privacy mandates of the European General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
              <li><strong>The Right to be Forgotten:</strong> Automatic by design since zero server logs exist.</li>
              <li><strong>The Right to Restrict Processing:</strong> You control all execution directly from your browser.</li>
              <li><strong>No Data Monetization:</strong> Zero sale or transfer of user data.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-heading font-bold text-base">
              <FileText className="w-4 h-4 text-brand-600 dark:text-emerald-400" />
              <h2>6. Contact Us Regarding Privacy Inquiries</h2>
            </div>
            <p>
              If you have any questions regarding our privacy practices, ephemeral processing architecture, or data policies, feel free to reach out to our team at <a href="mailto:privacy@swiftaihumanizer.com" className="text-brand-600 dark:text-emerald-400 underline font-semibold">privacy@swiftaihumanizer.com</a>.
            </p>
          </section>
        </div>

        {/* Footer Link back to tool */}
        <div className="text-center pt-4">
          <Link
            href="/#humanizer"
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 dark:text-emerald-400 hover:underline"
          >
            <span>Back to Humanizer Tool</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
