import {FC, ReactNode} from "react";
import "./styles.scss";

export interface ICardProp {
    children: ReactNode;
}

export const Card: FC<ICardProp> = (
    { children }
) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};