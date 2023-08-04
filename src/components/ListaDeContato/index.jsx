import Instagram from '../icon/Redes/instagram';
import Linkedin from '../icon/Redes/linkedin';
import Github from '../icon/Redes/Github';

import Email from '../icon/Redes/email';
import Cell from '../icon/Redes/cell';

import style from "./style.module.scss";

import { Link } from "react-router-dom";



const contato = [
    { acs: "Visite o meu linkedin", name: "Linkedin", svg: <Linkedin />, link: "https://www.linkedin.com/in/mano-deyvin-b78534278/" },
    { acs: "Visite o meu instagram", name: "Instagram", svg: <Instagram />, link: "https://www.instagram.com/_danyelzs/" },
    { acs: "Visite o meu github", name: "Github", svg: <Github />, link: "https://github.com/CarlosDanyel" },
    { acs: "Meu numero +55 11 985673241", name: "+55 11 985673241", svg: <Cell />, duration: "400" },
    { acs: "Meu email carlosdanyelsilva27@gmail.com", name: "carlosdanyelsilva27@gmail.com", svg: <Email /> },
];

const ListaDeContato = () => {
    return (
        <ul className={style.listaContato}>
            {contato.map((item, indice) => {
                return (
                    <li key={indice} className={style.contentItem} data-name={item.name}>
                        <Link title={item.acs} to={item.link} >
                            {item.svg}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default ListaDeContato;