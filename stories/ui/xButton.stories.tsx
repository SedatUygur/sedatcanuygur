import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { XButton } from "@/components/ui/XButton";

const meta = {
  component: XButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "XButton",
} satisfies Meta<typeof XButton>;

const Template: StoryFn<typeof XButton> = ({ href }) => <XButton href={href} />;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
  args: {
    href: "https://x.com/@_SedatUygur",
  },
};
