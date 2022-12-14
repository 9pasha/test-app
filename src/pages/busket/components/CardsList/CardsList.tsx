import React, {FC} from "react";
import "./styles.scss";
import {useBasketProductsAdapter} from "../../hooks/useBasketProducts";
import {BasketCardContainer} from "../BasketCardContainer/BasketCardContainer";

export const CardContext = React.createContext('');

export const CardsList: FC = () => {
    const basketProducts = useBasketProductsAdapter();

    return (
        <div className="cards-container">
        {
            basketProducts.map(product => (
                <CardContext.Provider value={product.id} key={product.id}>
                    <div className="cards-container__card">
                        <BasketCardContainer basketProduct={product}/>
                    </div>
                </CardContext.Provider>
            ))
        }
        </div>
    );
}