import { Slot } from '@radix-ui/react-slot';
import React from 'react';
export type TextInputInputProps =
  React.InputHTMLAttributes<HTMLInputElement>;

export interface TextInputRootProps {
  children: React.ReactNode;
}
const TextInputRoot: React.FC<TextInputRootProps> = ({
  children
}) => {
  return (
    <div className="flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 ">
      {children}
    </div>
  );
};
TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: React.ReactNode;
}
const TextInputIcon: React.FC<TextInputIconProps> = ({
  children
}) => {
  return (
    <>
      <Slot className="w-6 h-6 text-gray-400">
        {children}
      </Slot>
    </>
  );
};
TextInputIcon.displayName = 'TextInput.Icon';
const TextInputInput: React.FC<TextInputInputProps> = ({
  ...props
}) => {
  return (
    <input
      className="outline-none bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
};
TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
};
