import type { Meta, StoryObj } from "@storybook/react";

import { EmptyState } from "../../packages/ui/empty-state";
import { Button } from "../../packages/ui/button";

const meta = {
  title: "Data Display/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "EmptyState component playground and prop controls." } },
  },
  args: {
    title: "No results",
    description: "Try changing your filters or search term.",
    action: <Button>Reset</Button>,
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
