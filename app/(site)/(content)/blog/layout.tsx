import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog",
  description: "My blog posts",
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
