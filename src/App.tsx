import { IntlProvider } from "react-intl";
import enMessages from "@/utils/locales/en.json";
import zhMessages from "@/utils/locales/zh.json";
import frMessages from "@/utils/locales/fr.json";
import esMessages from "@/utils/locales/es.json";
import jpMessages from "@/utils/locales/jp.json";
import Header from "./components/header";
// import Home from "./pages/home";
import Footer from "./components/footer";
import AppRoutes from "./routes";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const message: { [key: string]: any | unknown } = {
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
      <Router>
        <div className="flex width-full flex-col min-h-screen">
          <Header locale={message[locale]} onLanguage={handleLanguage} />
          <main className="flex-grow">
            <AppRoutes locale={message[locale]} />
          </main>
          <Footer locale={message[locale]} />
        </div>
      </Router>
    </IntlProvider>
  );
};

export default App;
