import { Info, MoveLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";

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
  return (
    <div className="bg-white">
      <header className="print:hidden">
        <div className="h-full flex-row px-16 py-2">
          <div className="px-0 flex flex-row items-center justify-between w-full">
            <Link aria-label="Home" className="cursor-pointer" href="/">
              <MoveLeft />
            </Link>
            <Popover>
              <PopoverTrigger asChild>
                <Info className="cursor-pointer" />
              </PopoverTrigger>
              <PopoverContent className="bg-white w-80 mr-4">
                <p>
                  This is my interactive CV, which encompasses everything
                  related to my education and professional career. There are
                  links throughout the page to different technologies and to
                  projects I&apos;ve worked on.
                </p>
                <p className="mt-2">
                  This CV is also printer friendly and can be used as a resume,
                  however I do maintain a single page resume that you can
                  request via the{" "}
                  {
                    <Link
                      aria-label="Contact"
                      href="/contact"
                      className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    >
                      Contact
                    </Link>
                  }{" "}
                  page.
                </p>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
