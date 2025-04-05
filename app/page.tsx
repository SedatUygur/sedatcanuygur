/* import Link from 'next/link';
import { Suspense } from 'react';

import { BlogCard } from '@/components/BlogCard';
import { BlogCardSkeleton } from '@/components/skeletons/BlogCardSkeleton';
import { Button } from '@/components/ui/Button';
import { HeroComponent } from '@/components/HeroComponent';
import { fetchPosts } from '@/lib/FetchPosts'; */
/* import Image from "next/image";
import { Blockquote } from "@radix-ui/themes"; 
import "@radix-ui/themes/styles.css"; 
import { Play } from "lucide-react"; 
import { Card, CardContent } from "@/components/ui/Card"; */
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Accordion } from 'radix-ui';

import { Button } from '@/components/ui/Button';

import { ContactForm } from '@/components/ContactForm';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

/* interface Testimonial {
  quote: string;
  author: string;
  position: string;
  image: string;
} */

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string;
  url: string;
}

interface Service {
  title: string;
  description: string;
  icon: string;
}

export default async function Home() {
  //const posts = await fetchPosts();
  /* const testimonials: Testimonial[] = [
    {
      quote: "I've worked with this developer for many years, both as a full time employee and a freelancer. As a Product Manager I've always appreciated that they deliver quality software on time. However, their biggest strength is their user centric mindset and proactively finding solutions to problems that we as a Product- and Design team did not even see before.",
      author: "Matthias Schubert",
      position: "Product Management Consultant",
      image: "/testimonials/matthias.jpg",
    },
    {
      quote: "This developer is excellent, could not have imagined a better developer! They go above and beyond with their work. They're very reliable, fast and highly flexible on all accounts. Communication was seamless and always honest. Hard to find someone more dedicated than them. Their services are fairly priced for the passion and the quality you receive. Strongly recommend doing business with them and hope to work with them again soon!",
      author: "Philipp Wendler",
      position: "Spreebau Pro",
      image: "/testimonials/philipp.jpg",
    },
    {
      quote: "This developer helped me relaunch my portfolio website in a very short amount of time. What impressed me the most was their understanding of design as well as their suggestions that ended up making the site even more dynamic. I also always felt comfortable with them in technical processes unknown to me, as they took their time to explain everything to me and also guided me through the Content Management System in detail.",
      author: "Axel Lauer",
      position: "Creative Director",
      image: "/testimonials/axel.jpg",
    },
  ]; */

  const projects: Project[] = [
    {
      title: 'Sun & Sand Sports',
      description:
        'Sun & Sand Sports is a leading sports retailer in the Middle East.',
      image: '/images/projects/Project2_1.png',
      technologies: 'Salesforce, SFCC, MoEngage',
      url: 'https://en-ae.sssports.com',
    },
    {
      title: 'Under Armour',
      description:
        'Under Armour builds game-changing sportswear, athletic shirts, shoes and more.',
      image: '/images/projects/Project3_1.png',
      technologies: 'Next.js, React.js, Vercel',
      url: 'https://www.underarmour.com/en-us',
    },
    {
      title: 'Saklı Orman',
      description:
        "Türkiye's Most Delicious Mushrooms from the Forests of Türkiye, with the Labor of Our Villagers",
      image: '/images/projects/Project1_1.png',
      technologies: 'ASP.NET 4.0, Bootstrap, jQuery',
      url: 'https://www.sakliorman.com',
    },
    {
      title: 'Portakal Bahçem',
      description:
        'Order fresh Finike Oranges and natural fruits and products from gardens in Finike easily with online shopping.',
      image: '/images/projects/Project4_1.png',
      technologies: 'Laravel, Azure, jQuery',
      url: 'https://www.portakalbahcem.com',
    },
    {
      title: 'Fieldscope',
      description:
        'Fieldscope is a SaaS-based next generation business tool for enterprises specializing in field service management.',
      image: '/images/projects/Project5_1.png',
      technologies: 'ASP.NET Core, C#, PHP, Azure, jQuery',
      url: 'https://fieldscope.io',
    },
  ];

  const services: Service[] = [
    {
      title: 'Consulting',
      description:
        'Architecture, business analysis, development, project management.',
      icon: '/images/services/consulting.svg',
    },
    {
      title: 'DevOps',
      description:
        'Alerting, CI / CD, cloud platforms and technologies, deployment, monitoring, QA, release, testing',
      icon: '/images/services/devops.svg',
    },
    {
      title: 'SaaS',
      description:
        'Fast, scalable & secure web applications with robust architecture.',
      icon: '/images/services/saas.png',
    },
    {
      title: 'Web and mobile apps',
      description:
        'back-end, front-end, full-stack, API, cloud platforms and technologies, databases, mobile technologies, PWA, testing, web services',
      icon: '/images/services/app.png',
    },
    {
      title: 'Website Development',
      description: 'cloud computing, e-commerce, SEO, testing',
      icon: '/images/services/website.png',
    },
  ];

  const companies = [
    {
      title: 'Sun & Sand Sports',
      icon: '/images/companies/sss.jpg',
      url: 'https://en-ae.sssports.com',
    },
    {
      title: 'Under Armour',
      icon: '/images/companies/ua.jpg',
      url: 'https://www.underarmour.com/en-us',
    },
    {
      title: 'EPAM',
      icon: '/images/companies/epam.jpg',
      url: 'https://www.epam.com',
    },
    {
      title: 'feature/mind',
      icon: '/images/companies/fm.jpg',
      url: 'https://featuremind.com',
    },
    {
      title: 'Vodafone',
      icon: '/images/companies/vodafone.png',
      url: 'https://www.vodafone.com.tr',
    },
    {
      title: 'Kreatif',
      icon: '/images/companies/kreatif.jpg',
      url: 'https://www.kreatif.net',
    },
  ];

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex h-screen flex-col justify-between">
        <Header />
        {/* <main className="flex flex-1 flex-col gap-y-8 px-16 pt-4">
          <section className="flex w-full justify-center">
            <HeroComponent />
          </section>
          <section className="md:flex md:w-full md:justify-center">
            <div className="prose">
              <div className="not-prose flex flex-col space-y-4">
                <h2 className="text-primary dark:text-bright text-center text-3xl font-bold tracking-tighter sm:text-4xl">
                  Latest Blog Posts
                </h2>
                <div className="mt-8 flex flex-col space-y-6">
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
                      <Link href={'/blog'}>
                        <Button className="cursor-pointer">Read More...</Button>
                      </Link>
                    </div>
                  </Suspense>
                </div>
              </div>
            </div>
          </section>
        </main> */}
        <main className="min-h-screen bg-white text-black dark:bg-[#020618] dark:text-white">
          {/* Hero Section */}
          <section className="mx-auto max-w-4xl px-4 pt-15 text-center md:px-8">
            <div className="max-w-4xl">
              <h1 className="mb-15 text-3xl leading-tight font-medium md:text-5xl">
                I develop apps you love.
                <br />
                On time and on budget.
              </h1>
              <div className="mt-15 grid grid-cols-1 gap-8 md:grid-cols-4">
                <div>
                  <p className="mb-1 text-gray-400">8 years</p>
                  <p>Experience</p>
                </div>
                <div>
                  <p className="mb-1 text-gray-400">C#, Java, Python, JS, TS</p>
                  <p>Core Tech Stack</p>
                </div>
                <div>
                  <p className="mb-1 text-gray-400">Remote</p>
                  <p>Location</p>
                </div>
                <div>
                  <p className="mb-1 text-gray-400">English & Turkish</p>
                  <p>Languages</p>
                </div>
              </div>
              <div className="mt-15">
                <Button
                  asChild
                  className="rounded-md bg-black px-6 py-5 text-base font-normal text-white hover:bg-violet-500 dark:bg-white dark:text-black dark:hover:bg-violet-500"
                >
                  <Link href="#contact">Hire me</Link>
                </Button>
              </div>
            </div>
          </section>
          {/* Recent Work Section */}
          <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
            <h2 className="mb-14 text-center text-3xl font-medium">
              Recent work
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <Link href={project.url} key={index}>
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-lg bg-zinc-900"
                  >
                    <div className="relative h-72 w-full">
                      <div className="bg-opacity-50 absolute inset-0 z-10 flex items-center justify-center bg-zinc-800">
                        {/* <Button variant="outline" className="rounded-full w-16 h-16 border-white border-2">
                          <Play className="w-6 h-6" />
                        </Button> */}
                        <Image
                          priority
                          alt="Project Image"
                          //className="w-6 h-6"
                          height={720}
                          src={project.image}
                          width={1280}
                        />
                      </div>
                      <div className="h-full w-full bg-zinc-800"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="mt-4 mb-2 text-xl font-medium text-white">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-gray-400">
                        {project.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        {project.technologies}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          {/* Process Section */}
          <section className="mx-auto max-w-3xl px-4 py-16 text-center md:px-8">
            <h2 className="mb-6 text-2xl font-medium md:text-3xl">
              I help you from an idea to a project launch.
            </h2>
            <div className="mt-10 space-y-8">
              <div className="flex gap-6">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  1
                </div>
                <div>
                  <h3 className="text-left text-xl font-medium">
                    Tell me about your project
                  </h3>
                  <p className="mt-1 text-gray-400">
                    Tell me about your project on a free 30 minutes call.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  2
                </div>
                <div>
                  <h3 className="text-left text-xl font-medium">
                    A proposal including costs and launch date
                  </h3>
                  <p className="mt-1 text-gray-400">
                    In a week you will receive an offer and a launch date for
                    your project.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  3
                </div>
                <div>
                  <h3 className="text-left text-xl font-medium">
                    Contract if we agree
                  </h3>
                  <p className="mt-1 text-gray-400">
                    We need a solid contract to protect both sides
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  4
                </div>
                <div>
                  <h3 className="text-left text-xl font-medium">
                    Software development
                  </h3>
                  <p className="mt-1 text-gray-400">
                    I start working on the project and inform you with regular
                    updates about the progress.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  5
                </div>
                <div>
                  <h3 className="text-left text-xl font-medium">
                    Feedback & Test
                  </h3>
                  <p className="mt-1 text-left text-gray-400">
                    When I complete the development, you will test the project
                    and I will make changes according to your feedback.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  6
                </div>
                <div>
                  <h3 className="text-left text-xl font-medium">Launch</h3>
                  <p className="mt-1 text-gray-400">
                    When everything is OK, your project will launch!
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  7
                </div>
                <div>
                  <h3 className="text-left text-xl font-medium">
                    Maintenance & Support
                  </h3>
                  <p className="mt-1 text-gray-400">
                    After your project is launched, I will help you with bug
                    fixes and maintenance if needed.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Call to Action Section */}
          <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-2xl md:text-3xl">
                Want to launch a project together?
              </h2>
              <Button
                asChild
                className="rounded-md bg-black px-6 py-2 font-normal text-white hover:bg-violet-500 dark:bg-white dark:text-black dark:hover:bg-violet-500"
              >
                <Link href="#contact">Hire me today</Link>
              </Button>
            </div>
            {/* Testimonial */}
            {/* <div className="mt-12 mb-20">
              <Card className="bg-zinc-900 border-0 rounded-lg max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <Blockquote className="mb-6 text-lg text-gray-300">
                    {testimonials[0].quote}
                  </Blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-700 mr-4 overflow-hidden">
                      <div className="w-full h-full bg-zinc-700"></div>
                    </div>
                    <div>
                      <p className="font-medium">{testimonials[0].author}</p>
                      <p className="text-sm text-gray-400">{testimonials[0].position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div> */}
          </section>
          {/* About Section */}
          <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="md:w-1/3">
                <div className="h-80 w-80 overflow-hidden">
                  <Image
                    priority
                    alt="Sedat Can Uygur"
                    height={320}
                    src="/images/SedatCanUygur.jpg"
                    width={320}
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="mb-4 text-xl font-medium">
                  Hi, I am Sedat Can Uygur!
                </h2>
                <div className="space-y-4 text-black dark:text-white">
                  <p>
                    I’m a Senior Software Engineer with eight years of
                    professional experience in full-stack development,
                    particularly in C#, Java, Python, JavaScript and TypeScript.
                  </p>
                  <p>
                    I’ve worked extensively on enterprise-level projects where
                    I’ve leveraged microservices and cloud technologies to build
                    robust and scalable solutions.
                  </p>
                  <p>
                    I’ve had the opportunity to work with global brands in the
                    sports and retail industries by delivering end-to-end
                    solutions support for high-traffic e-commerce platforms.
                  </p>
                  <p>
                    Ultimately, my goal is to deliver innovative solutions align
                    with business objectives and provide exceptional UX.
                  </p>
                  <p>
                    If you are looking for help on your projects, continue
                    reading to learn more about my services and how to contact
                    with me!
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-24">
              <h2 className="mb-8 text-center text-3xl font-medium">
                My Clients
              </h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="text-center text-black opacity-70 dark:text-white"
                  >
                    <Link href={company.url}>
                      <Image
                        priority
                        alt={company.title}
                        height={128}
                        src={company.icon}
                        width={128}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Services Section */}
          <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
            <h2 className="mb-10 text-center text-3xl font-medium">Services</h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex h-48 w-48 flex-shrink-0 items-center justify-center rounded-md">
                    <div className="h-48 w-48 opacity-70">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={256}
                        height={256}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-medium">
                      {service.title}
                    </h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* FAQ Section */}
          <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
            <h2 className="mb-8 text-center text-3xl font-medium">FAQ</h2>
            <div className="mx-auto max-w-3xl">
              {/* <div className="border-t border-zinc-800 py-5">
                <button className="w-full flex items-center justify-between text-left">
                  <span className="text-lg">Do you also offer design services?</span>
                  <span className="text-2xl">+</span>
                </button>
              </div>
              <div className="border-t border-zinc-800 py-5">
                <button className="w-full flex items-center justify-between text-left">
                  <span className="text-lg">How much will my project cost?</span>
                  <span className="text-2xl">+</span>
                </button>
              </div>
              <div className="border-t border-zinc-800 py-5">
                <button className="w-full flex items-center justify-between text-left">
                  <span className="text-lg">Which CMS do you use?</span>
                  <span className="text-2xl">+</span>
                </button>
              </div>
              <div className="border-t border-zinc-800 py-5">
                <button className="w-full flex items-center justify-between text-left">
                  <span className="text-lg">Which frameworks do you use?</span>
                  <span className="text-2xl">+</span>
                </button>
              </div>
              <div className="border-t border-zinc-800 py-5">
                <button className="w-full flex items-center justify-between text-left">
                  <span className="text-lg">What is your hourly rate?</span>
                  <span className="text-2xl">+</span>
                </button>
              </div> */}
              <Accordion.Root
                className="bg-mauve6 w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
                defaultValue="item-1"
                type="single"
                collapsible
              >
                <Accordion.Item
                  className="focus-within:shadow-mauve12 mt-px overflow-hidden border-t border-zinc-800 py-5 first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]"
                  value="item-1"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group bg-mauve1 text-violet11 shadow-mauve6 hover:bg-mauve2 flex h-[45px] w-full flex-1 cursor-default items-center justify-between px-5 text-left text-[15px] leading-none outline-none">
                      <p className="text-lg">
                        Do you also offer design services?
                      </p>{' '}
                      <ChevronDown
                        className="text-violet10 text-2xl transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                        aria-hidden
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-5">
                    <p>
                      Unfortunately, no in most cases! I rarely help clients
                      with design tasks.
                    </p>
                    <p>
                      Let me know what you need and I can find a designer from
                      my network to collaborate with us on your project.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item
                  className="focus-within:shadow-mauve12 mt-px overflow-hidden border-t border-zinc-800 py-5 first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]"
                  value="item-2"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group bg-mauve1 text-violet11 shadow-mauve6 hover:bg-mauve2 flex h-[45px] w-full flex-1 cursor-default items-center justify-between px-5 text-left text-[15px] leading-none outline-none">
                      <p className="text-lg">How much will my project cost?</p>{' '}
                      <ChevronDown
                        className="text-violet10 text-2xl transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                        aria-hidden
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-5">
                    <p>
                      It depends! The best way to find out is to contact with
                      me, tell me more about your project and get a proposal
                      from me.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item
                  className="focus-within:shadow-mauve12 mt-px overflow-hidden border-t border-zinc-800 py-5 first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]"
                  value="item-3"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group bg-mauve1 text-violet11 shadow-mauve6 hover:bg-mauve2 flex h-[45px] w-full flex-1 cursor-default items-center justify-between px-5 text-left text-[15px] leading-none outline-none">
                      <p className="text-lg">Which frameworks do you use?</p>{' '}
                      <ChevronDown
                        className="text-violet10 text-2xl transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                        aria-hidden
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-5">
                    <p>
                      I use frameworks like ASP.NET Core, Spring, Django,
                      FastAPI, React, Next.js and Node.js.
                    </p>
                    <p>
                      Every project does not require a framework and some
                      projects may need other frameworks than the ones I
                      mentioned.
                    </p>
                    <p>
                      A framework choice comes with pros and cons. It must be
                      evaluated based on your project goals and requirements.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item
                  className="focus-within:shadow-mauve12 mt-px overflow-hidden border-t border-zinc-800 py-5 first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]"
                  value="item-4"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group bg-mauve1 text-violet11 shadow-mauve6 hover:bg-mauve2 flex h-[45px] w-full flex-1 cursor-default items-center justify-between px-5 text-left text-[15px] leading-none outline-none">
                      <p className="text-lg">What is your hourly rate?</p>{' '}
                      <ChevronDown
                        className="text-violet10 text-2xl transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                        aria-hidden
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-5">
                    <p>
                      I prefer working on a fixed-price. Do not worry, I will
                      work quickly and deliver your project as fast as possible.
                    </p>
                    <p>
                      I am also open to hourly rate proposals and negotiations.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
          </section>
          {/* Contact Section */}
          <section
            id="contact"
            className="mx-auto max-w-lg bg-white py-16 dark:bg-[#020618]"
          >
            <div className="mb-10">
              <div className="text-md inline-flex items-center gap-2 rounded py-1">
                <span className="rounded bg-black px-2 py-0.5 text-sm text-white dark:bg-white dark:text-black">
                  New!
                </span>
                <span className="font-medium">MVP Development ! </span>
                <span>Launch your project in 1 month for 5,000€.</span>
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-medium">
              Tell me about your project
            </h2>
            <p className="mb-8">
              Send me a message about your project and I will return to you ASAP
            </p>
            <div className="max-w-lg rounded-lg p-8">
              <ContactForm />
            </div>
            <div className="mt-8">
              <p>Or contact me directly:</p>
              <p>
                Email:{' '}
                <a href="mailto:sedat.uygur@outlook.com" className="">
                  sedat.uygur@outlook.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+905458257262" className="">
                  +90 545 825 7262
                </a>
              </p>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
