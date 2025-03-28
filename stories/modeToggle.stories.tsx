import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { ModeToggle } from '@/components/ModeToggle';

const meta = {
  component: ModeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'ModeToggle',
} satisfies Meta<typeof ModeToggle>;

const Template: StoryFn<typeof ModeToggle> = () => <ModeToggle />;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
};
