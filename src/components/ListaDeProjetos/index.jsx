import projetoPaginaDeVendas from "../../assets/projetoPaginaDeVendas.png"; 

import { useTranslation } from "react-i18next";

import style from "./style.module.scss"

const ListaDeProjetos = () => {
    
    const {t} = useTranslation(); 

    const projetos = [
        {
            nameProjeto: t("name-pjr1"),
            descricao: t("detalhe-pjr1-2"),
            projetoImg: projetoPaginaDeVendas,
            sobreProjeto: t("descricao-pjr1"),
            duration: "100"
        },
        {
            nameProjeto: t("name-pjr2"),
            descricao:  t("detalhe-pjr2-2"),
            textProject:  t("detalhe-Embreve"),
            sobreProjeto: t("descricao-pjr2"),
            duration: "200"
        },
        {
            nameProjeto:  t("name-pjr3"),
            descricao:  t("detalhe-pjr3-2"),
            textProject: t("detalhe-Embreve"),
            sobreProjeto: t("descricao-pjr3"),
            duration: "300"
            
        },
        {
            nameProjeto:  t("name-pjr4"),
            descricao:  t("detalhe-pjr4-2"),
            textProject:  t("detalhe-Embreve"), 
            sobreProjeto: t("descricao-pjr4"),
            duration: "400"
        },
    ];

    return (
        <div className={style.container_display}>
            <ul className={style.ListaProjeto}>
                {projetos.map((item, indice) => {
                    return (
                        <li key={indice}>
                            <div className={style.listTech1}></div>
                            <div className={style.listTech2}></div>
                            <div className={style.img_container} data-img={item.projetoImg}>
                                <div className={`${style.box} ${style.box1}`} 
                                style={{ backgroundImage: `url(${item.projetoImg})` }} >
                                    <span>{item.textProject}</span>
                                </div>
                            </div>
                            <div className={style.expecificaçoes}>
                            <span>{item.nameProjeto}</span>
                            <span>{item.descricao}</span>
                            </div>
                            <p className={style.sobreProjeto}>{item.sobreProjeto}</p>
                            <div className={style.container_btn}>
                            <button>Preview</button>
                            <button>{t("btnText-pjr-1")}</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ListaDeProjetos;