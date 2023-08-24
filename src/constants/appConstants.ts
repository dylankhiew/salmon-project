export const COLOR_CONSTANTS = {
  ACCENT: '#FA8072',
  DARK_SALMON: '#c85a53',
  LIGHT_SALMON: '#ffb592',
  WHITE: '#ffffff',
  OFF_BLACK: '#2C2C2E',
  GRAY: '#3A3A3C',
  LIGHT: {
    BACKGROUND: '#E5E5EA',
    SUBTITLE: '#1C1C1E',
  },
  DARK: {
    BACKGROUND: '#1C1C1E',
    SUBTITLE: '#E5E5EA',
  },
};

export const FONT_CONSTANTS = {
  NOTO_SANS: 'Noto Sans JP',
  PLUS_JAKARTA_SANS: 'Plus Jakarta Sans',

}

export const DEFAULT_THEME_CONTEXT: Salmon.ThemeContext = {
  theme: 'light',
  setTheme: (_theme: Salmon.ThemeType) => {},
  hasUserToggle: false,
  setHasUserToggle: (_value: boolean) => {},
}
