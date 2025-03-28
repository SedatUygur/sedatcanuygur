import dayjs from 'dayjs';
import Link from 'next/link';
import { ExternalLinkIcon } from 'lucide-react';

import { Badge } from '@/components/ui/Badge';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

import { Post } from '@/lib/types';

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
  const postDate = dayjs(post.date).format('DD MMM YYYY');
  const cardFooter = externalLink ? (
    <CardFooter className="pt-2 pb-6">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-2">
          <p>{host}</p>
          <ExternalLinkIcon className="h-4 w-4" />
        </div>
        <div className="flex text-xs">{postDate}</div>
      </div>
    </CardFooter>
  ) : (
    <CardFooter className="pt-2 pb-6">
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full flex-row items-center justify-end">
          <div className="flex text-xs">{postDate}</div>
        </div>
        <div className="flex w-full flex-row items-center justify-end gap-2">
          {post.tags &&
            post.tags.map((tag) => (
              <Badge variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
        </div>
      </div>
    </CardFooter>
  );

  const card = (
    <Card className="shadow-lg hover:scale-101 hover:shadow-xl">
      <CardHeader className="pb-0">
        <CardTitle className="text-primary dark:text-bright">
          {post.title}
        </CardTitle>
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
