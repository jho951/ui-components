import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "../../packages/ui/avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    name: "Jhon Smith",
    size: "m",
    shape: "circle",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {};
