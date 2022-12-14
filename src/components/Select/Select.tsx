import "./styles.scss";
import {FC} from "react";

interface IOption {
    value: string | number;
    name: string;
}

interface ISelectProp {
    options: Array<IOption>;
    onChangeSelect: (value: string | number) => any;
}

export const Select: FC<ISelectProp> = ({ options, onChangeSelect }) => {
    const onChangeSelectHandler = (target: HTMLSelectElement) => {
        onChangeSelect(target.value);
    };

    return (
        <select
            className="select"
            onChange={({ target }) => onChangeSelectHandler(target)}>
            {
                options.map(({ value, name }) => (
                    <option
                        value={value}
                        key={value}>
                        {name}
                    </option>
                ))
            }
        </select>
    );
}