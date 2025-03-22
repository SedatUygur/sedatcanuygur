import { BlogCard } from "@/components/BlogCard";
import { fetchPosts } from "@/lib/FetchPosts";

export default async function Blog() {
  const posts = await fetchPosts();
  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-primary dark:text-bright font-bold text-3xl">
        Blog Posts
      </h1>
      <div className="flex flex-col space-y-4 not-prose">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
