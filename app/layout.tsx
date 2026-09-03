import type { Metadata } from "next";
import { Blinker, Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { JsonLd, orgJsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import "./globals.css";

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-blinker",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "German UDS India | German-accredited degrees, studied from home",
    template: "%s | German UDS India",
  },
  description:
    "Study a state-recognised German Master's, MBA or Micro-Degree fully online from India. Save travel and housing costs. Student Affairs support throughout. Optional Founder's MBA pathway to Berlin.",
  keywords: [
    "German UDS India",
    "online German degree",
    "study from India",
    "MBA Digital Transformation",
    "MSc Applied AI",
    "Micro-Degree ECTS",
    "Founder's MBA Berlin",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.indiaName,
    title: "German UDS India | German-accredited degrees, studied from home",
    description:
      "A German university degree without relocating. Master's, MBA, Micro-Degrees, Fast Track and Founder's MBAs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "German UDS India",
    description: "German-accredited online degrees for learners in India.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${blinker.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col font-poppins antialiased">
        <JsonLd data={orgJsonLd()} />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-orange focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
