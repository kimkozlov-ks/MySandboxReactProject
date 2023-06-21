import {FC, useState} from "react";
import {formatClassNames} from "shared/libs/ClassNamesFormatter/formatClassNames";
import css from './SidebarLayout.module.scss'
import {ThemeSwitcher} from "shared/libs/Theme";
import {Button, ButtonTheme} from "shared/ui/Button";

interface SidebarLayoutProps {
    classNames?: string[]
}

export const Sidebar: FC<SidebarLayoutProps> = ({
    classNames = []
}) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => setCollapsed(prevValue => !prevValue);

    return (
        <div className={formatClassNames([css.SidebarLayout, ...classNames], {[css.collapsed]: collapsed})}>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={toggle}>{collapsed ? '>>>' : '<<<'}</Button>
            <div className={css.switchers}>
                <ThemeSwitcher />
            {/*    <LangSwitcher /> */}
            </div>
        </div>
    );
}
