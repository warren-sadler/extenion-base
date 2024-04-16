import { Meta, StoryObj } from "@storybook/react";
import { HelloWorld as Component } from "./HelloWorld";

const meta: Meta<typeof Component> = {
  title: "shared/components/HelloWorld",
  component: Component,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const HelloWorld: StoryObj<typeof Component> = {};
