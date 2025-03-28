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
      draft: false,
      title: 'Blog Card Story',
      slug: '/storybook',
      date: '01-01-0000',
      tags: [],
      description: 'A BlogCard component story',
      content: '',
    },
  },
};

export const ExternalBlogPost: Story = {
  render: Template,
  args: {
    post: {
      draft: false,
      title: 'External Blog Card Story',
      slug: '/storybook',
      date: '01-01-0000',
      tags: [],
      description: 'An external BlogCard component story',
      content: '',
      href: 'https://sedatcanuygur.vercel.app/storybook/',
    },
  },
};
