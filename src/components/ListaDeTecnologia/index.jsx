import Js from "../icon/Tecnologias/Js";
import Html from "../icon/Tecnologias/Html";
import React from "../icon/Tecnologias/React";
import Sass from "../icon/Tecnologias/Sass";
import TechCss from "../icon/Tecnologias/TechCss";
import TechGit from "../icon/Tecnologias/TechGit";
import Java from "../icon/Tecnologias/Java";
import NodeJS from "../icon/Tecnologias/NodeJS";

import style from "./style.module.scss";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay, } from "swiper";
import MongoDb from "../icon/Tecnologias/MongoDb";

const techData = [
  { name: "JavaScript", svg: <Js /> },
  { name: "React", svg: <React /> },
  { name: "Node Js", svg: <NodeJS /> },
  { name: "MongoDB", svg: <MongoDb /> },
  { name: "Java", svg: <Java /> },
  { name: "Sass/Scss", svg: <Sass /> },
  { name: "Git", svg: <TechGit /> },
  { name: "HTML", svg: <Html /> },
  { name: "CSS", svg: <TechCss /> },
];

const ListaDeTecnologia = () => {

  const renderTechs = () => {
    return techData.map((tech, index) => (
      <SwiperSlide key={index} data-name={tech.name} className={style.tech}>
        {tech.svg}
      </SwiperSlide>
    ));
  };

  return <div className={style.swiperContainer}>
    <Swiper
      slidesPerView={4}
      spaceBetween={25}
      freeMode={true}
      loop={true}
      autoplay={{
        delay: 2800,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Autoplay]}
      breakpoints={{
        1200: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        540: {
          slidesPerView: 3,
        },
        340: {
          slidesPerView: 2,
        },
        140: {
          slidesPerView: 2,
        },
      }}
      className={style.containerStack}>{renderTechs()}
    </Swiper>
  </div>;
};

export default ListaDeTecnologia;
