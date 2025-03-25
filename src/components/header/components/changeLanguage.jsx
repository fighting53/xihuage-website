const ChangeLanguage = ({ onLanguageChange }) => {
  const language = [
    { id: 0, name: "中文", value: "zh" },
    { id: 1, name: "English", value: "en" },
    { id: 2, name: "Français", value: "fr" },
    { id: 3, name: "Español", value: "es" },
  ];

  const handleLanguageChange = (newLanguage) => {
    onLanguageChange(newLanguage);
  };

  return (
    <div className="flex flex-col text-red-500">
      <select
        className=""
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
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
