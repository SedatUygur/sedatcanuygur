/* import { BlogCard } from '@/components/BlogCard';
import { Pagination } from '@/components/Pagination';
import { TagSelect } from '@/components/TagSelect'; 
import { fetchPosts, fetchTags } from '@/lib/FetchPosts';*/
import { HeroPost } from '@/components/HeroPost';
import { MorePosts } from '@/components/MorePosts';
import { fetchPosts } from '@/lib/FetchPosts';

/* type SearchParams = Promise<{ page?: string; tags?: string }>;

type BlogProps = {
  searchParams: SearchParams;
};
{ searchParams }: BlogProps */

export default async function Blog() {
  /*const searchParameters = await searchParams;
  const page = (searchParameters.page && parseInt(searchParameters.page)) || 1;
  const start = (page - 1) * 5; */

  const posts = await fetchPosts();
  const heroPost = posts[0];
  const morePosts = posts.slice(1);
  // const tags = await fetchTags();

  /* const selectedTags = searchParameters.tags
    ? searchParameters.tags.split(',')
    : [];
  const filteredPosts = posts.filter((post) =>
    selectedTags.every((tag) => post.tags.includes(tag)),
  );
  const numPages = Math.ceil(filteredPosts.length / 5); */
  {
    /* <div className="flex flex-col items-center space-y-6">
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
    </div> */
  }
  return (
    <div className="container mx-auto px-5">
      <section className="mt-16 mb-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
        <h1 className="text-5xl leading-tight font-bold tracking-tighter md:pr-8 md:text-8xl">
          Blog
        </h1>
      </section>
      <HeroPost
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        date={heroPost.date}
        author={heroPost.author}
        slug={heroPost.slug}
        description={heroPost.description}
      />
      {morePosts.length > 0 && <MorePosts posts={morePosts} />}
    </div>
  );
}
