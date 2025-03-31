export type Post = {
  author: {
    name: string;
    picture: string;
  };
  content: string;
  coverImage: string;
  date: string;
  description: string;
  draft: boolean;
  href?: string;
  slug: string;
  tags: string[];
  title: string;
  updated?: string;
};
