import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://sedatcanuygur.vercel.app/open-source",
  },
  title: "Repositories",
  description: "My GitHub repositories",
  metadataBase: new URL("https://sedatcanuygur.vercel.app"),
  openGraph: {
    title: "Repositories - Sedat Can Uygur",
    description: "My GitHub repositories",
    url: "https://sedatcanuygur.vercel.app/open-source",
    siteName: "Sedat Can Uygur's personal website",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og?title=Repositories",
        width: 960,
        height: 540,
        alt: "Repositories page",
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
