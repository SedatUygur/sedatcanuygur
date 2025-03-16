import type { Metadata } from "next";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/Toaster";

export const metadata: Metadata = {
  title: "Sedat Can Uygur",
  description: "Sedat Can Uygur | My personal website",
};

export default function RootLayout({
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
      <div className="flex flex-col h-screen justify-between px-16 pt-4">
        <Header />
        {children}
        <Toaster />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
