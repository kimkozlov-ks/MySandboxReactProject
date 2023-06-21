import {ButtonHTMLAttributes, FC} from "react";
import {formatClassNames} from "shared/libs/ClassNamesFormatter/formatClassNames";
import css from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string[],
    theme?: string
}

export enum ButtonTheme {
    CLEAR = 'clear',
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        classNames = [],
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={formatClassNames([css.Button, ...classNames, css[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
}
