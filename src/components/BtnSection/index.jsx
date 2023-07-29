/* eslint-disable react/prop-types */

import style from "./style.module.scss";

const BtnColor = (props) => {

  return (
    <>
      <button type="button" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400" className={style.learn_more}>{props.btnName}</button>
    </>
  );
};

export default BtnColor;
