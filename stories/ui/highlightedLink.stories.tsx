import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { HighlightedLink } from '@/components/ui/HighlightedLink';

const meta = {
  component: HighlightedLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'HighlightedLink',
} satisfies Meta<typeof HighlightedLink>;

const Template: StoryFn<typeof HighlightedLink> = ({ href, label }) => (
  <HighlightedLink href={href} label={label} />
);

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
  args: {
    href: '/storybook',
    label: 'Storybook',
  },
};
