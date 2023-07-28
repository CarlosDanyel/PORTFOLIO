
import style from "./style.module.scss";

import { useTranslation } from "react-i18next";

const ErrorPage = () => {

    const {t} = useTranslation(); 

    return (
        <section className={style.ErrorPage}>
            <h1>{t("ERROR")}</h1>
        </section>
    );
};

export default ErrorPage;