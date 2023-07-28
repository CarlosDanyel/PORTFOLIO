import card1_img from "../../assets/card1.png";
import card2_img from "../../assets/card2.png";
import card3_img from "../../assets/card3.png";


import { useTranslation } from "react-i18next";

import style from "./style.module.scss";

const ListaDeServicos = () => {

    const {t} = useTranslation(); 

    const servicos = [
        {
            nameServico: t("card1-servicos"),
            descricao: t("card1-descricao-servicos"),
            img: card1_img,
            duration: "100"
        },
        {
            nameServico: t("card2-servicos"),
            descricao: t("card2-descricao-servicos"),
            img: card2_img,
            duration: "200"
        },
        {
            nameServico: t("card3-servicos"),
            descricao: t("card3-descricao-servicos"),
            img: card3_img,
            duration: "300"
        },
    ];
    
    return (
       <div className={style.displayContainer}>
            <ul className={style.ListaServicos}>
            {servicos.map((item, indice) => {
                return (
                    <li key={indice}>
                        <div>
                            <img src={item.img} alt="imagem ilustrativa" />
                        </div>
                        <h3>{item.nameServico}</h3>
                        <p> {item.descricao}</p>
                    </li>
                );
            })}
            </ul>
       </div>
    );
};

export default ListaDeServicos;