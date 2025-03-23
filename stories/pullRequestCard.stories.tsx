import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { PullRequestCard } from "@/components/PullRequestCard";

const meta = {
  component: PullRequestCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "PullRequestCard",
} satisfies Meta<typeof PullRequestCard>;

const Template: StoryFn<typeof PullRequestCard> = ({ pullRequest }) => (
  <PullRequestCard pullRequest={pullRequest} />
);

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
  args: {
    pullRequest: {
      createdAt: "2025-03-23",
      number: 1,
      title: "Storybook Pull Request",
      bodyHTML: "<div>Pull Request Body</div>",
      permalink: "/storybook",
      repository: {
        name: "sedatcanuygur",
        nameWithOwner: "SedatUygur/sedatcanuygur",
        url: "https://github.com/SedatUygur/sedatcanuygur",
        owner: {
          login: "SedatUygur",
        },
      },
    },
  },
};
