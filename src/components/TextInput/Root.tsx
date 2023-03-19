import { FC, ReactNode } from 'react';
export interface TextInputRootProps {
  children: ReactNode;
}
export const TextInputRoot: FC<TextInputRootProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 ">
      {children}
    </div>
  );
};
