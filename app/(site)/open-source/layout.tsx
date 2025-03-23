import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://sedatcanuygur.vercel.app/open-source",
  },
  title: "Open Source",
  description: "My open source contributions",
  metadataBase: new URL("https://sedatcanuygur.vercel.app"),
  openGraph: {
    title: "Open Source - Sedat Can Uygur",
    description: "My open source contributions",
    url: "https://sedatcanuygur.vercel.app/open-source",
    siteName: "Sedat Can Uygur's personal website",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og?title=Open Source",
        width: 960,
        height: 540,
        alt: "Open Source page",
        type: "image/png",
      },
    ],
  },
};

export default function OpenSourceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="md:w-full md:flex md:justify-center">{children}</div>;
}
