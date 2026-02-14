import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from "../../packages/ui/toast";
import { Button } from "../../packages/ui/button";

const meta = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Toast component playground and prop controls.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <div style={{ minHeight: 80 }}>
        <Button onClick={() => setOpen(true)}>Show Toast</Button>
        <Toast
          open={open}
          title="Saved"
          message="Your settings have been updated."
          variant="success"
          onClose={() => setOpen(false)}
        />
      </div>
    );
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
