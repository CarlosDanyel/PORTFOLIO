import Instagram from "../icon/Redes/instagram";
import Linkedin from "../icon/Redes/linkedin";
import Github from "../icon/Redes/Github";

import { Link } from "react-router-dom";

import style from "./style.module.scss";

const ListaDeRedes = () => {
    const ListaRedes = [
        { rede: <Linkedin />, link: "https://www.linkedin.com/in/carlos-danyel-silva-teixeira-7b2a11210/" },
        { rede: <Instagram />, link: "https://www.instagram.com/_danyelzs/" },
        { rede: <Github />, link: "https://github.com/CarlosDanyel" },
    ];

    return (
        <ul className={style.listaRedes}>
            {ListaRedes.map((item, indice) => {
                return (
                    <li key={indice}>
                        <Link to={item.link}>{item.rede}</Link> 
                    </li>
                );
            })}
        </ul>
    );
};

export default ListaDeRedes;
