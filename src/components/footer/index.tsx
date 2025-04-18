import { Link } from "react-router-dom";
import { Locale, MenuItem } from "../../types";
const Footer = ({ locale }: { locale: Locale }) => {
  const transformData = (data: Record<string, string>): MenuItem[] => {
    return Object.entries(data).map(([key, value], index) => ({
      id: index,
      value,
      url: `/${key}`,
    }));
  };
  const menuList = transformData(locale.footer);

  return (
    <footer className="flex flex-col items-center justify-around  text-black px-[40px] py-[20px] bg-gray-100 ">
      <div className="flex-none py-[20px]">
        <ul className="flex items-center justify-center gap-60 px-[40px] text-3xl">
          {menuList.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>{item.value}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex  py-[20px] gap-[40px]">
        <div>{locale.copyright}</div>
        <div>{locale.address}</div>
        <div>{locale.privacy}</div>
      </div>
    </footer>
  );
};

export default Footer;
