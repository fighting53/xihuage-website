import ChangeLanguage from "@/components/header/components/changeLanguage";
import Logo from "@/assets/logo.jpg";

/**
 * Header 组件
 */
const Header = ({ locale, onLanguage }) => {
  /**
   * 将对象转换为特定格式的数组
   */
  const transformData = (data) => {
    return Object.entries(data).map(([key, value], index) => ({
      id: index,
      value,
      url: "/",
    }));
  };

  const menuList = transformData(locale.nav);

  const handleLanguageChange = (newLanguage) => {
    handleLanguage(newLanguage);
  };

  const handleLanguage = (newLanguage) => {
    onLanguage(newLanguage);
  };

  return (
    <header className="flex items-center justify-around  px-[40px] py-[20px] w-screen bg-black ">
      <div className=" flex-none">
        <img src={Logo} alt="xihuage | sigurai logo" />
      </div>
      <nav className="grow text-white">
        <ul className="flex items-center justify-center gap-60 px-[40px] text-3xl">
          {menuList.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </nav>
      <div className="flex-none">
        <ChangeLanguage onLanguageChange={handleLanguageChange} />
      </div>
    </header>
  );
};

export default Header;
