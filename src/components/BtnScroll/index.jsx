// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import { animateScroll as scroll } from "react-scroll";

import seta from "../../assets/seta.png";

import Style from "./style.module.scss";

const BtnScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 700){ 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
        className={`${Style['scroll_top']} ${isVisible ? Style.visible : Style.hidden}`}
        onClick={()=> {scroll.scrollToTop()}}
    >
        <img src={seta} />
    </button>
  );
};


export default BtnScroll;