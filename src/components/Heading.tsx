import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import React from 'react';
export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}
export const Heading: React.FC<HeadingProps> = ({
  size = 'md',
  children,
  asChild,
  className
}) => {
  const Comp = asChild ? Slot : 'h2';
  return (
    <Comp
      className={clsx(
        'text-gray-100 font-bold fon-sans',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg'
        },
        className
      )}
    >
      {children}
    </Comp>
  );
};
