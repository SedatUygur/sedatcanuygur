import { BlogCard } from "@/components/BlogCard";
import { fetchPosts } from "@/lib/FetchPosts";

export default async function Blog() {
  const posts = await fetchPosts();
  return (
    <div className="flex flex-col space-y-4 not-prose">
      {posts.map((post) => post && <BlogCard key={post.slug} post={post} />)}
    </div>
  );
}
