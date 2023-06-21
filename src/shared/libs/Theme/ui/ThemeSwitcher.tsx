import {FC} from "react";
import {formatClassNames} from "shared/libs/ClassNamesFormatter/formatClassNames";
import css from './ThemeSwitcher.module.scss'
import {useTheme} from "shared/libs/Theme";
import DarkMode from "@mui/icons-material/DarkMode";
import {Button, ButtonTheme} from "shared/ui/Button/ui/Button";

interface ThemeSwitcherProps {
    classNames?: string[]
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({
    classNames = []
}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={formatClassNames([css.ThemeSwitcher, ...classNames])}
            onClick={toggleTheme}
        >
            <DarkMode />
        </Button>
    );
}
