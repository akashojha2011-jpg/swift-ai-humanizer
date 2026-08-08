"use client";

import React from "react";

interface DetectorLogo {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const DETECTORS: DetectorLogo[] = [
  {
    name: "Turnitin",
    color: "text-[#0066CC] dark:text-[#3399FF]",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#0066CC" fillOpacity="0.12" />
        <path d="M7 16V8M7 8H13C15 8 16.5 9.5 16.5 11.5C16.5 13.5 15 15 13 15H10L14.5 19" stroke="#0066CC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "GPTZero",
    color: "text-[#2563EB] dark:text-[#60A5FA]",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#2563EB" fillOpacity="0.12" />
        <circle cx="12" cy="12" r="6" stroke="#2563EB" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="12" cy="12" r="2.5" fill="#2563EB" />
      </svg>
    ),
  },
  {
    name: "Copyleaks",
    color: "text-[#0284C7] dark:text-[#38BDF8]",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#0284C7" fillOpacity="0.12" stroke="#0284C7" strokeWidth="1.8" />
        <path d="M14.5 8.5C13.5 7.5 11.5 7.5 10 9C8.5 10.5 8.5 13.5 10 15C11.5 16.5 13.5 16.5 14.5 15.5" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "ZeroGPT",
    color: "text-[#1E3A8A] dark:text-[#93C5FD]",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1E3A8A" fillOpacity="0.12" />
        <path d="M12 4C8 4 5 7 5 11C5 13.5 6.5 15.5 8.5 16.5V19C8.5 19.5 9 20 9.5 20H14.5C15 20 15.5 19.5 15.5 19V16.5C17.5 15.5 19 13.5 19 11C19 7 16 4 12 4Z" stroke="#1E3A8A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 11L14 11M12 9L12 13" stroke="#1E3A8A" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "QuillBot",
    color: "text-[#059669] dark:text-[#34D399]",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#059669" fillOpacity="0.12" />
        <path d="M6 14C6 9 10 6 15 6C15 11 12 15 7 15" fill="#059669" />
        <circle cx="16" cy="8" r="1.5" fill="white" />
      </svg>
    ),
  },
  {
    name: "Writer",
    color: "text-[#0F172A] dark:text-white",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#0F172A" />
        <path d="M7 8L9.5 16L12 10L14.5 16L17 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Sapling",
    color: "text-[#4F46E5] dark:text-[#818CF8]",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#4F46E5" fillOpacity="0.12" />
        <path d="M7 9L12 15L17 9" stroke="#4F46E5" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Originality.ai",
    color: "text-[#7C3AED] dark:text-[#A78BFA]",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#7C3AED" fillOpacity="0.12" />
        <path d="M8 12C8 9.5 9.8 7.5 12 7.5C14.2 7.5 16 9.5 16 12C16 14.5 14.2 16.5 12 16.5" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="#7C3AED" />
      </svg>
    ),
  },
];

export function DetectorMarquee() {
  // Multiply list 3x for smooth infinite marquee loop
  const marqueeList = [...DETECTORS, ...DETECTORS, ...DETECTORS];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-float max-w-6xl mx-auto space-y-4 overflow-hidden transition-colors">
      <div className="text-center space-y-1">
        <h3 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 dark:text-white tracking-tight">
          AI Humanizer can bypass these AI detectors
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Tested and verified against all major detection algorithms
        </p>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden pt-2 pb-1">
        {/* Gradient Fades on Left & Right */}
        <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max items-center gap-6 animate-marquee hover:[animation-play-state:paused]">
          {marqueeList.map((detector, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 hover:border-brand-300 dark:hover:border-emerald-800 transition-all shadow-2xs shrink-0 group"
            >
              {detector.icon}
              <span className={`font-heading font-bold text-xs sm:text-sm ${detector.color} group-hover:scale-105 transition-transform`}>
                {detector.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
