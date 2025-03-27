import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import i18n from "./utils/i18next";
import { I18nextProvider } from "react-i18next";

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
