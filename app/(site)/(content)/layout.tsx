import { ReactNode } from 'react';

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div className="md:flex md:w-full md:justify-center">
      <div className="prose dark:prose-invert">{children}</div>
    </div>
  );
}
