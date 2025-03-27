import ChangeLanguage from "./components/changeLanguage";
import { HeaderProps } from "../../types/header";
import { Link } from "react-router-dom";

const Header: React.FC<HeaderProps> = ({ locale, onLanguage }) => {
  /**
   * 将对象转换为特定格式的数组
   */
  const transformData = (data: Record<string, string>) => {
    return Object.entries(data).map(([key, value], index) => ({
      id: index,
      value,
      url: `/${key}`,
    }));
  };

  const menuList = transformData(locale.nav);
  console.log(menuList, "menuList");

  const handleLanguageChange = (newLanguage: string) => {
    handleLanguage(newLanguage);
  };

  const handleLanguage = (newLanguage: string) => {
    onLanguage(newLanguage);
  };

  return (
    <header className="flex items-center justify-around  px-[40px] py-[20px] bg-black ">
      <div className=" flex-none">
        <img src="/images/logo.jpg" alt="xihuage | sigurai logo" />
      </div>
      <nav className="grow text-white">
        <ul className="flex items-center justify-center gap-60 px-[40px] text-3xl">
          {menuList.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>{item.value}</Link>
            </li>
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
