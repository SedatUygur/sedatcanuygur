import { BlogCard } from "@/components/BlogCard";
import { Pagination } from "@/components/Pagination";
import { fetchPosts } from "@/lib/FetchPosts";

type BlogProps = {
  searchParams: {
    page?: string;
  };
};

export default async function Blog({ searchParams }: BlogProps) {
  const searchParameters = await searchParams;
  const page = (searchParameters.page && parseInt(searchParameters.page)) || 1;
  const start = (page - 1) * 5;

  const posts = await fetchPosts();
  const numPages = Math.ceil(posts.length / 5);

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-primary dark:text-bright font-bold text-3xl">
        Blog Posts
      </h1>
      <div className="flex flex-col space-y-4 not-prose">
        {posts.slice(start, start + 5).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
        <Pagination page={page} numPages={numPages} path="blog" />
      </div>
    </div>
  );
}
