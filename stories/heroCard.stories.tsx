import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { HeroCard } from '@/components/HeroCard';

const meta = {
  component: HeroCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'HeroCard',
} satisfies Meta<typeof HeroCard>;

const Template: StoryFn<typeof HeroCard> = ({
  title,
  description,
  href,
  externalLink,
}) => (
  <HeroCard
    title={title}
    description={description}
    href={href}
    externalLink={externalLink}
  />
);

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
  args: {
    title: 'Storybook Hero Card',
    description: 'This is a story',
    href: '/storybook',
    externalLink: false,
  },
};

export const ExternalHeroCard: Story = {
  render: Template,
  args: {
    title: 'Storybook Hero Card',
    description: 'This is a story',
    href: '/storybook',
    externalLink: true,
  },
};
