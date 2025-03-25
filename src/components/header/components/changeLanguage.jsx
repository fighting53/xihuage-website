import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const language = [
    { id: 0, name: "中文", value: "zh" },
    { id: 1, name: "English", value: "en" },
    { id: 2, name: "Français", value: "fr" },
    { id: 3, name: "Español", value: "es" },
  ];

  const { i18n } = useTranslation();

  const changeLang = (event) => {
    const selectedLanguage = event.target.value;
    console.log(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="flex flex-col text-red-500">
      <select className="" onChange={changeLang}>
        {language.map((item) => (
          <option key={item.id} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChangeLanguage;
