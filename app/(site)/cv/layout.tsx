import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://sedatcanuygur.vercel.app/cv",
  },
  description: "My CV",
  metadataBase: new URL("https://sedatcanuygur.vercel.app"),
  title: "CV",
  openGraph: {
    title: "CV - Sedat Can Uygur",
    description: "My CV",
    url: "https://sedatcanuygur.vercel.app/cv",
    siteName: "Sedat Can Uygur's personal website",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og?title=CV",
        width: 960,
        height: 540,
        alt: "CV page",
        type: "image/png",
      },
    ],
  },
};

export default function CVLayout({ children }: { children: ReactNode }) {
  return <div className="bg-white">{children}</div>;
}
