import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://sedatcanuygur.vercel.app/about",
  },
  description: "About Me",
  metadataBase: new URL("https://sedatcanuygur.vercel.app"),
  title: "About",
  openGraph: {
    title: "About - Sedat Can Uygur",
    description: "About Me",
    url: "https://sedatcanuygur.vercel.app/about",
    siteName: "Sedat Can Uygur's personal website",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og?title=About",
        width: 960,
        height: 540,
        alt: "About Me page",
        type: "image/png",
      },
    ],
  },
};

export default function About() {
  return (
    <div>
      <h1>About page is under construction</h1>
    </div>
  );
}
