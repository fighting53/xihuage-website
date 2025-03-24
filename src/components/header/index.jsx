import ChangeLanguage from "./components/changeLanguage";
import Logo from "../../assets/logo.jpg";

const Header = () => {
  const menuList = ["首页", "关于我们", "加入我们"];

  return (
    <header className="flex items-center justify-around  px-[40px] py-[20px] w-screen bg-black ">
      <div className=" flex-none">
        <img src={Logo} alt="xihuage | sigurai logo" />
      </div>
      <nav className="grow text-white">
        <ul className="flex items-center justify-center gap-60 px-[40px] text-3xl">
          {menuList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
      <div className="flex-none ">
        <ChangeLanguage />
      </div>
    </header>
  );
};

export default Header;
