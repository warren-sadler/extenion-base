import { Meta, StoryObj } from "@storybook/react";
import { TherifyLogo as Component } from "./TherifyLogo";

export default {
  title: "shared/components/TherifyLogo",
  component: Component,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Component>;

export const TherifyLogo: StoryObj<typeof Component> = {};
