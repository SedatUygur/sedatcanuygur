import { Code } from "bright";
import type { MDXComponents } from "mdx/types";
import { PublishedOnOldBlog } from "@/components/mdx/PublishedOnOldBlog";

Code.theme = {
  dark: "github-dark",
  light: "github-light",
  lightSelector: "html.dark",
};

export const mdxComponents: MDXComponents = {
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
