import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { FAQS_DATA } from "@/components/FAQSection";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Humanize AI text: Free AI Humanizer | Swift AI Humanizer",
  description: "Free AI humanizer that turns ChatGPT, Claude & Gemini text into 100% human writing. Bypass Turnitin & GPTZero, backed by IEEE research, no sign-up.",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Humanize AI text: Free AI Humanizer | Swift AI Humanizer",
    description: "Free AI humanizer that turns ChatGPT, Claude & Gemini text into 100% human writing. Bypass Turnitin & GPTZero, backed by IEEE research, no sign-up.",
    url: "https://swiftaihumanizer.com",
    siteName: "Swift AI Humanizer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Humanize AI text: Free AI Humanizer | Swift AI Humanizer",
    description: "Free AI humanizer that turns ChatGPT, Claude & Gemini text into 100% human writing. Bypass Turnitin & GPTZero, backed by IEEE research, no sign-up.",
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
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Swift AI Humanizer",
    "alternateName": ["Swift AI", "Swift AI Humanizer Free"],
    "url": "https://swiftaihumanizer.com"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Swift AI Humanizer",
    "url": "https://swiftaihumanizer.com",
    "logo": "https://swiftaihumanizer.com/icon.png",
    "sameAs": [
      "https://www.linkedin.com/company/swift-ai-humanizer",
      "https://whatsapp.com/channel/0029VaX78swIf-PskXW9mR1N",
      "https://x.com/swiftaihumanizer",
      "https://www.instagram.com/swiftaihumanizer"
    ]
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_DATA.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://swiftaihumanizer.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bulk Rewriter",
        "item": "https://swiftaihumanizer.com/bulk-rewriter"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Tone Customizer",
        "item": "https://swiftaihumanizer.com/tone-customizer"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "AI Detector Scanner",
        "item": "https://swiftaihumanizer.com/ai-detector"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Blog & Guides",
        "item": "https://swiftaihumanizer.com/blog"
      }
    ]
  };

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
    "description": "Free AI humanizer that turns ChatGPT, Claude & Gemini text into 100% human writing. Bypass Turnitin & GPTZero, backed by IEEE research, no sign-up.",
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
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="Q7t__lMAWQEgaCl8IcVh58OwV254zz5chfeJyfq7ag8" />
        <meta property="og:site_name" content="Swift AI Humanizer" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#F9FAFB] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 selection:bg-brand-100 selection:text-brand-900 transition-colors font-sans">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
