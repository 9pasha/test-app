import {ViewPortEnum} from "../../../../enum/viewPort";
import {CardWithActions} from "../../../../components/card/CardWithActions/CardWithActions";
import {CardWithCounter} from "../../../../components/card/CardWithCounter/CardWithCounter";
import {Card} from "../../../../components/card/Card";
import {BaseCardMobile} from "../BaseCardMobile/BaseCardMobile";
import {CardWithImage} from "../../../../components/card/CardWithImage/CardWithImage";
import React, {FC} from "react";
import {useWindowSize} from "../../../../hooks/useViewPortResize";
import {BaseCardTablet} from "../BaseCardTablet/BaseCardTablet";
import {IProduct} from "../../../../models/Product";

interface ICardTabletContainerProp {
    initialValue: number;
    name: string;
    description: string;
    price: number;
    currencyType: string;
}

interface IImageOfCardProp {
    image: string;
}

interface IBasketCardContainerProp {
    basketProduct: IProduct & ICardTabletContainerProp;
}

export const BasketCardContainer: FC<IBasketCardContainerProp> = ({ basketProduct }) => {
    const { name, description, price, currencyType, image, initialValue } = basketProduct;

    const { width } = useWindowSize();

    const ImageOfCard: FC<IImageOfCardProp> = ({ image }) =>
        <img
            src={image}
            style={{marginRight: '1.94rem', width: '10.81rem', height: '10.81rem'}}
            alt="card"/>;

    const CardTabletContainer: FC<ICardTabletContainerProp> = (
        { initialValue, name, description, price, currencyType }
    ) => (
        <CardWithActions>
            <CardWithCounter initialValue={initialValue}>
                <Card>
                    <BaseCardTablet
                        name={name}
                        description={description}
                        price={price}
                        currencyType={currencyType}/>
                </Card>
            </CardWithCounter>
        </CardWithActions>
    );

    return (
        <>
        {
            width < ViewPortEnum.Tablet ?
                (<CardWithActions>
                    <CardWithCounter initialValue={initialValue}>
                        <Card>
                            <BaseCardMobile
                                name={name}
                                description={description}
                                price={price}
                                currencyType={currencyType}/>
                        </Card>
                    </CardWithCounter>
                </CardWithActions>) :
                (<CardWithImage
                    direction="row"
                    image={ImageOfCard({ image })}
                    card={
                        <CardTabletContainer
                            initialValue={initialValue}
                            name={name}
                            description={description}
                            price={price}
                            currencyType={currencyType}/>
                    }/>)
        }
        </>
    )
}