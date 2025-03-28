import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Header } from '@/components/Header';

const meta = {
  component: Header,
  parameters: {},
  tags: ['autodocs'],
  title: 'Header',
} satisfies Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => <Header />;

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
