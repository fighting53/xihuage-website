import { IntlProvider } from "react-intl";
import enMessages from "@/utils/locales/en.json";
import zhMessages from "@/utils/locales/zh.json";
import frMessages from "@/utils/locales/fr.json";
import esMessages from "@/utils/locales/es.json";
import jpMessages from "@/utils/locales/jp.json";

import Header from "@/components/header";
import Home from "./pages/home";
import Footer from "@/components/footer";
import { useState } from "react";

const message: { [key: string]: Record<string, string> } = {
  en: enMessages,
  zh: zhMessages,
  fr: frMessages,
  es: esMessages,
  jp: jpMessages,
};

const App = () => {
  const [locale, setLocale] = useState<string>("zh");
  const handleLanguage = (newLanguage: string) => {
    setLocale(newLanguage);
  };
  return (
    <IntlProvider locale={locale} messages={message[locale]}>
      <div className="flex width-full flex-col">
        <Header locale={message[locale]} onLanguage={handleLanguage}></Header>
        <Home></Home>
        <Footer locale={message[locale]}></Footer>
      </div>
    </IntlProvider>
  );
};

export default App;
