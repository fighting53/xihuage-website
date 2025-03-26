import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import Pages from "vite-plugin-pages";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Pages({
      dirs: "src/pages", // 指定页面目录
      extensions: ["tsx"], // 支持的文件扩展名
      importMode: "async", // 按需加载页面组件
    }),
  ],
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
});
