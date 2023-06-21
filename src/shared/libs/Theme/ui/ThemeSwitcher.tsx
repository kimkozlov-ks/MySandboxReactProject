import {FC} from "react";
import {formatClassNames} from "shared/libs/ClassNamesFormatter/formatClassNames";
import css from './ThemeSwitcher.module.scss'
import {useTheme} from "shared/libs/Theme";
import DarkMode from "@mui/icons-material/DarkMode";

interface ThemeSwitcherProps {
    classNames?: string[]
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({
    classNames = []
}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button
            className={formatClassNames([css.ThemeSwitcher, ...classNames])}
            onClick={toggleTheme}
        >
            <DarkMode />
        </button>
    );
}
