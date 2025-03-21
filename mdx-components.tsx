import { Code } from "bright";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

import { H2WithAnchor } from "@/components/mdx/H2WithAnchor";
import { InlineCodeBlock } from "@/components/mdx/InlineCodeBlock";
import { PublishedOnOldBlog } from "@/components/mdx/PublishedOnOldBlog";

Code.theme = {
  dark: "solarized-dark",
  light: "solarized-light",
  lightSelector: "html.light",
};

export const mdxComponents: MDXComponents = {
  code: ({ children }) => <InlineCodeBlock>{children}</InlineCodeBlock>,
  h2: ({ id, children }) => <H2WithAnchor id={id}>{children}</H2WithAnchor>,
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
