import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Pagination } from '@/components/Pagination';

const meta = {
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Pagination',
} satisfies Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = ({ page, numPages, path }) => (
  <Pagination page={page} numPages={numPages} path={path} />
);

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
  args: {
    page: 1,
    numPages: 2,
    path: '/storybook',
  },
};
