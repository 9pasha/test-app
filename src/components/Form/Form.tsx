import {FC, ReactNode} from "react";
import "./styles.scss";

interface IFormProp {
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
}

export const Form: FC<IFormProp> = (
    { header, body, footer }
) => {
    return (
        <div className="form">
            {header && <h3>{header}</h3>}
            {body &&
                <div className="form__body">
                    {body}
                </div>
            }
            {footer &&
                <div className="form__footer">
                    {footer}
                </div>
            }
        </div>
    );
}