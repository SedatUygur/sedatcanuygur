import dayjs from 'dayjs';
import Link from 'next/link';

import { Avatar, AvatarImage } from './ui/Avatar';
import CoverImage from './ui/CoverImage';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  description: string;
  author: {
    name: string;
    picture: string;
  };
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  description,
  author,
  slug,
}: Props) {
  const postDate = dayjs(date).format('DD MMM YYYY');
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">{postDate}</div>
      <p className="mb-4 text-lg leading-relaxed">{description}</p>
      <Avatar className="">
        <AvatarImage src={author.picture} alt={author.name} />
      </Avatar>
      <p className="mb-4 text-lg leading-relaxed">{author.name}</p>
    </div>
  );
}
