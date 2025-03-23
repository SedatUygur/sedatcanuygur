import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { LinkedInButton } from "@/components/ui/LinkedInButton";

const meta = {
  component: LinkedInButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "LinkedInButton",
} satisfies Meta<typeof LinkedInButton>;

const Template: StoryFn<typeof LinkedInButton> = ({ href }) => (
  <LinkedInButton href={href} />
);

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
  args: {
    href: "https://www.linkedin.com/in/sedat-can-uygur",
  },
};
