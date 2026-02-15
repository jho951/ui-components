import type { Meta, StoryObj } from "@storybook/react";

import { NotificationCenter } from "../../packages/ui/notification-center";

const meta = {
  title: "Feedback/NotificationCenter",
  component: NotificationCenter,
  tags: ["autodocs"],
  args: {
    items: [
      { id: "n1", title: "Build completed", description: "All checks passed", createdAt: "2m ago", read: false },
      { id: "n2", title: "New comment", description: "Review requested", createdAt: "20m ago", read: true },
    ],
  },
} satisfies Meta<typeof NotificationCenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
