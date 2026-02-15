import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, waitFor, within } from "@storybook/test";

import { RichTextEditor } from "../../packages/ui/rich-text-editor";
import { retry } from "./testUtils";

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
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const editor = await canvas.findByRole("textbox", { name: "Rich text editor" });
  const bold = await canvas.findByRole("button", { name: "Bold" });
  const isMac = /Mac|iPhone|iPad/.test(window.navigator.platform);

  await retry(async () => {
    await userEvent.click(editor);
    await userEvent.keyboard(isMac ? "{Meta>}a{/Meta}" : "{Control>}a{/Control}");
    await userEvent.keyboard(isMac ? "{Meta>}b{/Meta}" : "{Control>}b{/Control}");
    await waitFor(() => expect(bold).toHaveAttribute("aria-pressed", "true"));
  });
};
