export const metadata = {
  title: "About Us — Swift AI Humanizer",
  description: "Learn about Swift AI Humanizer and our mission to provide clean, formatting-aware AI text humanization for writers worldwide.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 font-sans">
      <div className="text-center space-y-3">
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white">
          About Swift AI Humanizer
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Building the cleanest, most accurate AI text humanization engine for students, writers, and professionals.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl space-y-6 shadow-float text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <p>
          Swift AI Humanizer was created to solve a common problem with AI text tools: raw AI output sounds overly formal and generic, while traditional humanizers strip away document formatting like bold text and bullet points.
        </p>
        <p>
          Our specialized engine preserves bullet lists, headers, and bold text while replacing robotic AI buzzwords and tuning sentence burstiness so your content passes Turnitin 2026 and GPTZero v2 cleanly.
        </p>
      </div>
    </div>
  );
}
