import { notFound } from "next/navigation";
import { lazy } from "react";

import { fetchPost } from "@/lib/FetchPosts";

type BlogPostPageParams = {
  params: {
    slug: string;
  };
};
export default async function BlogPost({ params }: BlogPostPageParams) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) return notFound();

  const MdxComponent = lazy(
    () => import(`@/public/posts/${post.date}-${post.slug}.mdx`),
  );

  return <MdxComponent />;
}
