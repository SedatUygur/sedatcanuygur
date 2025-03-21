import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

import { Post } from "@/lib/types";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

type BlogCardProps = {
  post: Post;
};

export function BlogCard({ post }: BlogCardProps) {
  let host;
  let href;
  let externalLink = false;
  if (post.href) {
    externalLink = true;
    href = post.href;
    host = new URL(href).host;
  } else {
    href = `/blog/${post.slug}`;
  }

  const cardFooter = externalLink ? (
    <CardFooter className="pt-2 pb-6">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row space-x-2 items-center ">
          <p>{host}</p>
          <ExternalLinkIcon className="h-4 w-4" />
        </div>
        <div className="flex text-xs">{post.date}</div>
      </div>
    </CardFooter>
  ) : (
    <CardFooter className="pt-2 pb-6">
      <div className="flex flex-row items-center justify-end w-full">
        <div className="flex text-xs">{post.date}</div>
      </div>
    </CardFooter>
  );

  const card = (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.description}</CardDescription>
      </CardHeader>
      {cardFooter}
    </Card>
  );

  return externalLink ? (
    <a href={href} target="_blank">
      {card}
    </a>
  ) : (
    <Link href={href}>{card}</Link>
  );
}
