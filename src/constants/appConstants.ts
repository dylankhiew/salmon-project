export const COLOR_CONSTANTS = {
  ACCENT: '#FA8072',
  WHITE: '#ffffff',
  LIGHT: {
    BACKGROUND: '#c7c7cc',
    SUBTITLE: '#1C1C1E',
  },
  DARK: {
    BACKGROUND: '#1C1C1E',
    SUBTITLE: '#c7c7cc',
  },
};

export const FONT_CONSTANTS = {
  NOTO_SANS: 'Noto Sans JP',
  PLUS_JAKARTA_SANS: 'Plus Jakarta Sans',

}

export const DEFAULT_THEME_CONTEXT: Sushi.ThemeContext = {
  theme: 'light',
  setTheme: (_theme: Sushi.ThemeType) => {},
}
