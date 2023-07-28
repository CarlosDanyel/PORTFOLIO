/* eslint-disable react/prop-types */

import style from "./style.module.scss";

const BtnColor = (props) => {

  return (
    <>
      <button data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600" type={props.type} className={style.learn_more}>{props.btnName}</button>
    </>
  );
};

export default BtnColor;
