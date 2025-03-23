import { Code } from "bright";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

import { Aside } from "@/components/mdx/Aside";
import { Blockquote } from "@/components/mdx/Blockquote";
import { H2AndAnchor } from "@/components/mdx/H2AndAnchor";
import { InlineCodeBlock } from "@/components/mdx/InlineCodeBlock";
import { PublishedOnOldBlog } from "@/components/mdx/PublishedOnOldBlog";

Code.theme = {
  dark: "solarized-dark",
  light: "solarized-light",
  lightSelector: "html.light",
};

export const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <a href={href} target="_blank">
      {children}
    </a>
  ),
  Aside: Aside,
  blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  code: ({ children }) => <InlineCodeBlock>{children}</InlineCodeBlock>,
  h2: ({ id, children }) => <H2AndAnchor id={id}>{children}</H2AndAnchor>,
  img: (props) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      width={450}
      height={450}
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
