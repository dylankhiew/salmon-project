declare namespace Salmon {
  interface ThemeContext {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
  }

  type ThemeType = 'light' | 'dark';
}