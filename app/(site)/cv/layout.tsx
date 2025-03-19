import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CV",
  description: "My CV",
};

export default function CVLayout({ children }: { children: ReactNode }) {
  return <div className="bg-white">{children}</div>;
}
