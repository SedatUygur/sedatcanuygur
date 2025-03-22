import type { Metadata } from "next";
import Image from "next/image";

import { ContactForm } from "@/components/ContactForm";
import { GitHubButton } from "@/components/ui/GitHubButton";
import { LinkedInButton } from "@/components/ui/LinkedInButton";
import { XButton } from "@/components/ui/XButton";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Contact Me",
  metadataBase: new URL("https://sedatcanuygur.vercel.app"),
  openGraph: {
    title: "Contact - Sedat Can Uygur",
    description: "Contact Me",
    url: "https://sedatcanuygur.vercel.app/contact",
    siteName: "Sedat Can Uygur's personal website",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og?title=Contact",
        width: 960,
        height: 540,
        alt: "Contact page",
        type: "image/png",
      },
    ],
  },
};

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-20">
            <div className="space-y-8 lg:pr-8">
              <Image
                priority
                alt="Contact Image"
                className="aspect-content rounded-lg object-cover object-center"
                height={400}
                src="/images/SedatCanUygur.jpg"
                width={400}
              />
              <p>
                Feel free to reach out if you have a comment or question about
                something I have written or if you just want to connect.
              </p>
              <p>You can also find me on various social sites linked below.</p>
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
          <div className="flex space-x-4">
            <XButton href={"https://x.com/@_SedatUygur"} />
            <LinkedInButton
              href={"https://www.linkedin.com/in/sedat-can-uygur"}
            />
            <GitHubButton href={"https://github.com/SedatUygur"} />
          </div>
        </div>
      </main>
    </div>
  );
}
