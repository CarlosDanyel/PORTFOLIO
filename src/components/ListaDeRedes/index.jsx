import Instagram from "../icon/Redes/instagram";
import Linkedin from "../icon/Redes/linkedin";
import Git from "../icon/Redes/git";

import { Link } from "react-router-dom";

import style from "./style.module.scss";


const ListaDeRedes = () => {
    const ListaRedes = [
        {nome: "Visite o meu linkedin", rede: <Linkedin />, link: "https://www.linkedin.com/in/carlos-danyel-silva-teixeira-7b2a11210/" },
        {nome: "Visite o meu instagram", rede: <Instagram />, link: "https://www.instagram.com/_danyelzs/" },
        {nome: "Visite o meu github", rede: <Git />, link: "https://github.com/CarlosDanyel" },
    ];

    return (
        <ul className={style.listaRedes}>
            {ListaRedes.map((item, indice) => {
                return (
                    <li key={indice}>
                        <Link to={item.link} title={item.nome}>{item.rede}</Link> 
                    </li>
                );
            })}
        </ul>
    );
};

export default ListaDeRedes;
