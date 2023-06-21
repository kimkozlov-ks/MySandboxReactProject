import React from 'react';
import {useTranslation} from "react-i18next";

function MainPage() {
    const { t, i18n } = useTranslation();
    return (
        <div>{t("Main")}</div>
    );
}

export default MainPage;
