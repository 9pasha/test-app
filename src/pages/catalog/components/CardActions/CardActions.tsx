import {FC, ReactNode} from "react";
import "./styles.scss";

interface ICardActionsProp {
    children: ReactNode;
}

export const CardActions: FC<ICardActionsProp> = (
    { children }
) => (
    <div className="card-actions">
        {children}
    </div>
);
