
import style from "./style.module.scss";

import { useTranslation } from "react-i18next";

const Blog = () => {

    const {t} = useTranslation();

    return (
        <>
            <section className={style.gridLayout}>
                <p>{t("textBlog")}</p>
            </section>
        </>
    );
};

export default Blog;