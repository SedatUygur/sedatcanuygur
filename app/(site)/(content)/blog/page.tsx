import { BlogCard } from '@/components/BlogCard';
import { Pagination } from '@/components/Pagination';
import { TagSelect } from '@/components/TagSelect';
import { fetchPosts, fetchTags } from '@/lib/FetchPosts';

type SearchParams = Promise<{ page?: string; tags?: string }>;

type BlogProps = {
  searchParams: SearchParams;
};

export default async function Blog({ searchParams }: BlogProps) {
  const searchParameters = await searchParams;
  const page = (searchParameters.page && parseInt(searchParameters.page)) || 1;
  const start = (page - 1) * 5;

  const posts = await fetchPosts();
  const tags = await fetchTags();

  const selectedTags = searchParameters.tags
    ? searchParameters.tags.split(',')
    : [];
  const filteredPosts = posts.filter((post) =>
    selectedTags.every((tag) => post.tags.includes(tag)),
  );
  const numPages = Math.ceil(filteredPosts.length / 5);

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-primary dark:text-bright text-3xl font-bold">
        Blog Posts
      </h1>
      <div className="w-full">
        <TagSelect tags={tags} />
      </div>
      <div className="not-prose flex flex-col space-y-4">
        {filteredPosts.slice(start, start + 5).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
        <Pagination page={page} numPages={numPages} path="blog" />
      </div>
    </div>
  );
}
