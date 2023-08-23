declare namespace Sushi {
  interface ThemeContext {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
  }

  type ThemeType = 'light' | 'dark';
}