import { Meta, StoryObj } from "@storybook/react";
import { Blob as Component } from "./Blob";

export default {
  title: "shared/components/Blob",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Blob: Story = {};
