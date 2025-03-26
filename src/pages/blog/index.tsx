const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "如何提升艺术创作效率",
      description: "探索数字工具如何帮助艺术家更高效地完成创作。",
      image: "https://picsum.photos/300/200",
    },
    {
      id: 2,
      title: "设计趋势2025",
      description: "了解未来设计趋势，抓住行业发展的脉搏。",
      image: "https://picsum.photos/300/200",
    },
    {
      id: 3,
      title: "艺术与科技的融合",
      description: "深入探讨艺术与科技如何共同推动创新。",
      image: "https://picsum.photos/300/200",
    },
    {
      id: 4,
      title: "如何打造个人品牌",
      description: "分享艺术家如何通过社交媒体建立个人品牌。",
      image: "https://picsum.photos/300/200",
    },
  ];

  return (
    <div className="p-8 mt-[20px]">
      <h1 className="text-4xl font-bold mb-8 text-center">博客</h1>
      <div className="mt-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-84 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
