import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

import { fetchPost, fetchPosts } from "@/lib/FetchPosts";
import { mdxComponents } from "@/mdx-components";

type BlogPostPageParams = {
  params: { slug: string };
};

/**
 * Generates metadata for a blog post based on its slug.
 *
 * @param {{ params: { id: string } }} props - The props given to the page component.
 * @returns {Promise<Metadata>} The metadata for the blog post, or an empty object if the post is not found.
 */
export async function generateMetadata({
  params,
}: BlogPostPageParams): Promise<Metadata> {
  const { slug } = await params;

  const post = await fetchPost(slug);

  if (post) {
    return {
      title: post.title,
      description: post.description,
    };
  } else {
    return {};
  }
}

/**
 * Generates static route parameters for the blog post pages.
 *
 * @returns {Promise<BlogPostPageParams[]>} An array of objects with a single property `slug` that can be used as route parameters.
 */
export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

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
