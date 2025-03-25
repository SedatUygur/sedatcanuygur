import Link from "next/link";
import { Suspense } from "react";

import { BlogCard } from "@/components/BlogCard";
import { BlogCardSkeleton } from "@/components/skeletons/BlogCardSkeleton";
import { Button } from "@/components/ui/Button";
import { HeroComponent } from "@/components/HeroComponent";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

import { fetchPosts } from "@/lib/FetchPosts";

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main className="flex-1 flex flex-col gap-y-8 px-16 pt-4">
          <section className="flex justify-center w-full">
            <HeroComponent />
          </section>
          <section className="md:w-full md:flex md:justify-center">
            <div className="prose">
              <div className="flex flex-col space-y-4 not-prose">
                <h2 className="text-3xl text-primary dark:text-bright font-bold tracking-tighter text-center sm:text-4xl">
                  Latest Blog Posts
                </h2>
                <div className="flex flex-col mt-8 space-y-6">
                  <Suspense
                    fallback={
                      <div className="flex items-center">
                        <BlogCardSkeleton />
                        <BlogCardSkeleton />
                        <BlogCardSkeleton />
                      </div>
                    }
                  >
                    {posts.slice(0, 3).map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                    <div className="flex justify-center">
                      <Link href={"/blog"}>
                        <Button className="cursor-pointer">Read More...</Button>
                      </Link>
                    </div>
                  </Suspense>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
