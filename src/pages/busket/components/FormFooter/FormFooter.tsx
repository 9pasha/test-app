import {FC} from "react";
import {LightButton} from "../../../../components/Button/LightButton/LightButton";
import "./styles.scss";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {priceWithTrim} from "../../../../helpers/priceWithTrim";

export const FormFooter: FC = () => {
    const basketProducts = useTypedSelector(state => state.basket.basketItems);

    let price = 0;

    basketProducts.forEach(product => {
        price += product.price * product.amount;
    });

    return (
        <div className="form-footer">
            <div className="form-footer__total">
                <span>Итого: </span>
                <span className="form-footer__price">{priceWithTrim(price)} руб.</span>
            </div>
            <div className="form-footer__btn">
                <LightButton>
                    <span className="form-footer__btn-content">Оформить заказ</span>
                </LightButton>
            </div>
        </div>
    );
}