declare namespace Salmon {
  type ThemeType = 'light' | 'dark';

  interface ThemeContext {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
    hasUserToggle: boolean;
    setHasUserToggle: (value: boolean) => void;
  }

  interface CardContactConfig {
    link: string;
    title: string;
    icon: import('react').ReactNode;
  }
}