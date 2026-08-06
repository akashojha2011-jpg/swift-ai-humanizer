import { Mail, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact Us — Swift AI Humanizer",
  description: "Get in touch with the Swift AI Humanizer team for support or feedback.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 font-sans">
      <div className="text-center space-y-3">
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white">
          Contact Us
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Have questions or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl space-y-6 shadow-float text-center">
        <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-emerald-950/90 border border-brand-200 dark:border-emerald-800 flex items-center justify-center text-brand-600 dark:text-emerald-400 mx-auto">
          <Mail className="w-5 h-5" />
        </div>

        <div className="space-y-1">
          <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Email Support</h3>
          <p className="text-xs text-slate-500">Reach out directly via email:</p>
          <a
            href="mailto:support@swiftaihumanizer.com"
            className="text-sm font-bold text-brand-600 dark:text-emerald-400 hover:underline block pt-1"
          >
            support@swiftaihumanizer.com
          </a>
        </div>
      </div>
    </div>
  );
}
