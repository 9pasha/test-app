import {FC} from "react";
import "./styles.scss";
import BasketIcon from "../../assets/icons/basket-icon.svg";
import FavoriteIcon from "../../assets/icons/favorite-icon.svg";
import {CardWithImage} from "../../components/card/CardWithImage/CardWithImage";
import {Card} from "../../components/card/Card";
import {BaseCard, IBaseCardProp} from "./components/BaseCard/BaseCard";
import {ImageWithActions} from "./components/ImageWithActions/ImageWithActions";
import {CardActions} from "./components/CardActions/CardActions";
import {IProduct} from "../../models/Product";
import {BasketActionTypes} from "../../store/reducers/basketReducer";
import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Select} from "../../components/Select/Select";
import {useCatalogFilter} from "./hooks/useCatalogFilter";

export const CatalogPage: FC = () => {
    const catalogItems = useTypedSelector(state => state.catalog.catalogProducts);
    const dispatch = useTypedDispatch();

    const { selectOptions, changeFilter } = useCatalogFilter();

    const CatalogCard: FC<IBaseCardProp> = (
        { name, description, price, currencyType }
    ) => (
        <Card>
            <BaseCard
                name={name}
                description={description}
                price={price}
                currencyType={currencyType}/>
        </Card>
    );

    const CardActionsHandler = (card: IProduct) => {
        const addProductToBasket = () => {
            dispatch({ type: BasketActionTypes.ADD_PRODUCT_TO_BASKET, payload: { ...card, amount: 1 } });
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

    return (
        <div className="catalog-page">
            <div className="catalog-page__filter">
                <Select options={selectOptions} onChangeSelect={changeFilter}/>
            </div>
            <div className="catalog-page__items">
            {
                catalogItems.map((
                    { id, image, name, description, price, currencyType }
                ) => (
                    <CardWithImage
                        direction="col"
                        image={
                            <ImageWithActions
                                image={<img src={image} alt={name} style={{width: '100%'}}/>}
                                actions={CardActionsHandler({ id, name, description, price, currencyType, image })}/>
                        }
                        card={CatalogCard({ name, description, price, currencyType })}
                        key={id}/>
                ))
            }
            </div>
        </div>
    );
}