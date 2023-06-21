import {FC} from "react";
import {formatClassNames} from "shared/libs/ClassNamesFormatter/formatClassNames";
import css from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    classNames?: string[],
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ( {
    to,
    classNames = [],
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
}) => {
    return (
        <Link
            {...otherProps}
            className={formatClassNames([css.AppLink, css[theme], ...classNames])}
            to={to}
        >
            {children}
        </Link>
    );
}
