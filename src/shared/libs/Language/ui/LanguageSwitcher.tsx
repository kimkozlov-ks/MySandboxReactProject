import {FC, useState} from "react";
import {formatClassNames} from "shared/libs/ClassNamesFormatter/formatClassNames";
import css from './LanguageSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button";
import LanguageIcon from '@mui/icons-material/Language'

interface LanguageSwitcherProps {
    classNames?: string[]
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
    const {
        classNames = []
    } = props;

    const [lang, setLang] = useState('en');
    const {t, i18n } = useTranslation();

    const switchLang = () => {
        const newLang = lang == 'en' ? 'fr' : 'en';
        setLang(newLang);
        i18n.changeLanguage(newLang);
    }

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={formatClassNames([css.LanguageSwitcher, ...classNames])}
            onClick={switchLang}
        >
            <LanguageIcon/>
        </Button>
    );
}
