import type { PropsWithChildren } from 'react';

type Props = {
  id?: string;
} & PropsWithChildren;

/**
 * Renders an h2 element with an optional anchor link.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.id] - The id for the h2 element and anchor link.
 * @param {React.ReactNode} props.children - The content to be displayed inside the h2 element.
 * @returns {JSX.Element} The rendered h2 element with an anchor link.
 */

export function H2AndAnchor({ id, children }: Props) {
  return (
    <h2 className="group" id={id}>
      {children}
      <a
        aria-label={id}
        href={`#${id}`}
        className="p-2 font-bold italic opacity-0 group-hover:opacity-75"
      >
        #
      </a>
    </h2>
  );
}
