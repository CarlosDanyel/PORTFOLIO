import { useTranslation } from "react-i18next";
import CheckBrasil from "../../assets/checkBrasil.png";
import CheckEua from "../../assets/checkEua.png";
import CheckEsp from "../../assets/espanha.png";

import style from "./style.module.scss";

const langOptions = [
    {
        name: "Portugues",
        value: "pt",
        flag: CheckBrasil,
    },
    {
        name: "English",
        value: "en",
        flag: CheckEua,
    },
    {
      name: "Espanhol",
      value: "esp",
      flag: CheckEsp,
    },
]


const ListaDeIdiomas = () => {

const { i18n} = useTranslation();   

    return (
    <div className={style.idioma}>
      {langOptions.map((lang, key) => {
        return (
          <span key={key}>
            <img
              src={lang.flag}
              alt={lang.name}
              onClick={() => {
                i18n.changeLanguage(lang.value);
              }}
            />
          </span>
        );
      })}
    </div>
    );
};

export default ListaDeIdiomas;