import LogoCarrosel from "./LogoCarrosel";

import style from "./style.module.scss";

const CaroselLogo = () => {
  return (
    <section className={style.carousel}>
            <div className={style.carousel_wrapper}>
             <LogoCarrosel/>
             <LogoCarrosel/>
             <LogoCarrosel/>
             <LogoCarrosel/>
             <LogoCarrosel/>
             <LogoCarrosel/>
             <LogoCarrosel/>
             <LogoCarrosel/>
             <LogoCarrosel/>
             <LogoCarrosel/>
             <LogoCarrosel/>
             <LogoCarrosel/>
      </div>
    </section>
  );
};

export default CaroselLogo;
