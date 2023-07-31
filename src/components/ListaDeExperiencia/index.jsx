import { useTranslation } from "react-i18next";

import style from "./style.module.scss";

const ListaDeExperiencia = () => {
    
    const {t} = useTranslation(); 

    const experiencia = [
        {
            nameEmprego: t("card1-expe"),
            nameCargo: t("card1-expe2"),
            data: "2021 - 2022",
            descricao: t("card1-descricao-expe"),
            duration: "100"
        },
        {
            nameEmprego: t("card2-expe"),
            nameCargo: t("card2-expe2"),
            data: "2022 - 2023",
            descricao:  t("card2-descricao-expe"),
            duration: "200"
        },
        {
            nameEmprego: t("card3-expe"),
            nameCargo: t("card3-expe2"),
            data: t("card3-temp"),
            descricao:  t("card3-descricao-expe"),
            duration: "300"
        },
    ];

    return (
        <div className={style.display_ulEx}>
            <ul className={style.listaExp}>
                {experiencia.map((item, indice) => {
                    return (
                        <li  key={indice}>
                            <span className={style.empresa}>{item.data}</span>
                            <div className={style.textContent}>
                                <h3>{item.nameEmprego}</h3>
                                <h4>{item.nameCargo}</h4>
                            </div>
                            <p>{item.descricao}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ListaDeExperiencia;