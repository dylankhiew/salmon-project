declare namespace Salmon {
  interface ThemeContext {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
    hasUserToggle: boolean;
    setHasUserToggle: (value: boolean) => void;
  }

  type ThemeType = 'light' | 'dark';
}