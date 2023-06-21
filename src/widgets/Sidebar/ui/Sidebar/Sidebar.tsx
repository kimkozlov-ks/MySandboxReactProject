import {FC, useState} from "react";
import {formatClassNames} from "shared/libs/ClassNamesFormatter/formatClassNames";
import css from './SidebarLayout.module.scss'
import {ThemeSwitcher} from "shared/libs/Theme";

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
            <button onClick={toggle}>{collapsed ? '>>>' : '<<<'}</button>
            <div className={css.switchers}>
                <ThemeSwitcher />
            {/*    <LangSwitcher /> */}
            </div>
        </div>
    );
}
