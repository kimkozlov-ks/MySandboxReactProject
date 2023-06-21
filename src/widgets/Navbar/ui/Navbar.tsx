import {FC} from 'react';
import {formatClassNames} from "shared/libs/ClassNamesFormatter/formatClassNames";
import { AppLink , AppLinkTheme } from 'shared/ui/AppLink';
import css from './Navbar.module.scss'

interface NavbarProps {
    classNames?: string[]
}

export const Navbar: FC<NavbarProps> = ({
    classNames = []
}) => {
    return (
        <div className={formatClassNames([css.Navbar, ...classNames])}>
            <AppLink classNames={[css.linkPadding]} theme={AppLinkTheme.SECONDARY} to='/'>Main</AppLink>
            <AppLink classNames={[css.linkPadding]} to='/about'>About</AppLink>
        </div>
    );
}
