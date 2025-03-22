import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { fetchMDXPosts, fetchPost, postComponents } from "@/lib/FetchPosts";

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
      metadataBase: new URL("https://sedatcanuygur.vercel.app"),
      title: post.title,
      description: post.description,
      openGraph: {
        url: `/blog/${slug}`,
        title: `${post.title}`,
        siteName: "sedatcanuygur.vercel.app",
        description: post.description,
        images: [
          {
            url: `/api/og?title=${post.title}&date=${post.date}`,
            width: 960,
            height: 540,
            alt: `Blog post: ${post.title}`,
            type: "image/png",
          },
        ],
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "The resource you were looking for does not exist",
    };
  }
}

/**
 * Generates static route parameters for the blog post pages.
 *
 * @returns {Promise<BlogPostPageParams[]>} An array of objects with a single property `slug` that can be used as route parameters.
 */
export async function generateStaticParams() {
  const posts = await fetchMDXPosts();
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
export default async function BlogPost({
  params,
}: BlogPostPageParams): Promise<React.ReactElement> {
  const { slug } = await params;
  const components = await postComponents();

  const componentsSlug = components[slug];

  if (!componentsSlug) return notFound();

  return componentsSlug();
}
