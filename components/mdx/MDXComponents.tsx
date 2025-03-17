import { Code } from "bright";
import type { MDXComponents } from "mdx/types";

/**
 * Overrides the default MDX components with our custom ones.
 *
 * @param {MDXComponents} components The default MDX components.
 * @returns {MDXComponents} The overridden MDX components.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  Code.theme = {
    dark: "github-dark",
    light: "github-light",
  };

  return {
    ...components,
    pre: Code,
  };
}
