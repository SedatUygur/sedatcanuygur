import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { Aside } from "@/components/mdx/Aside";

const meta = {
  component: Aside,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "MDX/Aside",
} satisfies Meta<typeof Aside>;

const Template: StoryFn<typeof Aside> = ({ heading }) => (
  <div className="prose">
    <Aside heading={heading}>This is an Aside in Storybook</Aside>
  </div>
);

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
  args: {
    heading: "Storybook Aside",
  },
};
