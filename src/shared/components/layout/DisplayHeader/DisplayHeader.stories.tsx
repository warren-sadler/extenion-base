import { Meta, StoryObj } from "@storybook/react";
import { DisplayHeader as Component } from "./DisplayHeader";

export default {
  title: "shared/components/layout/DisplayHeader",
  component: Component,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Component>;

export const DisplayHeader: StoryObj<typeof Component> = {
  args: {
    title: "Section Header",
  },
};

export const WithSubtitle: StoryObj<typeof Component> = {
  ...DisplayHeader,
  args: {
    ...DisplayHeader.args,
    subtitle: "This is a subtitle",
  },
};
