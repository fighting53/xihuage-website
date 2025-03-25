import Logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <header className="flex items-center justify-around  px-[40px] py-[20px] w-screen bg-black ">
      <div className=" flex-none">
        <img src={Logo} alt="xihuage | sigurai logo" />
      </div>

      <div className="flex-none "></div>
    </header>
  );
};

export default Footer;
