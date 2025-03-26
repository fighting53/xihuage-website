declare module "*.json" {
  const value: string;
  export default value;
}

declare module "virtual:generated-pages" {
  const routes: Array<{ path: string; element: JSX.Element }>;
  export default routes;
}
