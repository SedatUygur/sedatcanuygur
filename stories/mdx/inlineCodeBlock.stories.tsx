import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { InlineCodeBlock } from "@/components/mdx/InlineCodeBlock";

const meta = {
  component: InlineCodeBlock,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "MDX/InlineCodeBlock",
} satisfies Meta<typeof InlineCodeBlock>;

const Template: StoryFn<typeof InlineCodeBlock> = () => (
  <div className="prose">
    <p>
      This is
      <InlineCodeBlock>an inline code block</InlineCodeBlock>
      in Storybook
    </p>
  </div>
);

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
};
