import Js from "../icon/Tecnologias/Js";
import Sass from "../icon/Tecnologias/Sass";
import Css from "../icon/Tecnologias/css";
import Html from "../icon/Tecnologias/htm";

import style from"./style.module.scss";

const techData = [
  { name: "React", svg: <Js/>,  duration: "100" } ,
  { name: "JavaScript", svg: <Js/> ,  duration: "200" },
  { name: "Sass/Scss", svg: <Sass/>,  duration: "300" },  
  { name: "Git", svg: <Sass/>,  duration: "400" },
  { name: "HTML", svg: <Html/>,  duration: "500" },
  { name: "CSS", svg: <Css/>,  duration: "600" },
];

const ListaDeTecnologia = () => {
  
  const renderTechs = () => {
    return techData.map((tech, index) => (
      <li key={index} data-name={tech.name} className={style.tech}>
        {tech.svg}
      </li>
    ));
  };

  return <ul className={style.containerStack}>{renderTechs()}</ul>;
};

export default ListaDeTecnologia;
