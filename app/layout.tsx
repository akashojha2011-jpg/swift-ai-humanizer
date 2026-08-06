import type { Metadata } from "next";
import "./globals.css";
import { LayoutWrapper } from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Free AI Text Humanizer — Bypass GPTZero, Turnitin & Copyleaks | Swift AI Humanizer",
  description: "Free AI text humanizer to convert ChatGPT, Claude, and Gemini text into 100% human-sounding writing. Bypass GPTZero, Turnitin, Originality.ai & Copyleaks with zero sign up required.",
  verification: {
    google: "Q7t__lMAWQEgaCl8IcVh58OwV254zz5chfeJyfq7ag8",
  },
  keywords: [
    "swift ai humanizer",
    "free ai text humanizer",
    "ai to human text converter",
    "bypass gptzero detection free",
    "turnitin ai detector bypass",
    "convert chatgpt text to human writing",
    "undetectable ai text generator",
    "make chatgpt essay undetectable",
    "how to make ai writing sound natural",
    "best free ai humanizer for students",
    "originality.ai bypass free",
    "copyleaks ai detection bypass",
    "humanize claude text free",
    "humanize gemini AI text",
    "ai content rewriter free no sign up",
    "remove ai tells from writing",
    "ai perplexity and burstiness booster",
    "academic essay ai humanizer turnitin safe",
    "bypass zeroGPT online free"
  ],
  authors: [{ name: "Swift AI Team" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Free AI Text Humanizer — Convert ChatGPT to Natural Human Writing | Swift AI",
    description: "Instantly humanize AI content from ChatGPT, Claude, and Gemini. Pass GPTZero, Turnitin, and Copyleaks with 98%+ human confidence.",
    url: "https://swiftaihumanizer.com",
    siteName: "Swift AI Humanizer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Text Humanizer — Bypass AI Detectors Instantly | Swift AI",
    description: "Convert AI text into authentic human prose. Free, fast, and no sign-up required.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Swift AI Humanizer",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "description": "Free online AI text humanizer to convert ChatGPT, Claude & Gemini content into natural, undetectable human writing.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1280"
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Humanize AI Text and Bypass AI Detectors",
    "description": "Step-by-step guide to converting AI generated content into natural human writing.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Paste AI Content",
        "text": "Copy your text from ChatGPT, Claude, or Gemini into the input editor."
      },
      {
        "@type": "HowToStep",
        "name": "Select Purpose Tone & Speed Mode",
        "text": "Choose between Super Lite or Super Ultra mode and select Academic, Casual, or Marketing tone."
      },
      {
        "@type": "HowToStep",
        "name": "Click Humanize",
        "text": "Run the 4-stage pipeline to vary burstiness, inject contractions, and remove AI tells."
      },
      {
        "@type": "HowToStep",
        "name": "Copy Undetectable Human Text",
        "text": "Verify the live 0% AI detection score and copy your humanized output."
      }
    ]
  };

  const themeScript = `
    (function() {
      try {
        var saved = localStorage.getItem('aura_theme') || localStorage.getItem('swift_theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (saved === 'dark' || (!saved && prefersDark)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="Q7t__lMAWQEgaCl8IcVh58OwV254zz5chfeJyfq7ag8" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#F9FAFB] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 selection:bg-brand-100 selection:text-brand-900 transition-colors">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
