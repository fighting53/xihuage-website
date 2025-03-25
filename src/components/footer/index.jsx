import Logo from "@/assets/logo.jpg";

const Footer = ({ locale }) => {
  console.log(locale, "footer");
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
  const menuList = transformData(locale.footer);

  return (
    <footer className="flex flex-col items-center justify-around  text-white px-[40px] py-[20px] w-screen bg-black ">
      <div className="flex-none ">
        <ul className="flex items-center justify-center gap-60 px-[40px] text-3xl">
          {menuList.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <div>{locale.copyright}</div>
        <div>{locale.address}</div>
        <div>{locale.privacy}</div>
      </div>
    </footer>
  );
};

export default Footer;
