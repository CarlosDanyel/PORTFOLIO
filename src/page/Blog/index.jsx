
import style from "./style.module.scss";

import { useTranslation } from "react-i18next";

const Blog = () => {

    const {t} = useTranslation();

    return (
        <>
            <section className={style.gridLayout}>
                <p>{t("textBlog")}</p>
                <div className={style.noticias}>
                    <div className={`${style.box} ${style.layout}`}>
                        <div className={style.img_publi}></div>
                    </div>
                    <div className={`${style.box1} ${style.layout}`}>
                        <div className={style.img_publi_novidade}></div>
                    </div>
                    <div className={`${style.box2} ${style.layout}`}>
                        <div className={style.img_publi_novidade}></div>
                    </div>
                    <div className={`${style.box3} ${style.layout}`}>
                        <div className={style.img_publi_novidade}></div>
                    </div>
                    <div className={`${style.box4} ${style.layout}`}>
                        <div className={style.img_publi_novidade}></div>
                    </div>
                    <div className={`${style.box5} ${style.layout}`}>
                        <div className={style.img_publi_antigas}></div>
                        <div className={style.img_publi_antigas}></div>
                        <div className={style.img_publi_antigas}></div>
                    </div>
                    <div className={`${style.box6} ${style.layout}`}>
                        <div className={style.img_publi_antigas}></div>
                        <div className={style.img_publi_antigas}></div>
                        <div className={style.img_publi_antigas}></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;