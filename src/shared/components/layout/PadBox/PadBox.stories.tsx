import { Meta, StoryFn } from "@storybook/react";
import { PadBox as Component } from "./PadBox";

export default {
  title: "shared/components/layout/PadBox",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

export const PadBox: StoryFn<typeof Component> = (args) => {
  return (
    <Component padding={["2rem", "1rem"]} sx={{ bgcolor: "shades.black", color: "shades.white" }} {...args}>
      A test
    </Component>
  );
};
