import {FC} from "react";
import "./styles.scss";
import {priceWithTrim} from "../../../../helpers/priceWithTrim";

interface IBaseCardTabletProp {
    name: string;
    description: string;
    price: number;
    currencyType: string;
}

export const BaseCardTablet: FC<IBaseCardTabletProp> = (
    { name, description, price, currencyType }
) => (
    <div className="base-card-tablet">
        <h4 className="base-card-tablet__name">{name}</h4>
        <p className="base-card-tablet__description">{description}</p>
        <span className="base-card-tablet__price">{priceWithTrim(price)} {currencyType}</span>
    </div>
);
