import { ReactNode } from "react";

export default function CVLayout({ children }: { children: ReactNode }) {
  return <div className="bg-white">{children}</div>;
}
