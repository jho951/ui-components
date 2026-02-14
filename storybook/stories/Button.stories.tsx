import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../packages/ui/button";

const meta: Meta<typeof Button> = {
  title: "Actions/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Button component playground and prop controls.",
      },
    },
  },
  args: {
    children: "Click me",
    variant: "primary",
    size: "m",
    disabled: false,
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};
