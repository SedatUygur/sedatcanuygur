import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

import { fetchPost, fetchPosts } from "@/lib/FetchPosts";
import { mdxComponents } from "@/mdx-components";

type BlogPostPageParams = {
  params: {
    slug: string;
  };
};

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
