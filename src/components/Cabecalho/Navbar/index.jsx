/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import BtnNavbar from "../../BtnNavbar";
import ListaLinksHeader from "../../ListaLinksHeader";

import  style from "./style.module.scss";

import { NavLink } from "react-router-dom";

import { Link, animateScroll as scroll } from "react-scroll";

import { useState } from "react";
import Logo from "../../icon/Logo";

const Navbar = () => {

  const [active, setMode] = useState(false);

  const activeMode = () => {
    setMode(!active);
  };

  const itensLinks = [
    {
      name: "Home", link: "/"
    },
    {
      name_scroll: "Portfolio", link_scroll:"Portfolio"
    },
    {
      name: "Blog", link: "/Blog"
    },
  ];  

  return (
    <>
      <nav  className={active ? `${style.navegacao} ${style.active}` : style.navegacao}>
        <div className={style.logo}>
          <Logo/>
        </div>
        <ul>
          {itensLinks.map((item,index) =>(
            <li key={index}>
              <NavLink to={item.link}>{item.name}</NavLink>
              <Link to= "Portfolio"
              spy={true}  
              smooth={true} 
              duration={1300}
              >{item.name_scroll}</Link>
              
            </li>
          ))}
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
