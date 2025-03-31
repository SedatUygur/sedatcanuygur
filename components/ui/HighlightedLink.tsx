'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  label: string;
};

export function HighlightedLink({ href, label }: Props) {
  const pathname = usePathname();
  const pathMatch = href === '/' ? pathname === href : pathname.includes(href);

  return (
    <Link
      className={clsx(
        'text-primary dark:text-bright hover:text-[#7FFF00] dark:hover:text-[#7FFF00]',
        {
          'text-shine': pathMatch,
          'dark:text-cloud': pathMatch,
        },
      )}
      aria-label={label}
      href={href}
    >
      {label}
    </Link>
  );
}
