import {Input} from "../../../../components/Input/Input";
import {FC} from "react";
import "./styles.scss";

export const FormBody: FC = () => {
    return (
        <div className="form-body">
            <Input type="text" value="Имя Фамилия"/>
            <Input type="tel" value="+7 904 000 80 80"/>
            <Input type="text" value="Адрес доставки"/>
        </div>
    );
}