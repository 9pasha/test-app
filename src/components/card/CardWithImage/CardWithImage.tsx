import {FC, ReactNode} from "react";
import "./styles.scss";

interface ICardWithImageProp {
    image: ReactNode;
    card: ReactNode;
    direction: "col" | "row";
}

export const CardWithImage: FC<ICardWithImageProp> = (
    { image, card, direction }
) => {
    const baseClassName = "card-with-image";
    const directionClass = (direction === "row")
        ? `${baseClassName}_row`
        : `${baseClassName}_col`;

    const className = baseClassName + ' ' + directionClass;

    return (
        <div className={className}>
            <div className="card-with-image__image">
                {image}
            </div>
            <div className="card-with-image__card">
                {card}
            </div>
        </div>
    );
};
