import {FC, ReactNode} from "react";
import "./styles.scss";

interface IImageWithActionsProp {
    image: ReactNode;
    actions: ReactNode;
}

export const ImageWithActions: FC<IImageWithActionsProp> = (
    { image, actions }
) => (
    <div className="card-with-actions">
        <div className="card-with-actions__image">
            {image}
        </div>

        <div className="card-with-actions__actions">
            {actions}
        </div>
    </div>
);