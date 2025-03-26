const About = () => {
  return (
    <div className="p-8 flex flex-col items-center text-center">
      <h1 className="text-6xl font-bold mb-10">关于悉画阁</h1>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">公司简介</h2>
        <p className="text-xl leading-relaxed">
          悉画阁是一家致力于推动艺术与科技融合的创新型公司。我们专注于为用户提供高质量的数字艺术解决方案，帮助艺术家和创作者实现他们的梦想。
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">我们的愿景</h2>
        <p className="text-xl leading-relaxed">
          我们的愿景是成为全球领先的数字艺术平台，通过技术赋能艺术创作，让每个人都能轻松表达自己的创意。
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">我们的团队</h2>
        <p className="text-xl leading-relaxed">
          悉画阁拥有一支由艺术家、设计师和技术专家组成的多元化团队。我们共同努力，为用户提供卓越的产品和服务。
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-semibold mb-6">联系我们</h2>
        <p className="text-xl leading-relaxed mb-4">
          如果您有任何问题或建议，请随时联系我们：
        </p>
        <ul className="list-disc list-inside text-xl">
          <li>邮箱：xihuage0827@outlook.com</li>
          <li>电话：+86 123-456-7890</li>
          <li>浙江省杭州市滨江区长河街道滨安路</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
