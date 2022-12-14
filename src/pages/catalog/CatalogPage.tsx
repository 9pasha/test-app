import {FC} from "react";
import "./styles.scss";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Select} from "../../components/Select/Select";
import {useCatalogFilter} from "./hooks/useCatalogFilter";
import {CardsList} from "./components/CardsList/CardsList";

export const CatalogPage: FC = () => {
    const catalogItems = useTypedSelector(state => state.catalog.catalogProducts);

    const { selectOptions, changeFilter } = useCatalogFilter();

    return (
        <div className="catalog-page">
            <div className="catalog-page__filter">
                <Select options={selectOptions} onChangeSelect={changeFilter}/>
            </div>
            <div className="catalog-page__items">
                <CardsList catalogProducts={catalogItems}/>
            </div>
        </div>
    );
}