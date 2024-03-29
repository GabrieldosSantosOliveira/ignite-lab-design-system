/* eslint-disable react/jsx-key */
import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { useForm } from 'react-hook-form';

import { TextInput } from './';
import { TextInputRootProps } from './Root';

const { register } = useForm();

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Enter your email" {...register('email')} />,
    ],
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
} as Meta<TextInputRootProps>;
export const Default: StoryObj<TextInputRootProps> = {};
export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <TextInput.Input placeholder="Enter your email" {...register('email')} />
    ),
  },
};
