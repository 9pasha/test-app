import {FC, HTMLInputTypeAttribute} from "react";
import "./styles.scss";

interface IInputProp {
    type: HTMLInputTypeAttribute;
    value: string | number;
}

export const Input: FC<IInputProp> = ({ type, value }) => (
    <input className="input" type={type} defaultValue={value}/>
);