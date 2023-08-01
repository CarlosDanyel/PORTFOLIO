import projetoPaginaDeVendas from "../../assets/projetoPaginaDeVendas.png"; 
import projetoNaped from "../../assets/NAPED.png"

import { useTranslation } from "react-i18next";

import style from "./style.module.scss"
import { Link } from "react-router-dom";

const ListaDeProjetos = () => {
    
    const {t} = useTranslation(); 

    const projetos = [
        {
            nameProjeto: t("name-pjr1"),
            descricao: t("detalhe-pjr1-2"),
            projetoImg: projetoPaginaDeVendas,
            sobreProjeto: t("descricao-pjr1"),
            repositorio: "https://github.com/CarlosDanyel/PAGINA-DE-VENDAS-EBOOK",
            preview: "#"
        },
        {
            nameProjeto: t("name-pjr2"),
            descricao:  t("detalhe-pjr2-2"),
            projetoImg: projetoNaped,
            sobreProjeto: t("descricao-pjr2"),
        },
        {
            nameProjeto:  t("name-pjr3"),
            descricao:  t("detalhe-pjr3-2"),
            textProject: t("detalhe-Embreve"),
            sobreProjeto: t("descricao-pjr3"),
            embreve: t("detalhe-Embreve")
        },
        {
            nameProjeto:  t("name-pjr4"),
            descricao:  t("detalhe-pjr4-2"),
            textProject:  t("detalhe-Embreve"), 
            sobreProjeto: t("descricao-pjr4"),
            embreve: t("detalhe-Embreve")
            
        },
    ];

    return (
        <div className={style.container_display}>
            <ul className={style.ListaProjeto}>
                {projetos.map((item, indice) => {
                    return (
                        <li key={indice}>
                            <div className={style.img_container} data-img={item.projetoImg}>
                                <div className={`${style.box} ${style.box1}`} 
                                style={{ backgroundImage: `url(${item.projetoImg})` }} >
                                    <span>{item.embreve}</span>
                                    <div className={style.listTech1}></div>
                                    <div className={style.listTech2}></div>
                                </div>
                            </div>
                            <div className={style.expecificaçoes}>
                            <span>{item.nameProjeto}</span>
                            <span>{item.descricao}</span>
                            </div>
                            <p className={style.sobreProjeto}>{item.sobreProjeto}</p>
                            <div className={style.container_btn}>
                                <Link to={item.preview}>Preview</Link>
                                <Link to={item.repositorio}>{t("btnText-pjr-1")}</Link>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ListaDeProjetos;