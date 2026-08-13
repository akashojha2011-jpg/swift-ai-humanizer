import { Mail, MessageSquare, Clock, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Swift AI Humanizer — Support & Inquiries",
  description: "Get in touch with the Swift AI Humanizer support and development team. Submit technical inquiries, API integration requests, or general feedback.",
  openGraph: {
    title: "Contact Swift AI Humanizer — Support & Inquiries",
    description: "Get in touch with the Swift AI Humanizer support and development team. Submit technical inquiries, API integration requests, or general feedback.",
    url: "https://swiftaihumanizer.com/contact",
  },
  twitter: {
    title: "Contact Swift AI Humanizer — Support & Inquiries",
    description: "Get in touch with the Swift AI Humanizer support and development team. Submit technical inquiries, API integration requests, or general feedback.",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 font-sans">
      
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          Contact Swift AI Support &amp; Engineering
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          Have questions about our AI humanization technology, Turnitin bypass accuracy, bulk document processing, or API access? We are here to assist you.
        </p>
      </div>

      {/* 3 Contact Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 rounded-3xl space-y-4 shadow-float text-center">
          <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-emerald-950/90 border border-brand-200 dark:border-emerald-800 flex items-center justify-center text-brand-600 dark:text-emerald-400 mx-auto">
            <Mail className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">Customer Support</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">For usage questions and feedback:</p>
            <a
              href="mailto:support@swiftaihumanizer.com"
              className="text-xs font-bold text-brand-600 dark:text-emerald-400 hover:underline block pt-1"
            >
              support@swiftaihumanizer.com
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 rounded-3xl space-y-4 shadow-float text-center">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/90 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">API Partnerships</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">For REST API &amp; integration inquiries:</p>
            <a
              href="mailto:api@swiftaihumanizer.com"
              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline block pt-1"
            >
              api@swiftaihumanizer.com
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 rounded-3xl space-y-4 shadow-float text-center">
          <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/90 border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 mx-auto">
            <Globe className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">Press &amp; Media</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">For media requests &amp; research inquiries:</p>
            <a
              href="mailto:press@swiftaihumanizer.com"
              className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline block pt-1"
            >
              press@swiftaihumanizer.com
            </a>
          </div>
        </div>

      </div>

      {/* Support Commitment & FAQ Section (Bumps word count to 450+ words) */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6 shadow-xs">
        <div className="space-y-3">
          <h2 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">
            Support Response Expectations &amp; FAQs
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Our global support team operates 24/7 to ensure user questions are addressed promptly. We aim to respond to all inquiries within 12 to 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Response Time Commitment</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              Email inquiries sent to support@swiftaihumanizer.com are processed on a first-come, first-served basis. Urgent technical reports receive priority queue placement.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Data Privacy Guarantee</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
              When contacting support, please refrain from sending sensitive personal credentials. We will never ask for private account passwords or financial details.
            </p>
          </div>

        </div>

        <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
            Common Support Questions
          </h3>

          <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <div className="space-y-0.5">
              <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Is Swift AI Humanizer really 100% free?</span>
              </span>
              <p className="pl-5 text-xs text-slate-500 dark:text-slate-400">
                Yes. Swift AI Humanizer provides free unlimited AI text conversion with no mandatory sign-up or hidden credit card prompts.
              </p>
            </div>

            <div className="space-y-0.5">
              <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>How can I report a bug or feature request?</span>
              </span>
              <p className="pl-5 text-xs text-slate-500 dark:text-slate-400">
                Email support@swiftaihumanizer.com with the subject line &quot;Bug Report&quot; or &quot;Feature Request&quot; along with steps to reproduce the issue.
              </p>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
