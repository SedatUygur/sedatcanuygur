import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

import { fetchPost } from "@/lib/FetchPosts";
import { mdxComponents } from "@/mdx-components";

type BlogPostPageParams = {
  params: {
    slug: string;
  };
};
/**
 * A page that displays a single blog post given by the slug in the URL params.
 *
 * @example
 * // URL: http://localhost:3000/blog/hello-world
 * <BlogPost params={{ slug: "hello-world" }} />
 *
 * @param {BlogPostPageParams} params - The props given to the page component.
 * @returns {React.ReactElement} The blog post page element.
 */
export default async function BlogPost({ params }: BlogPostPageParams) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) return notFound();

  return (
    <MDXRemote
      source={post.content}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkFrontmatter],
        },
      }}
      components={mdxComponents}
    />
  );
}
