import type { Meta, StoryObj } from "@storybook/react";

import { FileUpload } from "../../packages/ui/file-upload";

const meta = {
  title: "Form/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "FileUpload component playground and prop controls." } },
  },
  args: {
    multiple: true,
    helperText: "Accepted: images and PDFs",
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
