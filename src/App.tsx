import { IntlProvider } from "react-intl";
import enMessages from "@/utils/locales/en.json";
import zhMessages from "@/utils/locales/zh.json";
import Header from "@/components/header";
import { useState } from "react";
const message = {
  en: enMessages,
  zh: zhMessages,
};
const App = () => {
  const [locale, setLocale] = useState("zh");
  const handleLanguage = (newLanguage) => {
    setLocale(newLanguage);
  };
  return (
    <IntlProvider locale={locale} messages={message[locale]}>
      <div className="flex width-full">
        <Header locale={message[locale]} onLanguage={handleLanguage}></Header>
      </div>
    </IntlProvider>
  );
};

export default App;
