import fs from "fs/promises";
import matter from "gray-matter";
import { cache, ReactElement } from "react";

import { Post } from "@/lib/types";

const thirdPartyPosts: Post[] = [];

/**
 * Reads all MDX files in the `public/posts/` directory and returns an array of
 * parsed posts. Only non-draft posts are included.
 *
 * @returns {Promise<Post[]>} An array of parsed posts.
 */
async function parseMdxFiles() {
  const filePaths = await fs.readdir("./public/posts/");

  const postsData = [];

  for (const filePath of filePaths) {
    const postFilePath = `./public/posts/${filePath}`;
    const postContent = await fs.readFile(postFilePath, "utf8");
    const { data } = matter(postContent);

    if (!data.draft) {
      const postData = { ...data, content: postContent } as Post;
      postsData.push(postData);
    }
  }

  return postsData;
}

const parsedMdxFiles = cache(parseMdxFiles);

/**
 * Retrieves all posts from the `public/posts/` directory and third-party blog posts.
 * The posts are sorted in descending order by date.
 *
 * @returns {Promise<Post[]>} An array of posts.
 */
export async function fetchPosts() {
  const postsData = await parsedMdxFiles();
  const postsAndThirdPartyPosts = [...postsData, ...thirdPartyPosts];

  return postsAndThirdPartyPosts.sort((a, b) =>
    a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0,
  ) as Post[];
}

/**
 * Fetches a single blog post by its slug.
 *
 * @param {string} slug - The unique identifier for the blog post.
 * @returns {Post | undefined} The blog post with the given slug, or undefined if not found.
 */

export async function fetchPost(slug: string) {
  const posts = await fetchPosts();
  return posts.find((post) => post.slug === slug);
}

/**
 * Returns an object of React components keyed by blog post slug.
 *
 * @returns {Promise<Record<string, () => ReactElement>>} An object of React components.
 */
export async function postComponents() {
  const components: Record<string, () => ReactElement> = {};

  const postsData = await parsedMdxFiles();

  for (const post of postsData) {
    const { default: Component } = await import(
      `@/public/posts/${post.date}-${post.slug}.mdx`
    );

    components[post.slug] = Component;
  }
  return components;
}
