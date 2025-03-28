import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { HeroComponent } from '@/components/HeroComponent';

const meta = {
  component: HeroComponent,
  parameters: {},
  tags: ['autodocs'],
  title: 'HeroComponent',
} satisfies Meta<typeof HeroComponent>;

const Template: StoryFn<typeof HeroComponent> = () => <HeroComponent />;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
};

export const Mobile: Story = {
  render: Template,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
