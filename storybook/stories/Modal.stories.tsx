import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "../../packages/ui/modal";
import { Button } from "../../packages/ui/button";

const meta = {
  title: "Feedback/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Modal component playground and prop controls.",
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Preview"
          content="<p>Modal content from Storybook</p>"
        />
      </>
    );
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
