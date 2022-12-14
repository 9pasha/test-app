import {IProduct} from "../../../../models/Product";
import {BasketActionTypes} from "../../../../store/reducers/basketReducer";
import {CardActions} from "../CardActions/CardActions";
import BasketIcon from "../../../../assets/icons/basket-icon.svg";
import FavoriteIcon from "../../../../assets/icons/favorite-icon.svg";
import {useTypedDispatch} from "../../../../hooks/useTypedDispatch";
import {FC} from "react";

interface ICardActionsContainerProp {
    product: IProduct;
}

export const CardActionsContainer: FC<ICardActionsContainerProp> = ({ product }) => {
    const dispatch = useTypedDispatch();
    const initialProductAmount = 1;

    const addProductToBasket = () => {
        dispatch({
            type: BasketActionTypes.ADD_PRODUCT_TO_BASKET,
            payload: { ...product, amount: initialProductAmount }
        });
    };

    return (
        <CardActions>
            <img
                onClick={addProductToBasket}
                src={BasketIcon}
                alt="basket"/>
            <img src={FavoriteIcon} alt="favorite"/>
        </CardActions>);
};