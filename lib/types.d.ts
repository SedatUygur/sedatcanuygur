export type Post = {
  content: string;
  date: string;
  description: string;
  draft: boolean;
  href?: string;
  slug: string;
  tags: string[];
  title: string;
};
