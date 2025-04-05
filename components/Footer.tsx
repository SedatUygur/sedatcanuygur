import Image from 'next/image';

import NewsletterForm from '@/components/NewsletterForm';
import { GitHubButton } from '@/components/ui/GitHubButton';
import { LinkedInButton } from '@/components/ui/LinkedInButton';
import { XButton } from '@/components/ui/XButton';
import { HighlightedLink } from '@/components/ui/HighlightedLink';

export function Footer() {
  return (
    <footer className="bg-white py-10 text-black dark:bg-[#020618] dark:text-[#e2e8f0]">
      {/* Top Line */}
      <NewsletterForm />
      <div className="border-t-4 border-gray-200"></div>
      {/* Footer Content */}
      <div className="container mx-auto grid grid-cols-1 gap-8 px-5 py-10 md:grid-cols-2">
        {/* Logo and description */}
        <div>
          {/* Adding logo from URL */}
          <Image
            src="/images/SedatCanUygur.jpg"
            alt="Sedat Can Uygur Logo"
            className="mb-4 w-40"
            width={160}
            height={160}
          />
          <h2 className="mb-4 text-2xl font-bold">Sedat Can Uygur</h2>
          <div className="mt-4 flex space-x-4">
            {/* Social Media Icons */}
            <GitHubButton
              href={'https://github.com/SedatUygur/sedatcanuygur'}
            />
            <LinkedInButton
              href={'https://www.linkedin.com/in/sedat-can-uygur'}
            />
            <XButton href={'https://x.com/@_SedatUygur'} />
          </div>
        </div>

        {/* Pages Column */}
        <div>
          <h3 className="mb-4 font-bold">Pages</h3>
          <ul className="space-y-2">
            <li>
              <HighlightedLink label="Home" href="/" />
            </li>
            <li>
              <HighlightedLink label="About" href="/about" />
            </li>
            <li>
              <HighlightedLink label="Blog" href="/blog" />
            </li>
            <li>
              <HighlightedLink label="CV" href="/cv" />
            </li>
            <li>
              <HighlightedLink label="Repositories" href="/open-source" />
            </li>
            <li>
              <HighlightedLink label="Contact" href="/contact" />
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500">
        © {new Date().getFullYear()} Sedat Can Uygur All rights reserved
      </div>
    </footer>
  );
}
