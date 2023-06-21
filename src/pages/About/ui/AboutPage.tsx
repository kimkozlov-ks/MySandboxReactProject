import React from 'react';
import {useTranslation} from "react-i18next";

function AboutPage() {
    const { t, i18n } = useTranslation();

    return (
        <div>{t("About")}</div>
    );
}

export default AboutPage;
