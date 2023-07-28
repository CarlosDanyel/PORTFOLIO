import { useState, useEffect} from "react";

import { useTranslation } from "react-i18next";

const ListaDeFrases = () => {

    const {t} = useTranslation();

    const listaDeFrases = 
      [
          t("frase1"),
          t("frase2"),
          t("frase3"),
          t("frase4"),
          t("frase5"),
          t("frase6"),
          t("frase7"),
          t("frase8"),
          t("frase9"),
          t("frase10"),
      ]

    const [fraseIndex, setFraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setFraseIndex((prevIndex) => (prevIndex + 1) % listaDeFrases.length);
        }, 4000);
    
        return () => clearInterval(interval);
      }, [listaDeFrases.length]);

    return (
        <p>{listaDeFrases[fraseIndex]}</p>
    );
};

export default ListaDeFrases;