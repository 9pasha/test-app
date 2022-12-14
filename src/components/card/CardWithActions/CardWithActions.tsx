import {FC, ReactNode} from "react";
import {UnderLineButton} from "../../Button/UnderLineButton/UnderLineButton";
import "./styles.scss";

interface ICardWithActionsProp {
    children: ReactNode;
}

export const CardWithActions: FC<ICardWithActionsProp> = (
    { children }
) => {
    return (
        <div className="card-with-actions">
            {children}
            <div className="card-with-actions__btn-wrapper">
                <div className="card-with-actions__btn">
                    <UnderLineButton>Избранные</UnderLineButton>
                </div>

                <div className="card-with-actions__btn">
                    <UnderLineButton>Удалить</UnderLineButton>
                </div>
            </div>
        </div>
    );
}