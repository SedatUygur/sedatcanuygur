import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { Blockquote } from "@/components/mdx/Blockquote";

const meta = {
  component: Blockquote,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "MDX/Blockquote",
} satisfies Meta<typeof Blockquote>;

const Template: StoryFn<typeof Blockquote> = () => (
  <div className="prose">
    <Blockquote>This is a Blockquote is Storybook</Blockquote>
  </div>
);

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
};
