import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs pt-16 pb-12 border-t border-slate-200/60 dark:border-slate-800 font-sans transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid matching Planicorn Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-200/60 dark:border-slate-800">
          {/* Brand Column (Col Span 2) */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl bg-brand-600 relative flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5 10.5C21.5 8.6 19.9 7 18 7H13.5C10.5 7 8 9.5 8 12.5C8 15.5 10.5 18 13.5 18H18.5C21.5 18 24 20.5 24 23.5C24 26.5 21.5 29 18.5 29H14C12.1 29 10.5 27.4 10.5 25.5"
                    stroke="white"
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <span className="font-heading font-extrabold text-lg tracking-tight text-slate-900 dark:text-white leading-none">
                Swift<span className="text-brand-600 dark:text-emerald-400"> AI Humanizer</span>
              </span>
            </Link>

            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-sm">
              Free AI text humanizer to convert ChatGPT, Claude, and Gemini drafts into natural human writing. Built on peer-reviewed detection research.
            </p>
          </div>

          {/* Platform Column */}
          <div className="space-y-3">
            <span className="font-heading font-bold text-slate-900 dark:text-white text-xs block tracking-tight">
              Platform
            </span>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/#humanizer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  AI Text Humanizer
                </Link>
              </li>
              <li>
                <Link href="/bulk-rewriter" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Bulk Article Rewriter
                </Link>
              </li>
              <li>
                <Link href="/tone-customizer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Tone Customizer
                </Link>
              </li>
              <li>
                <Link href="/ai-detector" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  AI Risk Checker
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  User Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <span className="font-heading font-bold text-slate-900 dark:text-white text-xs block tracking-tight">
              Company
            </span>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/how-it-was-made" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium text-emerald-600 dark:text-emerald-400">
                  IEEE Architecture
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Blog &amp; Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="space-y-3">
            <span className="font-heading font-bold text-slate-900 dark:text-white text-xs block tracking-tight">
              Socials
            </span>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="https://www.linkedin.com/company/swifthumanizer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://whatsapp.com/channel/0029VbDhh873bbV5SARXaE3j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  WhatsApp Channel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Legal Line matching Planicorn */}
        <div className="space-y-4 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
          <p>
            Swift AI Humanizer is an AI text transformation tool. Content processed on this site is for drafting and readability enhancement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>©{new Date().getFullYear()} Swift AI Humanizer - All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
