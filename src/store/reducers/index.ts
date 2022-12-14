import {combineReducers} from "@reduxjs/toolkit";
import {basketReducer} from "./basketReducer";
import {catalogReducer} from "./catalogReducer";

export interface IAction {
    type: string;
    payload?: any;
}

export const rootReducer = combineReducers({
    catalog: catalogReducer,
    basket: basketReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
