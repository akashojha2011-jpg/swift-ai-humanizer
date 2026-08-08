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

            {/* Follow Us Section */}
            <div className="space-y-2 pt-2">
              <span className="font-heading font-bold text-slate-900 dark:text-white text-xs block">
                Follow Us
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://whatsapp.com/channel/0029VbDhh873bbV5SARXaE3j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-all shadow-2xs"
                >
                  <svg className="w-3.5 h-3.5 fill-emerald-600 dark:fill-emerald-400" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.103 4.026 4.081-1.071z"/>
                  </svg>
                  <span>WhatsApp Channel</span>
                </a>

                <a
                  href="https://www.linkedin.com/company/swifthumanizer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-[11px] font-bold hover:bg-blue-100 dark:hover:bg-blue-900 transition-all shadow-2xs"
                >
                  <svg className="w-3.5 h-3.5 fill-blue-600 dark:fill-blue-400" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
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
                <Link href="/how-it-was-made" className="hover:text-brand-600 dark:hover:text-white transition-colors font-bold text-emerald-600 dark:text-emerald-400">
                  IEEE Research &amp; Architecture
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-600 dark:hover:text-white transition-colors">
                  Writers Guides &amp; Blog
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
            Built for writers, students &amp; creators with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
