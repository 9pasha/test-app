import {FC} from "react";
import "./styles.scss";
import {priceWithTrim} from "../../../../helpers/priceWithTrim";

interface IBaseCardMobileProp {
    name: string;
    description: string;
    price: number;
    currencyType: string;
}

export const BaseCardMobile: FC<IBaseCardMobileProp> = (
    { name, description, price, currencyType }
) => (
    <div className="mobile-base-card">
        <h4 className="mobile-base-card__name">{name}</h4>
        <p className="mobile-base-card__description">{description}</p>
        <span className="mobile-base-card__price">{priceWithTrim(price)} {currencyType}</span>
    </div>
);
