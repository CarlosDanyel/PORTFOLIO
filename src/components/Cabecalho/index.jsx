
import ListaDeIdiomas from "../ListaDeIdiomas";
import ListaDeRedes from "../ListaDeRedes";
import Navbar from "./Navbar";

import style from "./style.module.scss";

const Cabecalho = () => {
  return (
    <>
      <header>
        <div className={style.display_header}>
          <div className={style.containerRedes}>
            <ListaDeRedes />
            <span className={style.titlePage}></span>
            <div>
              <ListaDeIdiomas />
            </div>
          </div>
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Cabecalho;
