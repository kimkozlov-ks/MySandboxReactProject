import {IThemeContext, LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

export interface IUseThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = (): IUseThemeResult => {
    const {theme, setTheme } = useContext<IThemeContext>(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme,
        toggleTheme
    }
}
