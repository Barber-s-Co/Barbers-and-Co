import { StyleInput } from "./styles";

interface IInput {
    id: string;
    type: string;
    placeholder: string;
    label: string;
    err: string;
    register: object;
  }


export const Input = ({ id, type, placeholder, label, err, register }: IInput) => (
    <div>
      
        <StyleInput type={type} id={id} placeholder={placeholder} {...register} />
        <label htmlFor={id}>{label}</label>
      
      
    </div>
  );