import dayjs from 'dayjs';
import Link from 'next/link';

import { Avatar, AvatarImage } from '@/components/ui/Avatar';
import CoverImage from '@/components/ui/CoverImage';

type Author = {
  name: string;
  picture: string;
};

type Props = {
  title: string;
  coverImage: string;
  date: string;
  description: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  description,
  author,
  slug,
}: Props) {
  const postDate = dayjs(date).format('DD MMM YYYY');
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-5xl">
            <Link href={`/blog/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">{postDate}</div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{description}</p>
          <Avatar className="">
            <AvatarImage src={author.picture} alt={author.name} />
          </Avatar>
          <p className="mb-4 text-lg leading-relaxed">{author.name}</p>
        </div>
      </div>
    </section>
  );
}
