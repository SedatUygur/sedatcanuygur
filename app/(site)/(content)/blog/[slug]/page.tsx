import { lazy } from "react";
import { fetchPost } from "@/lib/FetchPosts";
import { notFound } from "next/navigation";

type BlogPostPageParams = {
  params: {
    slug: string;
  };
};
export default async function BlogPost({
  params: { slug },
}: BlogPostPageParams) {
  const post = await fetchPost(slug);

  if (!post) return notFound();

  const MdxComponent = lazy(
    () => import(`@/public/posts/${post.date}-${post.slug}.mdx`),
  );

  return <MdxComponent />;
}
