import { Meta, StoryObj } from "@storybook/react";
import { SectionHeader as Component } from "./SectionHeader";

export default {
  title: "shared/components/layout/SectionHeader",
  component: Component,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const SectionHeader: Story = {
  args: {
    title: "Hello World",
  },
};

export const SectionWithSubtitle: Story = {
  args: {
    title: "Hello World",
    subtitle: "This is a subtitle",
  },
};
