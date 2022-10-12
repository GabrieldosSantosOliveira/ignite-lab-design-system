import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox';
import { Text } from './Text';
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {}
} as Meta<CheckboxProps>;
export const Default: StoryObj<CheckboxProps> = {};
export const WithText: StoryObj<CheckboxProps> = {
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
