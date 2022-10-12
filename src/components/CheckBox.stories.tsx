import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { Text } from './Text';
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {}
} as Meta;
export const Default: StoryObj = {};
export const WithText: StoryObj = {
  decorators: [
    Story => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembre de mim por 30 dias</Text>
        </div>
      );
    }
  ]
};
