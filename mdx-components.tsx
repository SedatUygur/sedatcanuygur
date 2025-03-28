import { Code } from 'bright';
import type { MDXComponents } from 'mdx/types';
import Image, { type ImageProps } from 'next/image';

import { Aside } from '@/components/mdx/Aside';
import { BasicDiv } from '@/components/mdx/BasicDiv';
import { Blockquote } from '@/components/mdx/Blockquote';
import { BlockquoteWithLink } from './components/mdx/BlockquoteWithLink';
import { CodeblockTitle } from '@/components/mdx/CodeblockTitle';
import { H2AndAnchor } from '@/components/mdx/H2AndAnchor';
import { InlineCodeBlock } from '@/components/mdx/InlineCodeBlock';
import { PublishedOnOldBlog } from '@/components/mdx/PublishedOnOldBlog';

Code.theme = {
  dark: 'solarized-dark',
  light: 'solarized-light',
  lightSelector: 'html.light',
};

export const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <a href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  ),
  Aside: Aside,
  BasicDiv: BasicDiv,
  blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  BlockquoteWithLink: BlockquoteWithLink,
  code: ({ children }) => <InlineCodeBlock>{children}</InlineCodeBlock>,
  /**
   * Renders a div element with optional class name and properties.
   * If the class name includes "rehype-code-title", it renders a CodeblockTitle component.
   *
   * @param {Object} props - Component properties.
   * @param {string} [props.className] - Optional class name for styling.
   * @param {React.ReactNode} props.children - The content to be displayed inside the div.
   * @returns {JSX.Element} The rendered div or CodeblockTitle component.
   */
  div: ({ className, children, ...props }) => {
    if (className?.includes('rehype-code-title')) {
      return <CodeblockTitle {...props}>{children}</CodeblockTitle>;
    }

    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  },
  h2: ({ id, children }) => <H2AndAnchor id={id}>{children}</H2AndAnchor>,
  img: (props) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      placeholder="blur"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      height={450}
      width={450}
      {...(props as ImageProps)}
    />
  ),
  PublishedOnOldBlog: PublishedOnOldBlog,
  pre: Code,
};

/**
 * Overrides the default MDX components with our custom ones.
 *
 * @param {MDXComponents} components The default MDX components.
 * @returns {MDXComponents} The overridden MDX components.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxComponents,
  };
}
