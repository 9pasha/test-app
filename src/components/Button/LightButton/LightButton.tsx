import {FC, ReactNode} from "react";
import "./styles.scss";

interface ILightButtonProp {
    children: ReactNode;
}

export const LightButton: FC<ILightButtonProp> = ({ children }) => (
    <button className="light-btn">{children}</button>
)