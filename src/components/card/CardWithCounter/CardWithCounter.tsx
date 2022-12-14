import {FC, ReactNode, useContext} from "react";
import { CardContext } from "../../../pages/busket/components/CardsList/CardsList";
import {Counter} from "../../Counter/Counter";
import "./styles.scss";
import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {BasketActionTypes} from "../../../store/reducers/basketReducer";

interface ICardWithCounterProp {
    initialValue: number;
    children: ReactNode;
}

export const CardWithCounter: FC<ICardWithCounterProp> = (
    { children, initialValue }) => {
    const counterMaxValue = 99;
    const counterMinValue = 1;

    const dispatch = useTypedDispatch();
    const cardId = useContext(CardContext);

    const setCardAmount = (amount: number) => {
        dispatch({
            type: BasketActionTypes.SET_AMOUNT_OF_PRODUCT,
            payload: { id: cardId, amount }
        });
    };

    return (
        <div className="card-with-counter">
            <div className="card-with-counter__base-card-wrapper">
                {children}
            </div>

            <div className="card-with-counter__counter">
                <Counter
                    initialValue={initialValue}
                    maxValue={counterMaxValue}
                    minValue={counterMinValue}
                    onReduce={(amount) => setCardAmount(amount)}
                    onIncrease={(amount) => setCardAmount(amount)}/>
            </div>
        </div>
    );
}