const Home = () => {
  return (
    <div className="home h-full">
      <main className="flex-grow bg-gray-100 p-8  h-full">
        <section className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6">欢迎来到悉画阁</h2>
          <p className="text-xl text-gray-700">
            悉画阁是一家致力于推动艺术与科技融合的创新型公司。我们专注于为用户提供高质量的数字艺术解决方案，帮助艺术家和创作者实现他们的梦想。
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">我们的愿景</h3>
            <p className="text-gray-600">
              成为全球领先的数字艺术平台，通过技术赋能艺术创作，让每个人都能轻松表达自己的创意。
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">我们的团队</h3>
            <p className="text-gray-600">
              我们拥有一支由艺术家、设计师和技术专家组成的多元化团队，为用户提供卓越的产品和服务。
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">联系我们</h3>
            <p className="text-gray-600">
              如果您有任何问题或建议，请随时联系我们。
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
