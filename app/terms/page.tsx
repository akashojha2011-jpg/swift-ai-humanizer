export const metadata = {
  title: "Terms of Service — Swift AI Humanizer",
  description: "Terms of Service and usage guidelines for Swift AI Humanizer free AI text humanizer.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 font-sans">
      <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="font-heading font-extrabold text-3xl text-slate-900 dark:text-white">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-500 font-mono">Last updated: August 2026</p>
      </div>

      <div className="prose prose-slate dark:prose-invert text-xs leading-relaxed space-y-6">
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-base text-slate-900 dark:text-white">
            1. Acceptable Use
          </h2>
          <p>
            Swift AI Humanizer is provided as a free tool for writers, students, bloggers, and professionals to enhance text readability, vary sentence burstiness, and refine AI-generated drafts. Users are responsible for complying with their institution's or employer's academic integrity and editorial policies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-base text-slate-900 dark:text-white">
            2. Disclaimer of Detection Warranties
          </h2>
          <p>
            While our 4-stage pipeline is engineered to maximize human confidence scores across third-party detection models (GPTZero, Turnitin, Copyleaks), third-party algorithms update continuously. Swift AI Humanizer is provided "as-is" without warranty of guaranteed outcomes.
          </p>
        </section>
      </div>
    </div>
  );
}
