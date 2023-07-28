import SummaryIcon from "../icon/summary";

import { useTranslation } from "react-i18next";

import style from "./style.module.scss";

const ListaSobreMim = () => {

    const {t} = useTranslation(); 

    const sobreMim = [
        {
            nome: t("sobre-text1"),
            descricao: t("sobre-text1-descricao"),
            duration : "100"
        },
        {
            nome: t("sobre-text2"),
            descricao: t("sobre-text2-descricao"),
            duration : "200"
        },
        {
            nome: t("sobre-text3"),
            descricao: t("sobre-text3-descricao"),
            duration : "300"
        },
    ];

    return (
        <div className={style.SobreText}>
            {sobreMim.map((item, indice) => {
                return (
                    <details key={indice}>
                        <summary>{item.nome}<SummaryIcon/></summary>
                        <p className={style.textP}>{item.descricao}</p>
                    </details>
                );
            })}
        </div>
    );
};

export default ListaSobreMim;