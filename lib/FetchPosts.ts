import fs from "fs/promises";
import matter from "gray-matter";
import { cache } from "react";

import { Post } from "@/lib/types";

export const fetchPosts = cache(async () => {
  const posts = await fs.readdir("posts/");

  return Promise.all(
    posts.map(async (file) => {
      const filePath = `./public/posts/${file}`;
      const postContent = await fs.readFile(filePath, "utf8");
      const { data } = matter(postContent);

      if (data.published === false) {
        return null;
      }

      return data as Post;
    }),
  );
});

export async function fetchPost(slug: string) {
  const posts = await fetchPosts();
  return posts.find((post) => post?.slug === slug);
}

export default fetchPosts;
