import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { SearchBar } from "@/components/ui/SearchBar";

export function Header() {
  return (
    <div className="hidden h-full flex-row md:flex">
      <div className="container flex flex-row items-start justify-between space-y-2 p-4 sm:flex-row sm:items-center sm:space-y-0 md:h-20">
        <div className="container flex flex-row items-start space-y-2 space-x-4">
          <Link href="/">
            <div className="container flex flex-row items-center space-x-2">
              <Avatar>
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/90511329"
                  alt="Sedat Can Uygur"
                />
                <AvatarFallback>SCU</AvatarFallback>
              </Avatar>
              <h2>sedatcanuygur.com</h2>
            </div>
          </Link>
          {/* <Link href="/blog">Blog</Link>
          <Link href="/videos">Videos</Link> */}
        </div>
        <div className="container flex flex-row items-start justify-end space-y-2 space-x-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <SearchBar />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
