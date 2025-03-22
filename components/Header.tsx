import Link from "next/link";

import { ModeToggle } from "@/components/ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { GitHubButton } from "@/components/ui/GitHubButton";
import { LinkedInButton } from "@/components/ui/LinkedInButton";
import { XButton } from "@/components/ui/XButton";
import { HighlightedLink } from "@/components/ui/HighlightedLink";

export function Header() {
  return (
    <header className="mb-4 border-b border-primary dark:border-bright">
      <div className="hidden md:flex h-full flex-row px-16">
        <div className="container px-0 flex flex-row items-center justify-between">
          <HighlightedLink label="Home" href="/" />
          <div className="flex flex-row items-center space-x-4">
            <HighlightedLink label="About" href="/about" />
            <HighlightedLink label="Blog" href="/blog" />
            <HighlightedLink label="CV" href="/cv" />
            <HighlightedLink label="Open Source" href="/open-source" />
            <HighlightedLink label="Contact" href="/contact" />
            <div className="flex flex-row items-center space-x-2">
              <GitHubButton
                href={"https://github.com/SedatUygur/sedatcanuygur"}
              />
              <XButton href={"https://x.com/@_SedatUygur"} />
              <LinkedInButton
                href={"https://www.linkedin.com/in/sedat-can-uygur"}
              />
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex px-16">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400">
              <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link aria-label="Home" href="/">
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link aria-label="About" href="/about">
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link aria-label="Blog" href="/blog">
                Blog
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link aria-label="CV" href="/cv">
                CV
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link aria-label="Open Source" href="/open-source">
                Open Source
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link aria-label="Contact" href="/contact">
                Contact
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
