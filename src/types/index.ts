export interface Locale {
  footer: Record<string, string>;
  copyright: string;
  address: string;
  privacy: string;
}

export interface MenuItem {
  id: number;
  value: string;
  url: string;
}

export interface ChangeLanguageProps {
  onLanguageChange: (newLanguage: string) => void;
}
