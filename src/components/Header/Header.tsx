import {FC, useId} from "react";
import './styles.scss';
import {useWindowSize} from "../../hooks/useViewPortResize";
import {ViewPortEnum} from "../../enum/viewPort";
import {INavigationLink, Navigation} from "../Navigation/Navigation";
import CatalogLogo from "../../assets/icons/catalog.svg";
import BasketLogo from "../../assets/icons/basket.svg";

export const Header: FC = () => {
    const desktopNavigationLinks: Array<INavigationLink> = [
        { id: useId(), name: 'Каталог', link: '/catalog' },
        { id: useId(), name: 'Корзина', link: '/basket' }
    ];

    const mobileNavigationLinks: Array<INavigationLink> = [
        { id: useId(), icon: CatalogLogo, link: '/catalog' },
        { id: useId(), icon: BasketLogo, link: '/basket' }
    ];

    const { width } = useWindowSize();

    return (
        <header className="header">
            <h1 className="header__title">Интерьер.</h1>
            {
                (width < ViewPortEnum.Tablet) ?
                    <Navigation items={mobileNavigationLinks}></Navigation> :
                    <Navigation items={desktopNavigationLinks}></Navigation>
            }
        </header>
    );
};
