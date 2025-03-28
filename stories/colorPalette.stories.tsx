import * as React from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react';

const meta = {
  component: React.Fragment,
  parameters: {},
  tags: ['autodocs'],
  title: 'ColorPalette',
} satisfies Meta<React.ComponentProps<typeof React.Fragment>>;

const Template: StoryFn<React.ComponentProps<typeof React.Fragment>> = () => (
  <React.Fragment>
    <div className="flex w-full flex-row space-x-4">
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="bg-midnight h-20 w-20">Midnight</div>
            <div className="bg-twilight h-20 w-20">Twilight</div>
            <div className="bg-dusk h-20 w-20">Dusk</div>
            <div className="bg-cloud h-20 w-20">Cloud</div>
            <div className="bg-fog h-20 w-20">Fog</div>
          </div>
          <div className="flex flex-row">
            <div className="bg-radiance h-20 w-20">Radiance</div>
            <div className="bg-warmth h-20 w-20">Warmth</div>
            <div className="bg-shine h-20 w-20">Shine</div>
            <div className="bg-gleam h-20 w-20">Gleam</div>
            <div className="bg-bright h-20 w-20">Bright</div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  render: Template,
};
