import Image from 'next/image';

import { HeroCard } from '@/components/HeroCard';

import heroPic from '/public/images/SedatCanUygur.jpg';

export function HeroComponent() {
  return (
    <div className="flex max-w-5xl flex-col [grid-template-areas:'header_hero_hero''sub_hero_hero'] lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-4">
      <div className="flex [grid-area:hero]">
        <Image
          priority
          alt="Hero Image"
          className="aspect-content rounded-lg object-cover object-center"
          height={510}
          width={510}
          src={heroPic}
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col items-start space-y-2 [grid-area:header]">
        <h1 className="text-primary dark:text-bright text-3xl font-bold tracking-tighter lg:text-4xl">
          Sedat Can Uygur
        </h1>
        <h3 className="text-primary dark:text-bright text-2xl font-bold tracking-tighter lg:text-3xl">
          Senior Software Engineer
        </h3>
        <p className="text-primary dark:text-bright text-lg lg:text-xl">
          Hi, welcome to my personal website. Here you can find my latest blog
          posts and projects.
        </p>
      </div>
      <div className="flex [grid-area:sub]">
        <div className="flex h-full w-full flex-col items-start space-y-2 lg:justify-between">
          <HeroCard title="Blog" description="My blog posts" href="/blog" />
          <HeroCard title="CV" description="My CV" href="/cv" />
          <HeroCard
            title="GitHub"
            description="GitHub repositories"
            href="/open-source"
          />
        </div>
      </div>
    </div>
  );
}
