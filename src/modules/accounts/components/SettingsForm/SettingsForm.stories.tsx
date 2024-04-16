import { Meta, StoryObj } from "@storybook/react";
import { SettingsForm as Component } from "./SettingsForm";

export default {
  title: "modules/accounts/components/SettingsForm/SettingsForm",
  component: Component,
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const SettingsForm: Story = {
  args: {
    onSubmit: console.info,
  },
};

export const WithDefaultValues: Story = {
  args: {
    defaultValues: {
      givenName: "John",
      surname: "Doe",
      emailAddress: "john@doe.com",
      state: "Alaska",
      insurance: "I don't have insurance",
      concerns: ["Anxiety", "Depression"],
    },
  },
};
