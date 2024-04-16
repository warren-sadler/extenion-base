import { Meta, StoryFn } from "@storybook/react";
import { Split as Component } from "./Split";
import { Center } from "../Center";

export default {
  title: "shared/components/layout/Split",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

const PRIMARY = "primary.main";
const NEUTRAL = "neutral.black.200";

type Story = StoryFn<typeof Component>;

export const Split: Story = (args) => {
  return (
    <Component sx={{ width: "100vw", height: "100vh" }} {...args}>
      <Center sx={{ backgroundColor: PRIMARY }}>1</Center>
      <Center sx={{ backgroundColor: NEUTRAL }}>2</Center>
    </Component>
  );
};

export const WithGutter: Story = (args) => {
  return (
    <Component gutter={2} sx={{ width: "100vw", height: "100vh" }} {...args}>
      <Center sx={{ backgroundColor: PRIMARY }}>1</Center>
      <Center sx={{ backgroundColor: NEUTRAL }}>2</Center>
    </Component>
  );
};

export const ThreeQuarters: Story = (args) => {
  return (
    <Component fraction="3/4" sx={{ width: "100vw", height: "100vh" }} {...args}>
      <Center sx={{ backgroundColor: PRIMARY }}>1</Center>
      <Center sx={{ backgroundColor: NEUTRAL }}>2</Center>
    </Component>
  );
};

export const ResponsiveSplit: Story = (args) => {
  return (
    <Component
      fraction={{
        xs: "1",
        md: "1/3",
        lg: "1/2",
      }}
      sx={{ width: "100vw", height: "100vh" }}
      {...args}
    >
      <Center sx={{ backgroundColor: PRIMARY }}>1</Center>
      <Center
        sx={{
          backgroundColor: NEUTRAL,
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        2
      </Center>
    </Component>
  );
};
