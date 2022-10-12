import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import React from 'react';
export interface ButtonProps {
  children: React.ReactNode;
  asChild?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  asChild
}) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={clsx('Button-gray-100 fon-sans')}>
      {children}
    </Comp>
  );
};
