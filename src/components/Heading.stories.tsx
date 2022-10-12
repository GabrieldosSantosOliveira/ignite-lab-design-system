import { Meta, StoryObj } from '@storybook/react';

import { Text } from './Heading';
import { HeadingProps } from './Heading';
export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Ignite Lab Design System',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' }
    }
  }
} as Meta<HeadingProps>;
export const Default: StoryObj<HeadingProps> = {};
export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  }
};
export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  }
};
export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <p>Testando</p>
  },
  argTypes: {
    children: {
      table: { disable: true }
    }
  }
};
