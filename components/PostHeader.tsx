import dayjs from 'dayjs';

import { Avatar, AvatarImage } from './ui/Avatar';
import CoverImage from './ui/CoverImage';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  const postDate = dayjs(date).format('DD MMM YYYY');
  return (
    <>
      <h1 className="mb-12 text-center text-5xl leading-tight font-bold tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
        {title}
      </h1>
      <div className="hidden items-center md:mb-12 md:flex">
        <Avatar className="">
          <AvatarImage src={author.picture} alt={author.name} />
        </Avatar>
        <p className="ml-2 text-lg leading-relaxed">{author.name}</p>
        <p className="ml-10 text-lg leading-relaxed">{postDate}</p>
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 flex items-center md:hidden">
          <Avatar className="">
            <AvatarImage src={author.picture} alt={author.name} />
          </Avatar>
          <p className="ml-0.5 text-lg leading-relaxed">{author.name}</p>
          <p className="ml-4.5 text-lg leading-relaxed">{postDate}</p>
        </div>
      </div>
    </>
  );
}
