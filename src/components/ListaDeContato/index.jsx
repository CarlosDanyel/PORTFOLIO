
import Instagram from '../icon/Redes/instagram';
import Linkedin from '../icon/Redes/linkedin';
import Github from '../icon/Redes/Github';

import Email from '../icon/Redes/email';
import Cell from '../icon/Redes/cell';

import style from "./style.module.scss";

import { Link } from "react-router-dom";

const contato = [
    {acesibilidade: "Visite o meu linkedin", name: "Linkedin", svg: <Linkedin/>, link: "https://www.linkedin.com/in/mano-deyvin-b78534278/"}, 
    {acesibilidade: "Visite o meu instagram", name: "Instagram", svg: <Instagram/>, link: "https://www.instagram.com/_danyelzs/" },
    {acesibilidade: "Visite o meu github", name: "Github", svg: <Github/>, link: "https://github.com/CarlosDanyel" },
    {acesibilidade: "Meu numero +55 11 985673241", name: "+55 11 985673241", svg: <Cell/>, duration: "400" },
    {acesibilidade: "Meu email carlosdanyelsilva27@gmail.com", name: "carlosdanyelsilva27@gmail.com", svg: <Email/>},
  ];

const ListaDeContato = () => {
    return (
        <ul className={style.listaContato}>
            {contato.map((item, indice) =>{
                return(
                    <Link title={item.acesibilidade} to={item.link} key={indice}>
                        <li className={style.contentItem} data-name={item.name}>
                            {item.svg}
                        </li>
                    </Link>
                );
            })}
        </ul>
    );
};

export default ListaDeContato;