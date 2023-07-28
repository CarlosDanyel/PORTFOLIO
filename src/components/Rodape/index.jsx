import { useTranslation } from "react-i18next";

import style from "./style.module.scss";

const Rodape = () => {

    const {t} = useTranslation();

    return (
        <footer>
        <div className={style.displayFooter}>
          <span >Copyright © 2023 <span className={style.colorTextFooter}>Cdcode.com.</span>{t("text-Rodape1")}</span>
        </div>
      </footer>
    );
};

export default Rodape;