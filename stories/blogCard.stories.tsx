import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { BlogCard } from '@/components/BlogCard';

const meta = {
  title: 'BlogCard',
  component: BlogCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof BlogCard> = (args) => (
  <BlogCard post={args.post} />
);

export const Primary: Story = {
  render: Template,
  args: {
    post: {
      author: {
        name: 'Sedat Can Uygur',
        picture: '/images/SedatCanUygur.jpg',
      },
      content: '',
      coverImage: '/images/posts/cover.jpg',
      date: '01-01-0000',
      description: 'A BlogCard component story',
      draft: false,
      slug: '/storybook',
      tags: [],
      title: 'Blog Card Story',
    },
  },
};

export const ExternalBlogPost: Story = {
  render: Template,
  args: {
    post: {
      author: {
        name: 'Sedat Can Uygur',
        picture: '/images/SedatCanUygur.jpg',
      },
      content: '',
      coverImage: '/images/posts/cover.jpg',
      date: '01-01-0000',
      description: 'An external BlogCard component story',
      draft: false,
      href: 'https://sedatcanuygur.vercel.app/storybook/',
      slug: '/storybook',
      tags: [],
      title: 'External Blog Card Story',
    },
  },
};
