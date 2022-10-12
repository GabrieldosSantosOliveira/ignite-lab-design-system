import { Text } from "./Text";
import { Meta, StoryObj } from "@storybook/react";
import { TextProps } from "./Text";
export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Ignite Lab Design System",
  },
} as Meta<TextProps>;
export const Default: StoryObj<TextProps> = {};
export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};
export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};
