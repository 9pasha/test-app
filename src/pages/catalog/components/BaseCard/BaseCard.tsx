import "./styles.scss";
import {FC} from "react";
import {priceWithTrim} from "../../../../helpers/priceWithTrim";

export interface IBaseCardProp {
    name: string;
    description: string;
    price: number;
    currencyType: string;
}

export const BaseCard: FC<IBaseCardProp> = (
    { name, description, price, currencyType }
) => (
    <div className="base-card">
        <h4 className="base-card__name">{name}</h4>
        <p className="base-card__description">{description}</p>
        <span className="base-card__price">{priceWithTrim(price)} {currencyType}</span>
    </div>
);