
import ListaNoticias from "../../components/ListaNoticias";
import style from "./style.module.scss";

// import { useTranslation } from "react-i18next";

const Blog = () => {

    // const {t} = useTranslation();

    return (
        <>
            <section className={style.gridLayout}>
                <ListaNoticias/>
            </section>
        </>
    );
};

export default Blog;