import { Meta, StoryObj } from "@storybook/react";
import { DirectoryProfile as Component } from "./DirectoryProfile";

export default {
  title: "modules/directories/components/DirectoryProfile",
  component: Component,
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const DirectoryProfile: Story = {};
