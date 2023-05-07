import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { StyleInput } from "./styles";
import { FieldError } from "react-hook-form";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  id: string;
  type: string;
  placeholder: string;
}

export const Input = forwardRef(({ label, error, ...rest }: IInput, ref: ForwardedRef<HTMLInputElement>) => (
  <div>
    {label ? <label>{label}</label> : null}
    <StyleInput ref={ref} {...rest} />
    {error ? <p>{error.message}</p> : null}
  </div>
));
