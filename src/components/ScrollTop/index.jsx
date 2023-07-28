import { useState, useEffect } from 'react';

import { animateScroll as scroll } from "react-scroll";

import seta from "../../assets/seta.png";

import Style from "./style.module.scss";

const ScrollTop = () => {
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
        title="Subir ao topo"
        className={`${Style['scroll_top']} ${isVisible ? Style.visible : Style.hidden}`}
        onClick={()=> {scroll.scrollToTop()}}
    >
        <img src={seta} alt='Subir ao topo' />
    </button>
  );
};

export default ScrollTop;