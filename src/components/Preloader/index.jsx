import {Sugar} from 'react-preloaders';

import style from "./style.module.scss";

// eslint-disable-next-line no-unused-vars, react/prop-types
const Preloader = ({carregando}) => {
    return (
            <Sugar
            className={style.preloader}
            color={'#f7f7f7'}
            background="linear-gradient(180deg, rgba(124,80,255,1) 0%, rgba(124,80,255,1) 14%, rgba(95,55,212,1) 56%)"
            time={2500} 
            customLoading={carregando}
            animation="slide"/>   
    );
};

export default Preloader;