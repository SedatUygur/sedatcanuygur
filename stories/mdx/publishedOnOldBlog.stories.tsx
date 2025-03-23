import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { PublishedOnOldBlog } from "@/components/mdx/PublishedOnOldBlog";

const meta = {
  component: PublishedOnOldBlog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "MDX/PublishedOnOldBlog",
} satisfies Meta<typeof PublishedOnOldBlog>;

const Template: StoryFn<typeof PublishedOnOldBlog> = () => (
  <div className="prose">
    <PublishedOnOldBlog />
  </div>
);

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
};
