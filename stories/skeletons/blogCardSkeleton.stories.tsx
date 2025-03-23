import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { BlogCardSkeleton } from "@/components/skeletons/BlogCardSkeleton";

const meta = {
  component: BlogCardSkeleton,
  parameters: {},
  tags: ["autodocs"],
  title: "Skeletons/BlogCardSkeleton",
} satisfies Meta<typeof BlogCardSkeleton>;

const Template: StoryFn<typeof BlogCardSkeleton> = () => (
  <div className="max-w-md">
    <BlogCardSkeleton />
  </div>
);

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
};
