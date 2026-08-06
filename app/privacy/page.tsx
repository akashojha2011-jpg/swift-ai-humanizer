export const metadata = {
  title: "Privacy Policy — Swift AI Humanizer",
  description: "Read Swift AI Humanizer's strict privacy policy regarding ephemeral text processing, data retention, and zero-data-selling guarantees.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 font-sans">
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="font-heading font-extrabold text-3xl text-slate-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 font-mono">Last updated: August 2026</p>
      </div>

      <div className="prose prose-slate dark:prose-invert text-xs leading-relaxed space-y-6">
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-base text-slate-900 dark:text-white">
            1. Zero Permanent Storage Commitment
          </h2>
          <p>
            At Swift AI Humanizer, your privacy is our foundational commitment. Text submitted into our humanizer tool or API is processed ephemerally in RAM strictly for the duration required to complete the 4-stage rewriting pipeline.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-base text-slate-900 dark:text-white">
            2. Local Storage & Client Control
          </h2>
          <p>
            Past humanization history is stored exclusively in your local browser storage (`localStorage`). You have complete authority to inspect, clear, or clear all history at any time.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-base text-slate-900 dark:text-white">
            3. No Data Selling or LLM Training
          </h2>
          <p>
            We do not sell user data, nor do we submit your original drafts to third-party public LLM training datasets.
          </p>
        </section>
      </div>
    </div>
  );
}
