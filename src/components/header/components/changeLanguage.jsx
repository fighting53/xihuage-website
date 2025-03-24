import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const language = [
    { id: 0, name: "中文", value: "zh" },
    { id: 1, name: "English", value: "en" },
    { id: 2, name: "Français", value: "fr" },
    { id: 3, name: "Español", value: "es" },
  ];

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    console.log(language);
    i18n.changeLanguage(language.target.value); //切换语言
  };

  return (
    <div className="flex flex-col ">
      <select className="text-black" onChange={changeLanguage}>
        {language.map((item) => {
          return (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default ChangeLanguage;
