import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {},
  lng: "zh", //默认语言
  fallbackLng: "en", //备选语言
  interpolation: {
    escapeValue: false, //已经处理html转义
  },
  backend: {
    loadPath: "./locales/{{lng}}.json", //翻译文件路径
  },
});

export default i18n;
