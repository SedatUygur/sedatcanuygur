import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Footer } from '@/components/Footer';

const meta = {
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Footer',
} satisfies Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => <Footer />;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
};
