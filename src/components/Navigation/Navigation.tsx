import {FC} from "react";
import "./styles.scss";
import {Link} from "react-router-dom";

export interface INavigationLink {
    id: string;
    icon?: string;
    name?: string;
    link: string;
}

interface INavigationProp {
    items: Array<INavigationLink>;
}

export const Navigation: FC<INavigationProp> = ({ items }) => {
    return (
        <nav className="navigation">
            {
                items.map(({ icon, name, link, id }) => (
                    name ?
                        <Link to={link} key={id}>
                            <span className="navigation__link">
                                {name}
                            </span>
                        </Link> :
                        <Link to={link} key={id}>
                            <span className="navigation__link">
                                <img src={icon} alt="catalog"/>
                            </span>
                        </Link>
                ))
            }
        </nav>
    );
};
