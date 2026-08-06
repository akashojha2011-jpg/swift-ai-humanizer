import Link from "next/link";
import { ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs py-14 border-t border-slate-200/80 dark:border-slate-800 font-sans transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b border-slate-200/80 dark:border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-brand-600 relative flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                <svg
                  width="22"
                  height="22"
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

              <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900 dark:text-white leading-none">
                Swift<span className="text-brand-600 dark:text-emerald-400"> AI Humanizer</span>
              </span>
            </Link>

            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed max-w-sm">
              Free AI text humanizer to turn ChatGPT, Claude, and Gemini drafts into clear, natural writing that passes Turnitin and GPTZero.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 px-3 py-1.5 rounded-full w-fit">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Free • Privacy Protected</span>
            </div>
          </div>

          {/* Column 1: Core Tools */}
          <div className="space-y-3">
            <span className="font-heading font-bold text-slate-900 dark:text-white text-xs block">
              Core Tools
            </span>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#humanizer" className="hover:text-brand-600 dark:hover:text-white transition-colors">
                  AI Text Humanizer
                </Link>
              </li>
              <li>
                <Link href="/bulk-rewriter" className="hover:text-brand-600 dark:hover:text-white transition-colors">
                  Bulk Article Rewriter
                </Link>
              </li>
              <li>
                <Link href="/tone-customizer" className="hover:text-brand-600 dark:hover:text-white transition-colors">
                  Tone Customization
                </Link>
              </li>
              <li>
                <Link href="/ai-detector" className="hover:text-brand-600 dark:hover:text-white transition-colors">
                  AI Risk Checker
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Comparisons */}
          <div className="space-y-3">
            <span className="font-heading font-bold text-slate-900 dark:text-white text-xs block">
              Comparisons
            </span>
            <ul className="space-y-2.5">
              <li>
                <Link href="/vs/superhumanizer" className="hover:text-brand-600 dark:hover:text-white transition-colors">
                  vs Superhumanizer
                </Link>
              </li>
              <li>
                <Link href="/vs/undetectable-ai" className="hover:text-brand-600 dark:hover:text-white transition-colors">
                  vs Undetectable.ai
                </Link>
              </li>
              <li>
                <Link href="/vs/stealthgpt" className="hover:text-brand-600 dark:hover:text-white transition-colors">
                  vs StealthGPT
                </Link>
              </li>
              <li>
                <Link href="/vs/gptzero" className="hover:text-brand-600 dark:hover:text-white transition-colors">
                  Bypass GPTZero
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <span className="font-heading font-bold text-slate-900 dark:text-white text-xs block">
              Resources
            </span>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blog" className="hover:text-brand-600 dark:hover:text-white transition-colors">
                  Writers Guides & Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-600 dark:hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-brand-600 dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-600 dark:hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Swift AI Humanizer. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for writers, students & creators with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
