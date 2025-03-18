import fs from "fs/promises";
import matter from "gray-matter";
import { cache } from "react";

import { Post } from "@/lib/types";

export const fetchPosts = cache(async () => {
  const filePaths = await fs.readdir("public/posts/");

  const postsData = [];

  for (const filePath of filePaths) {
    const postFilePath = `public/posts/${filePath}`;
    const postContent = await fs.readFile(postFilePath, "utf8");
    const { data } = matter(postContent);

    if (!data.draft) {
      const postData = { ...data, content: postContent } as Post;
      postsData.unshift(postData);
    }
  }

  return postsData;
});

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

export default fetchPosts;
