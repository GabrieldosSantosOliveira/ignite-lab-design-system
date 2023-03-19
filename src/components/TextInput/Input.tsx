import {
  memo,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';
export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;
const TextInputInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputInputProps
> = ({ ...props }, ref) => {
  return (
    <input
      className="outline-none bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
      ref={ref}
    />
  );
};
export const TextInputInput = memo(forwardRef(TextInputInputBase));
