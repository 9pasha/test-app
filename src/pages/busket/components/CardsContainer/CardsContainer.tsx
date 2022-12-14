import React, {FC} from "react";
import "./styles.scss";
import {CardWithActions} from "../../../../components/card/CardWithActions/CardWithActions";
import {CardWithCounter} from "../../../../components/card/CardWithCounter/CardWithCounter";
import {useWindowSize} from "../../../../hooks/useViewPortResize";
import {ViewPortEnum} from "../../../../enum/viewPort";
import {CardWithImage} from "../../../../components/card/CardWithImage/CardWithImage";
import {Card} from "../../../../components/card/Card";
import {BaseCardMobile} from "../BaseCardMobile/BaseCardMobile";
import {BaseCardTablet} from "../BaseCardTablet/BaseCardTablet";
import {useBasketProductsAdapter} from "../../hooks/useBasketProducts";

interface IImageOfCardProp {
    image: string;
}

interface ICardTabletContainerProp {
    initialValue: number;
    name: string;
    description: string;
    price: number;
    currencyType: string;
}

export const CardContext = React.createContext('');

export const CardsContainer: FC = () => {
    const { width } = useWindowSize();

    const basketProducts = useBasketProductsAdapter();

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

    const ImageOfCard: FC<IImageOfCardProp> = ({ image }) =>
        <img
            src={image}
            style={{marginRight: '1.94rem', width: '10.81rem', height: '10.81rem'}}
            alt="card"/>;

    return (
        <div className="cards-container">
        {
            basketProducts.map((
                { id, name, description, price, currencyType, image, initialValue }
            ) => (
                <CardContext.Provider value={id} key={id}>
                    <div className="cards-container__card">
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
                    </div>
                </CardContext.Provider>
            ))
        }
        </div>
    );
}