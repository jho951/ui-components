import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb } from "../../packages/ui/breadcrumb";

const meta = {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Breadcrumb component playground and prop controls.",
      },
    },
  },
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
