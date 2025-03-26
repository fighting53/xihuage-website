import React, { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";

// 使用 React.lazy 动态导入页面组件
const Home = lazy(() => import("@/pages/home"));
const Blog = lazy(() => import("@/pages/blog"));
const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const Product = lazy(() => import("@/pages/product"));
const NotFound = lazy(() => import("@/pages/not-found"));
const FriendshipLink = lazy(() => import("@/pages/friendship-link"));

// 路由配置数组
const routes = [
  { path: "/", element: <Navigate to="/home" replace /> }, // 重定向
  { path: "/home", element: <Home /> },
  { path: "/blog", element: <Blog /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/friendship_link", element: <FriendshipLink /> },
  { path: "/product/:id", element: <Product /> },
  { path: "*", element: <NotFound /> },
];

const AppRoutes: React.FC = () => {
  const element = useRoutes(routes);
  // 使用 Suspense 组件包裹路由元素，以便在加载延迟时显示一个占位符
  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
};

export default AppRoutes;
