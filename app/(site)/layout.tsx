import type { Metadata } from "next";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/Toaster";

export const metadata: Metadata = {
  title: "Sedat Can Uygur",
  description: "Sedat Can Uygur | My personal website",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div>
        <Header />
        <main className="flex flex-col justify-between px-16 pt-4">
          {children}
        </main>
        <Toaster />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
