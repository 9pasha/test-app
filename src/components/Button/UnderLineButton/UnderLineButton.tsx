import {FC, ReactNode} from "react";
import "./styles.scss";

interface IUnderLineButtonProp {
    children: ReactNode,
}

export const UnderLineButton: FC<IUnderLineButtonProp> = ({ children }) =>
     (<button className="underline-btn">{children}</button>);