import Logo from "../../icon/Logo";

import style from "../style.module.scss";

const LogoCarrosel = () => {
    return (
        <div className={style.carousel_slide}>
            <div
                className={style.carousel_image}
                ><Logo/></div>
            </div>
    );
};

export default LogoCarrosel;