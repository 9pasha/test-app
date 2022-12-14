import {useTypedDispatch} from "../../../hooks/useTypedDispatch";
import {CatalogActionTypes} from "../../../store/reducers/catalogReducer";
import {useEffect} from "react";

export const useCatalogFilter = () => {
    const dispatch = useTypedDispatch();

    const selectOptions = [
        { value: "fromMax", name: "Порядок: сперва дороже" },
        { value: "fromMin", name: "Порядок: сперва дешевле" },
    ];

    const changeFilter = (value: any) => {
        dispatch({ type: CatalogActionTypes.SET_ORDER_OF_PRODUCTS, payload: value });
    };

    useEffect(() => {
        dispatch({ type: CatalogActionTypes.SET_ORDER_OF_PRODUCTS, payload: selectOptions[0].value });
    }, []);

    return {
        selectOptions,
        changeFilter
    };
}