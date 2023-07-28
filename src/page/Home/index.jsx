/* eslint-disable no-unused-vars */
import BtnColor from "../../components/BtnSection";
import CaroselLogo from "../../components/CaroselLogo";
import ListaDeServicos from "../../components/ListaDeServicos";
import ListaDeProjetos from "../../components/ListaDeProjetos";
import ListaDeTecnologia from "../../components/ListaDeTecnologia/inde";
import ListaDeExperiencia from "../../components/ListaDeExperiencia";
import FormularioContato from "../../components/FormularioContato";
import ListaSobreMim from "../../components/ListaSobreMim";
import ListaDeContato from "../../components/ListaDeContato";

import service from "../../assets/service.png";
import star from "../../assets/star.png";

import style from "./style.module.scss";

import { useTranslation } from "react-i18next";

import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
import ListaDeFrases from "../../components/ListaDeFrases";

const Home = () => {

  const {t} = useTranslation(); 

  return (
    <>
      <main>
        <section name={t( "link-header1")} className={style.Home}>
          <div className={style.home_text}>
            <span data-aos="fade-down" data-aos-duration="1000" data-aos-delay="2600">{t('EntradaText-Home')} </span>
            <h1>
            {t('Titulo-Home')}
            <br/>
            {t('Titulo-Home2')}
            </h1>
           <ListaDeFrases/>
            <NavLink to={"https://github.com/CarlosDanyel"}><button>Github</button></NavLink>
            <Link
            to= {t( "link-header4")}
            spy={true} 
            smooth={true} 
            duration={1000}>
              <div className={style.scrool}>
                <div></div>
              </div>
            </Link>
          </div>
        </section>
        <CaroselLogo />
        <section name={t( "link-header4")} className={style.Servicos}>
          <div className={style.img_service}>
            <img src={service}></img>
          </div>
          <div className={style.display}>
            <div className={style.containerServ}>
              <BtnColor btnName={t("btn-servicos")} />
              <h2 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">{t( "Titulo-Servicos")}</h2>
              <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">{t("descricaoText-Servicos")}</p>
            </div>
          </div>
          <ListaDeServicos/>
        </section>
        <section name={t( "link-header5")} className={style.Tech}>
          <div className={style.displayTech}>
            <h4 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">{t( "titulo-tech")}</h4>
            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">{t("descricao-tech")}</p>
            <ListaDeTecnologia />
          </div>
        </section>
        <section name={t( "link-header2")} className={style.Projeto}>
          <div className={style.projeto_container}>
            <div className={style.display}>
              <div className={style.pjr_contnet}>
                <h4 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">{t("titulo-projeto")}</h4>
                <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">{t("descricao-projeto")}</p>
              </div>
            </div>
          </div>
          <ListaDeProjetos/>
        </section>
        <section name={t( "link-header7")} className={style.Experiencia}>
          <div className={style.img_Exp}>
            <img src={star}></img>
          </div>
          <div className={style.displayEx}>
            <div className={style.containerEx}>
              <BtnColor btnName={t("btn-expe")} />
              <h2 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">{t("Titulo-expe")}</h2>
              <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">{t("descricaoText-expe")}</p>
            </div>
          </div>
          <ListaDeExperiencia/> 
        </section>
        <section name="Sobre" className={style.Sobre}>
          <div className={style.displaySobre}>
            <h5 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">{t("titulo-sobre")}</h5>
            <p className={style.descricao_sobre} data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">{t("descricao-sobre")}</p>
            <div className={style.sobreContainer_info}>
              <ListaSobreMim/>
              <FormularioContato/>
            </div>
          </div>
        </section>
        <section name={t( "link-header8")} className={style.Contato}>
          <div className={style.displayContato}>
            <h6 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">{t("titulo-contato")}</h6>
            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">{t("descricao-contato")}</p>
            <ListaDeContato/> 
          </div>
        </section>
      </main>
      
    </>
  );
};

export default Home;
