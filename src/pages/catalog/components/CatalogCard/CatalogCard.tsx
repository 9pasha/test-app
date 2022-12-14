import {FC} from "react";
import {BaseCard, IBaseCardProp} from "../BaseCard/BaseCard";
import {Card} from "../../../../components/card/Card";

export const CatalogCard: FC<IBaseCardProp> = (
    { name, description, price, currencyType }
) => (
    <Card>
        <BaseCard
            name={name}
            description={description}
            price={price}
            currencyType={currencyType}/>
    </Card>
);