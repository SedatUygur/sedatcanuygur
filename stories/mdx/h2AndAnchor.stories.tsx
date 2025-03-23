import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { H2AndAnchor } from "@/components/mdx/H2AndAnchor";

const meta = {
  title: "MDX/H2AndAnchor",
  component: H2AndAnchor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof H2AndAnchor>;

const Template: StoryFn<typeof H2AndAnchor> = () => (
  <div className="prose">
    <H2AndAnchor>This is an H2 in Storybook</H2AndAnchor>
  </div>
);
type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
};
