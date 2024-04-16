import { Meta, StoryFn } from "@storybook/react";
import { Center as Component } from "./Center";
import { OverlineMedium } from "../../Typography";

export default {
  title: "shared/components/layout/Center",
  component: Component,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Component>;

export const Center: StoryFn = (args) => (
  <Component {...args} sx={{ width: 200, height: 200, gradient: 10, shadow: 1 }}>
    <OverlineMedium variant="overline" sx={{ color: "shades.white" }}>
      I&apos;m centered
    </OverlineMedium>
  </Component>
);
