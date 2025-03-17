import Link from "next/link";

import { Post } from "@/lib/types";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/Card";

type BlogCardProps = {
  post: Post;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link
          className="text-blue-500 hover:underline"
          href={`/blog/${post.slug}`}
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
}
