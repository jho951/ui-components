import type { Meta, StoryObj } from "@storybook/react";

import { RichTextEditor } from "../../packages/ui/rich-text-editor";

const meta = {
  title: "Form/RichTextEditor",
  component: RichTextEditor,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "RichTextEditor component playground.\n\nKeyboard:\n- Ctrl/Cmd + B: bold\n- Ctrl/Cmd + I: italic\n- Ctrl/Cmd + U: underline\n- Toolbar buttons expose pressed state via aria-pressed",
      },
    },
  },
  args: {
    value: "<p>Type rich text here</p>",
  },
} satisfies Meta<typeof RichTextEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
