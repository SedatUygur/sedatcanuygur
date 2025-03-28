import type { PropsWithChildren } from 'react';

import { Blockquote } from '@/components/mdx/Blockquote';

type Props = {
  link: string;
  linkText?: string;
} & PropsWithChildren;

export function BlockquoteWithLink({ link, linkText, children }: Props) {
  return (
    <div className="my-6">
      <Blockquote noMargin>{children}</Blockquote>
      <div className="-mt-6 flex justify-center">
        <a href={link}>{linkText || link}</a>
      </div>
    </div>
  );
}
