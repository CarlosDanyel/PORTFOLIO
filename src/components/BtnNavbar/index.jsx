/* eslint-disable react/prop-types */

import style from "../Cabecalho/Navbar/style.module.scss";

const BtnNavbar = ({ active, onClick }) => {
    return (
      <button
        title="Entra no MenuNavbar"
        onClick={onClick}
        className={active ? `${style.menuNav} ${style.active}` : style.menuNav}
      >
        <span className={style.line}></span>
        <span className={style.line}></span>
      </button>
    );
  };
  
  export default BtnNavbar;