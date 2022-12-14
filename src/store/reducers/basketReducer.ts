import {IProduct} from "../../models/Product";
import {IAction} from "./index";

export interface IProductWithCounter extends IProduct {
    amount: number;
}

interface IBasketState {
    basketItems: Array<IProductWithCounter>;
}

const initialState: IBasketState = {
    basketItems: [],
}

export enum BasketActionTypes {
    ADD_PRODUCT_TO_BASKET = "ADD_PRODUCT_TO_BASKET",
    SET_AMOUNT_OF_PRODUCT = "SET_AMOUNT_OF_PRODUCT",
}

export const basketReducer = (state = initialState, action: IAction): IBasketState => {
    switch (action.type) {
        case BasketActionTypes.ADD_PRODUCT_TO_BASKET:
            const isProductAlreadyExists = Boolean(state.basketItems.find(({ id }) => id === action.payload.id));

            if (isProductAlreadyExists) {
                return state;
            }

            return { ...state, basketItems: [...state.basketItems, action.payload] };
        case BasketActionTypes.SET_AMOUNT_OF_PRODUCT:
            const { id: productId, amount } = action.payload;

            let increasedBasketProducts = [...state.basketItems];

            increasedBasketProducts = increasedBasketProducts.map((product) => {
                if (product.id === productId) {
                    return { ...product, amount };
                }

                return product;
            });

            return { ...state, basketItems: increasedBasketProducts };
        default:
            return state;
    }
}