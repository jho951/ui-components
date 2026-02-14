import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from "../../packages/ui/drawer";
import { Button } from "../../packages/ui/button";

const meta = {
  title: "Feedback/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "Drawer component playground and prop controls." } },
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Drawer">
          Drawer content
        </Drawer>
      </>
    );
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
