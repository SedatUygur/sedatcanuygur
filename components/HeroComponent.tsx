import Image from "next/image";

import { HeroCard } from "@/components/HeroCard";

import heroPic from "/public/images/SedatCanUygur.jpg";

export function HeroComponent() {
  return (
    <>
      <section className="w-full">
        <div className="flex flex-col space-y-4 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-4 [grid-template-areas:'header_hero_hero''sub_hero_hero']">
          <div className="flex [grid-area:hero]">
            <Image
              priority
              alt="Hero Image"
              className="aspect-content rounded-lg object-cover object-center"
              src={heroPic}
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col items-start space-y-2 [grid-area:header]">
            <h1 className="text-primary dark:text-bright font-bold tracking-tighter text-4xl lg:text-5xl">
              Sedat Can Uygur
            </h1>
            <h3 className="text-primary dark:text-bright font-bold tracking-tighter text-2xl lg:text-3xl">
              Senior Software Engineer
            </h3>
            <p className="text-primary dark:text-bright">
              Hi, welcome to my personal website. Here you can find my latest
              blog posts and projects.
            </p>
          </div>
          <div className="flex [grid-area:sub]">
            <div className="flex flex-col items-start space-y-2 h-full w-full">
              <HeroCard title="CV" description="My interactive CV" href="/cv" />
              <HeroCard
                title="Open Source"
                description="Open source contributions"
                href="/open-source"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
