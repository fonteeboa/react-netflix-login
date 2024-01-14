import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importe suas traduções aqui
import enUS from './locales/en';
import ptBR from './locales/pt';
import frFR from './locales/fr';

// Os recursos de tradução
const resources = {
  en: { translation: enUS },
  pt: { translation: ptBR },
  fr: { translation: frFR }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
