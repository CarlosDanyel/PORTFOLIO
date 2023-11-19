/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import BtnNavbar from "../../BtnNavbar";
import ListaLinksHeader from "../../ListaLinksHeader";

import style from "./style.module.scss";

import { NavLink } from "react-router-dom";

import { Link, animateScroll as scroll } from "react-scroll";

import { useState } from "react";
import Logo from "../../icon/Logo";

import { useTranslation } from "react-i18next";

const Navbar = () => {

  const {t} = useTranslation(); 

  const [active, setMode] = useState(false);

  const activeMode = () => {
    setMode(!active);
  };

  return (
    <>
      <nav className={active ? `${style.navegacao} ${style.active}` : style.navegacao}>
        <div className={style.logo}>
          <Logo />
        </div>
        <ul>
          <li>
            <NavLink
              title="Pagina Home"
              to="/">{t('link-header1')}</NavLink>
          </li>
          <li>
            <Link title="Conheça o meu portfolio"
              to="Portfolio"
              spy={true}
              smooth={true}
              duration={1300}>{t('link-header2')}</Link>
          </li>
          <li>
            <Link
              title="Conheça-me"
              to="Sobre"
              spy={true}
              smooth={true}
              duration={1300}
            >{t('link-header3')}</Link>
          </li>
        </ul>
        <BtnNavbar active={active} onClick={activeMode} />
      </nav>
      <div className={active ? `${style.blur} ${style.active}` : style.blur}>
        <nav className={active ? `${style.navegacaoMenu} ${style.active} ${style.menu}` : style.navegacaoMenu}>
          <BtnNavbar active={active} onClick={activeMode} />
          <ListaLinksHeader
            className={active ? `${style.listNavbar} ${style.active}` : style.listNavbar}
            reactive={activeMode}
          />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
