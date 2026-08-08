import type { Metadata } from "next";
import "./globals.css";
import { LayoutWrapper } from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Free AI Humanizer - Make ChatGPT Sound Human | Swift AI",
  description: "Free AI humanizer that converts ChatGPT to natural human writing. Bypass GPTZero, Turnitin & Copyleaks with 98% accuracy. Preserves formatting. No signup required.",
  verification: {
    google: "Q7t__lMAWQEgaCl8IcVh58OwV254zz5chfeJyfq7ag8",
  },
  keywords: [
    "ai humanizer",
    "free ai humanizer",
    "best ai humanizer",
    "ai text humanizer",
    "chatgpt humanizer",
    "claude humanizer",
    "gemini humanizer",
    "undetectable ai text",
    "ai detection bypass",
    "humanize ai content",
    "ai content rewriter",
    "make ai text sound natural",
    "swift ai humanizer",
    "turnitin ai detector bypass",
    "bypass gptzero detection free",
    "academic essay ai humanizer turnitin safe"
  ],
  authors: [{ name: "Swift AI Team" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Free AI Humanizer - Make ChatGPT Sound Human | Swift AI",
    description: "Free AI humanizer that converts ChatGPT to natural human writing. Bypass GPTZero, Turnitin & Copyleaks with 98% accuracy. Preserves formatting. No signup required.",
    url: "https://swiftaihumanizer.com",
    siteName: "Swift AI Humanizer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Humanizer - Make ChatGPT Sound Human | Swift AI",
    description: "Bypass GPTZero & Turnitin with 98% accuracy. Free AI humanizer for ChatGPT, Claude & Gemini.",
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
    "description": "Free AI text humanizer to convert ChatGPT, Claude, and Gemini into human-sounding writing that bypasses GPTZero and Turnitin.",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2500"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an AI humanizer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI humanizer is a tool that converts AI-generated text from ChatGPT, Claude, or Gemini into natural human-sounding writing. It removes detection patterns that AI detectors like GPTZero and Turnitin recognize, while preserving your original meaning and formatting."
        }
      },
      {
        "@type": "Question",
        "name": "Does Swift AI humanizer really bypass GPTZero and Turnitin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Swift AI Humanizer has been tested against 5,000 ChatGPT-4o and Claude 3.5 Sonnet samples with a 98% bypass rate on both GPTZero and Turnitin 2026."
        }
      },
      {
        "@type": "Question",
        "name": "Will this change the meaning of my text?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Swift AI preserves all meaning, facts, and formatting. We only adjust sentence structure, add natural contractions, and vary tone to make it sound human-written."
        }
      },
      {
        "@type": "Question",
        "name": "Is Swift AI humanizer completely free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 100% free forever. No credit card, no account signup, unlimited usage."
        }
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#F9FAFB] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 selection:bg-brand-100 selection:text-brand-900 transition-colors">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
