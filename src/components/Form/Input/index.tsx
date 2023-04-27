import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { StyleInput } from "./styles";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef(
  ({ label, ...rest }: IInput, ref: ForwardedRef<HTMLInputElement>) => (
    <div>
      {label ? <label>{label}</label> : null}
      <StyleInput ref={ref} {...rest} />
    </div>
  )
);
