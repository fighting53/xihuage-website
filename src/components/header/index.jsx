const Header = () => {
  const menuList = ["首页", "关于我们", "加入我们"];

  return (
    <header className="flex items-center justify-around  px-[40px] py-[20px] w-screen bg-black text-white">
      <div className=" flex-none">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
        />
      </div>
      <nav className="grow">
        <ul className="flex items-center  justify-center  gap-60 px-[40px] text-3xl">
          {menuList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
      <div className="flex-none">切换</div>
    </header>
  );
};

export default Header;
