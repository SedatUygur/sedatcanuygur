import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog",
  description: "My blog posts",
  metadataBase: new URL("https://sedatcanuygur.vercel.app"),
  openGraph: {
    title: "Blog - Sedat Can Uygur",
    description: "My blog posts",
    url: "https://sedatcanuygur.vercel.app/blog",
    siteName: "Sedat Can Uygur's personal website",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og?title=Blog",
        width: 960,
        height: 540,
        alt: "Blog page",
        type: "image/png",
      },
    ],
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
