import { Code } from "bright";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { PublishedOnOldBlog } from "@/components/mdx/PublishedOnOldBlog";

Code.theme = {
  dark: "solarized-dark",
  light: "solarized-light",
  lightSelector: "html.light",
};

export const mdxComponents: MDXComponents = {
  h2: ({ id, children }) => {
    return (
      <h2 id={id}>
        {children}
        <a aria-label={id} href={`#${id}`} className="p-1 italic font-bold">
          #
        </a>
      </h2>
    );
  },
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
