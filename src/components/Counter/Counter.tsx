import {FC, useState} from "react";
import "./styles.scss";
import LogoTop from "../../assets/icons/arrow-top.svg";

export interface ICounterProp {
    initialValue: number;
    maxValue: number;
    minValue: number;
    onIncrease: (counter: number) => any;
    onReduce: (counter: number) => any;
}

export const Counter: FC<ICounterProp> = (
    { initialValue, maxValue, minValue, onIncrease, onReduce }
) => {
    const [counter, setCounter] = useState(initialValue);

    const increaseCounter = () => {
        const increasedCounter = (counter < maxValue) ? (counter + 1) : counter;

        setCounter(increasedCounter);

        onIncrease(increasedCounter);
    };

    const reduceCounter = () => {
        const reducedCounter = (counter > minValue) ? (counter - 1) : counter;

        setCounter(reducedCounter);

        onReduce(reducedCounter);
    };

    return (
        <div className="counter">
            <div className="counter__inner">
                <span>{counter}</span>
            </div>
            <div className="counter__actions">
                <button className="counter__btn" onClick={increaseCounter}>
                    <img className="counter__btn-icon" src={LogoTop} alt="increase"/>
                </button>
                <button className="counter__btn" onClick={reduceCounter}>
                    <img className="counter__btn-icon" src={LogoTop} alt="reduce"/>
                </button>
            </div>
        </div>
    );
};