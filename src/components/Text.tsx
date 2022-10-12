import { clsx } from 'clsx';
import React from 'react';
export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: string;
}
export const Text: React.FC<TextProps> = ({
  size = 'md',
  children
}) => {
  return (
    <span
      className={clsx('text-gray-100 fon-sans', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg'
      })}
    >
      {children}
    </span>
  );
};
