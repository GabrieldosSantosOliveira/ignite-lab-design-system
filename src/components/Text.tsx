import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import React from 'react';
export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}
export const Text: React.FC<TextProps> = ({
  size = 'md',
  children,
  asChild,
  className,
}) => {
  const Comp = asChild ? Slot : 'span';
  return (
    <Comp
      className={clsx(
        'text-gray-100 fon-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className,
      )}
    >
      {children}
    </Comp>
  );
};
