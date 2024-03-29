import { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';
import { TextProps } from './Text';
export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Ignite Lab Design System',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<TextProps>;
export const Default: StoryObj<TextProps> = {};
export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  },
};
export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
};
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text with p</p>,
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
    asChild: {
      table: { disable: true },
    },
  },
};
