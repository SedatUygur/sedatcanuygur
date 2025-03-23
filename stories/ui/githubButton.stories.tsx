import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { GitHubButton } from "@/components/ui/GitHubButton";

const meta = {
  component: GitHubButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "GitHubButton",
} satisfies Meta<typeof GitHubButton>;

const Template: StoryFn<typeof GitHubButton> = ({ href }) => (
  <GitHubButton href={href} />
);

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
  args: {
    href: "https://github.com/SedatUygur",
  },
};
