import { Mail } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

import { GitHubButton } from '@/components/ui/GitHubButton';
import { LinkedInButton } from '@/components/ui/LinkedInButton';
import { XButton } from '@/components/ui/XButton';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://sedatcanuygur.vercel.app/about',
  },
  description: 'About Me',
  metadataBase: new URL('https://sedatcanuygur.vercel.app'),
  title: 'About',
  openGraph: {
    title: 'About - Sedat Can Uygur',
    description: 'About Me',
    url: 'https://sedatcanuygur.vercel.app/about',
    siteName: "Sedat Can Uygur's personal website",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/api/og?title=About',
        width: 960,
        height: 540,
        alt: 'About Me page',
        type: 'image/png',
      },
    ],
  },
};

export default function About() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          About
        </h1>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
        <div className="flex flex-col items-center space-x-2 pt-8">
          <Image
            src="/images/SedatCanUygur.jpg"
            alt="avatar"
            width={192}
            height={192}
            className="h-36 w-36 rounded-full"
          />
          <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">
            Sedat Can Uygur
          </h3>
          <div className="text-gray-500 dark:text-gray-400">
            Freelance Senior Software Engineer
          </div>
          <div className="flex space-x-3 pt-6">
            {/* <SocialIcon kind="mail" href={`mailto:${email}`} /> */}
            <a className="p-2" href="mailto:sedat.uygur@outlook.com">
              <Mail />
            </a>
            <GitHubButton href={'https://github.com/SedatUygur'} />
            <LinkedInButton
              href={'https://www.linkedin.com/in/sedat-can-uygur'}
            />
            <XButton href={'https://x.com/@_SedatUygur'} />
          </div>
        </div>
        <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
          <p>Hello, my name is Sedat Can Uygur.</p>
          <p>
            I’m a Senior Software Engineer with over eight years of professional
            experience in full-stack development, particularly in Java, .NET,
            Python, JavaScript and TypeScript.
          </p>
          <p>
            I’ve worked extensively on enterprise-level projects where I’ve
            leveraged microservices, containerization (Docker) and cloud
            technologies (AWS, Azure) to build robust, scalable solutions.
          </p>
          <p>
            I hold a Bachelor’s degree in Computer Engineering and I’ve had the
            opportunity to work with global brands in the sports and retail
            industries by delivering end-to-end solutions support for
            high-traffic e-commerce platforms.
          </p>
          <p>
            Over the course of my career, I’ve been involved in architecture
            design, code review, ensuring best practices and clean, maintainable
            code.
          </p>
          <p>
            I’m also comfortable with DevOps pipelines, CI/CD tools like Jenkins
            and version control systems such as Git and BitBucket.
          </p>
          <p>
            From designing RESTful and SOAP services to optimizing SQL queries
            in Oracle and SQL Server, I’m passionate about creating efficient,
            high-performing applications.
          </p>
          <p>
            I enjoy following Agile methodologies (Scrum, Kanban) and applying
            TDD/BDD principles to improve software quality.
          </p>
          <p>
            Ultimately, my goal is to deliver innovative solutions that align
            with business objectives and provide exceptional user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
