import ptBrJson from "./translations/ptBr.json";
import enJson from "./translations/en.json";
import espJson from "./translations/esp.json";

import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: ptBrJson
    },
    en: {
      translation: enJson
    },
    esp: {
      translation: espJson
    }
  },
  lng: "pt"
});

export default i18n;
