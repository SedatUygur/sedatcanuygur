import * as React from "react";

import type { Meta, StoryFn, StoryObj } from "@storybook/react";

const meta = {
  component: React.Fragment,
  parameters: {},
  tags: ["autodocs"],
  title: "ColorPalette",
} satisfies Meta<React.ComponentProps<typeof React.Fragment>>;

const Template: StoryFn<React.ComponentProps<typeof React.Fragment>> = () => (
  <React.Fragment>
    <div className="flex flex-row w-full space-x-4">
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="h-20 w-20 bg-midnight">Midnight</div>
            <div className="h-20 w-20 bg-twilight">Twilight</div>
            <div className="h-20 w-20 bg-dusk">Dusk</div>
            <div className="h-20 w-20 bg-cloud">Cloud</div>
            <div className="h-20 w-20 bg-fog">Fog</div>
          </div>
          <div className="flex flex-row">
            <div className="h-20 w-20 bg-radiance">Radiance</div>
            <div className="h-20 w-20 bg-warmth">Warmth</div>
            <div className="h-20 w-20 bg-shine">Shine</div>
            <div className="h-20 w-20 bg-gleam">Gleam</div>
            <div className="h-20 w-20 bg-bright">Bright</div>
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
