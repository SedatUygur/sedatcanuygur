import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

/* import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/Toaster"; */

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "Sedat Can Uygur | My personal website",
  icons: {
    shortcut: "./favicon.ico",
  },
  title: {
    default: "Sedat Can Uygur",
    template: "%s | Sedat Can Uygur",
  },
  openGraph: {
    description: "Senior Software Engineer",
    locale: "en_US",
    siteName: "Sedat Can Uygur's site",
    title: "Sedat Can Uygur",
    type: "website",
    url: "https://sedatcanuygur.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@_SedatUygur",
    title: "Sedat Can Uygur",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
