import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Toaster } from '@/components/ui/Toaster';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  alternates: {
    canonical: `https://sedatcanuygur.vercel.app`,
  },
  description: 'Sedat Can Uygur | My personal website',
  icons: {
    shortcut: './favicon.ico',
  },
  metadataBase: new URL('https://sedatcanuygur.vercel.app'),
  openGraph: {
    description: 'Senior Software Engineer',
    images: [
      {
        url: `/api/og?title=${encodeURIComponent("Sedat Can Uygur's personal website")}`,
        width: 960,
        height: 540,
        alt: "Sedat Can Uygur's personal website",
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    siteName: "Sedat Can Uygur's personal website",
    title: 'Sedat Can Uygur',
    type: 'website',
    url: 'https://sedatcanuygur.vercel.app',
  },
  title: {
    default: 'Sedat Can Uygur',
    template: '%s | Sedat Can Uygur',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@_SedatUygur',
    title: 'Sedat Can Uygur',
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
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
