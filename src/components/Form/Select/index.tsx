import { StyleSelect } from "./style"
interface ISelectProp{
    value:string
}
export const Select = ({value}: ISelectProp) => {
    return(
        <StyleSelect>
            <option>{value}</option>
        </StyleSelect>
    )
}