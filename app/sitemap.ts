import type { MetadataRoute } from "next";

import { fetchPosts } from "@/lib/FetchPosts";

/**
 * Generates the sitemap for the blog.
 *
 * @returns A promise that resolves with an array of objects containing the url and the last modified date for each route.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchPosts();

  const blogs = posts.map((post) => ({
    url: `https://sedatcanuygur.vercel.app/blog/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = ["", "/blog", "/contact", "/cv"].map((route) => ({
    url: `https://sedatcanuygur.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
