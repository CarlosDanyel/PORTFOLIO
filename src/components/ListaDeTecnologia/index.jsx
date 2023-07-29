import Js from "../icon/Tecnologias/Js";
import Html from "../icon/Tecnologias/Html";
import React from "../icon/Tecnologias/React";
import Sass from "../icon/Tecnologias/Sass";
import TechCss from "../icon/Tecnologias/TechCss";
import TechGit from "../icon/Tecnologias/TechGit";

import style from"./style.module.scss";
  
const techData = [
  { name: "React", svg: <React/>,  duration: "100" } ,
  { name: "JavaScript", svg: <Js/>,  duration: "200" },
  { name: "Sass/Scss", svg: <Sass/>,  duration: "300" },  
  { name: "Git", svg: <TechGit/>,  duration: "400" },
  { name: "HTML", svg: <Html/>,  duration: "500" },
  { name: "CSS", svg: <TechCss/>,  duration: "600" },
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
