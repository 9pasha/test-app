import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {IProductWithCounter} from "../../../store/reducers/basketReducer";

export const useBasketProductsAdapter = () => {
    const basketProducts = useTypedSelector(state => state.basket.basketItems);

    return basketProducts.map((product: IProductWithCounter) => {
        if (product.amount) {
            return { ...product, initialValue: product.amount };
        }

        return { ...product, initialValue: 1 };
    });
}