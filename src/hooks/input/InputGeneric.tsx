import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

const Input = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return <input {...rest} ref={ref} className={`${className}`} />;
});

// Input.displayName = "Input";
export default Input;
