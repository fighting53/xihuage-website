const Join: React.FC<{
  locale: { join: { title: string; description: string; join_us: string } };
}> = ({ locale }) => {
  return (
    <div className="flex items-center mt-[3.75rem]">
      <div className="w-1/2 text-center">
        <div className="mb-[3.75rem]">
          <h1 className="text-[2.5rem] mb-[.75rem]">{locale.join.title}</h1>
          <p className="text-[4.125rem] font-extrabold">
            {locale.join.description}
          </p>
        </div>

        <a
          className="bg-[#ff6a00] rounded-sm px-[40px] py-[20px] text-white h-[48px] leading-[48px] w-[158px] opacity-[.9] text-[1.5625rem]"
          href="https://xihuage.com"
          target="_blank"
        >
          {locale.join.join_us}
        </a>
      </div>

      <div className="flex-grow">
        <img src="/images/join.png" alt="xihuage | sigurai 加入我们" />
      </div>
    </div>
  );
};
export default Join;
