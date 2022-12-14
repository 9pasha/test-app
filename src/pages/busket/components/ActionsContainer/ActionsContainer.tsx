import React, {FC} from "react";
import "./styles.scss";
import {LightButton} from "../../../../components/Button/LightButton/LightButton";
import {DarkButton} from "../../../../components/Button/DarkButton/DarkButton";

export const ActionsContainer: FC = () => (
    <div className="actions-container">
        <div className="actions-container__btn">
            <LightButton>
                <span className="actions-container__btn-text">
                    Очистить корзину
                </span>
            </LightButton>
        </div>
        <div className="actions-container__btn">
            <DarkButton>
                <span className="actions-container__btn-text">
                    Продолжить покупки
                </span>
            </DarkButton>
        </div>
    </div>
)