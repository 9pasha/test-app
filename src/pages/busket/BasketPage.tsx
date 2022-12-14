import React from "react";
import "./styles.scss";
import {ActionsContainer} from "./components/ActionsContainer/ActionsContainer";
import {Form} from "../../components/Form/Form";
import {FormHeader} from "./components/FormHeader/FormHeader";
import {FormBody} from "./components/FormBody/FormBody";
import {FormFooter} from "./components/FormFooter/FormFooter";
import {CardsContainer} from "./components/CardsContainer/CardsContainer";
import {CardsListHeader} from "./components/CardsListHeader/CardsListHeader";
import {ViewPortEnum} from "../../enum/viewPort";
import {useWindowSize} from "../../hooks/useViewPortResize";

export const BasketPage = () => {
    const { width } = useWindowSize();

    return (
        <div className="basket-page">
            <div className="basket-page__cards">
                {
                    (width >= ViewPortEnum.Tablet) && (
                        <div className="basket-page__cards-list-header">
                            <CardsListHeader/>
                        </div>)
                }
                <CardsContainer/>
                <div className="basket-page__actions">
                    <ActionsContainer/>
                </div>
            </div>
            <div className="basket-page__form">
                <Form
                    header={<FormHeader/>}
                    body={<FormBody/>}
                    footer={<FormFooter/>}/>
            </div>
        </div>
    );
}