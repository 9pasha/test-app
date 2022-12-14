import CatalogItem1 from "../../assets/images/catalog-item-1.png";
import CatalogItem2 from "../../assets/images/catalog-item-2.png";
import CatalogItem3 from "../../assets/images/catalog-item-3.png";
import CatalogItem4 from "../../assets/images/catalog-item-4.png";
import CatalogItem5 from "../../assets/images/catalog-item-5.png";
import CatalogItem6 from "../../assets/images/catalog-item-6.png";
import {IProduct} from "../../models/Product";
import {IAction} from "./index";

const initialCatalogProducts = [
    {
        id: "1a5d01aa-388a-41dd-a740-ae83b0a66fc7",
        image: CatalogItem1,
        name: "Кровать TATRAN",
        description: "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
        price: 120000,
        currencyType: "руб."
    },
    {
        id: "a98210ae-b365-4179-9eca-5bb86f188869",
        image: CatalogItem2,
        name: "Кресло VILORA",
        description: "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
        price: 21000,
        currencyType: "руб."
    },
    {
        id: "ead33336-9ebc-4c1f-854f-2b16bc8ff3f1",
        image: CatalogItem3,
        name: "Стол MENU",
        description: "Европейский дуб - отличается особой прочностью и стабильностью.",
        price: 34000,
        currencyType: "руб."
    },
    {
        id: "09be59c8-44cd-4012-92e1-dc3a02fdea9b",
        image: CatalogItem4,
        name: "Диван ASKESTA",
        description: "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
        price: 68000,
        currencyType: "руб."
    },
    {
        id: "ae3eb05f-69ef-4160-ab4d-cfafca2f99dc",
        image: CatalogItem5,
        name: "Кресло LUNAR",
        description: "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
        price: 40000,
        currencyType: "руб."
    },
    {
        id: "ac5dec3a-8f2c-4db5-be0b-f4bcb5f66469",
        image: CatalogItem6,
        name: "Шкаф Nastan",
        description: "Мебель может быть оснащена разнообразными системами подсветки.",
        price: 80000,
        currencyType: "руб."
    },
];

interface ICatalogState {
    catalogProducts: Array<IProduct>;
}

const initialState: ICatalogState = {
    catalogProducts: initialCatalogProducts,
}

export enum CatalogActionTypes {
    SET_ORDER_OF_PRODUCTS = "SET_ORDER_OF_PRODUCTS",
}

export const catalogReducer = (state = initialState, action: IAction): ICatalogState => {
    switch (action.type) {
        case CatalogActionTypes.SET_ORDER_OF_PRODUCTS:
            let catalogProducts = [...state.catalogProducts];

            if (action.payload === "fromMin") {
                catalogProducts = catalogProducts
                    .sort((a, b) => a.price - b.price);
            } else {
                catalogProducts = catalogProducts
                    .sort((a, b) => b.price - a.price);
            }

            return { ...state, catalogProducts };
        default:
            return state;
    }
}