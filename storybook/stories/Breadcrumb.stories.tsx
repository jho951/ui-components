import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb } from "../../packages/ui/breadcrumb";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "Components", href: "#" },
      { label: "Breadcrumb", current: true },
    ],
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
