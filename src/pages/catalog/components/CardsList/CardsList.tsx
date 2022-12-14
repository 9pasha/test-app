import {CardWithImage} from "../../../../components/card/CardWithImage/CardWithImage";
import {ImageWithActions} from "../ImageWithActions/ImageWithActions";
import {CatalogCard} from "../CatalogCard/CatalogCard";
import {IProduct} from "../../../../models/Product";
import {FC} from "react";
import {CardActionsContainer} from "../CardActionsContainer/CardActionsContainer";

interface ICardsListProp {
    catalogProducts: Array<IProduct>;
}

export const CardsList: FC<ICardsListProp> = ({ catalogProducts }) => {
    return (
        <>
        {
            catalogProducts.map((
                { id, image, name, description, price, currencyType }
            ) => (
                <CardWithImage
                    direction="col"
                    image={
                        <ImageWithActions
                            image={<img src={image} alt={name} style={{width: '100%'}}/>}
                            actions={
                                <CardActionsContainer
                                    product={{ id, name, description, price, currencyType, image }}/>
                        }/>
                    }
                    card={CatalogCard({ name, description, price, currencyType })}
                    key={id}/>
            ))
        }
        </>
    );
}