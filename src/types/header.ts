/**
 * Header 组件
 */
export interface HeaderProps {
  locale: {
    nav: Record<string, string>;
  };
  onLanguage: (newLanguage: string) => void;
}
