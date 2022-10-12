import { clsx } from 'clsx';
import React from 'react';
export interface TextInputProps {}
export const TextInput: React.FC<TextInputProps> = () => {
  return <input className={clsx('')} />;
};
