import Link from "next/link";
import { Suspense } from "react";

import { BlogCard } from "@/components/BlogCard";
import { BlogCardSkeleton } from "@/components/skeletons/BlogCardSkeleton";
import { Button } from "@/components/ui/Button";
import { HeroCard } from "@/components/HeroCard";
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
      <div className="flex flex-col h-screen justify-between px-16 pt-4">
        <Header />
        <main className="flex-1 flex flex-col gap-y-8">
          <section className="w-full">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                  Sedat Can Uygur - Software Engineer
                </h1>
              </div>
            </div>
          </section>
          <section>
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <HeroCard
                  title="CV"
                  description="My interactive CV"
                  href="/cv"
                />
              </div>
            </div>
          </section>
          <section className="w-full">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl">
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
                      <Button>Read More...</Button>
                    </Link>
                  </div>
                </Suspense>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
