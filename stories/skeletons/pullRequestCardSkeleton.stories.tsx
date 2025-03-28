import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { PullRequestCardSkeleton } from '@/components/skeletons/PullRequestCardSkeleton';

const meta = {
  component: PullRequestCardSkeleton,
  parameters: {},
  tags: ['autodocs'],
  title: 'Skeletons/PullRequestCardSkeleton',
} satisfies Meta<typeof PullRequestCardSkeleton>;

const Template: StoryFn<typeof PullRequestCardSkeleton> = () => (
  <div className="max-w-md">
    <PullRequestCardSkeleton />
  </div>
);

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
};
