import { Slot } from '@radix-ui/react-slot';
import { FC, ReactNode } from 'react';
export interface TextInputIconProps {
  children: ReactNode;
}
export const TextInputIcon: FC<TextInputIconProps> = ({ children }) => {
  return (
    <>
      <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
    </>
  );
};
