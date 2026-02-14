import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "../../packages/ui/divider";

const meta = {
  title: "Data Display/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Divider component playground and prop controls.",
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
