import "./styles.scss";
import {FC, ReactNode} from "react";

interface IDarkButtonProp {
    children: ReactNode;
}

export const DarkButton: FC<IDarkButtonProp> = ({ children }) => (
    <button className="dark-btn">{children}</button>
)