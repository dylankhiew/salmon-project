export const CARD_STACK_CONFIG = {
  MAX_TILT_DEGREES: 3,
};

export const DEFAULT_THEME_CONTEXT: Salmon.ThemeContext = {
  theme: 'light',
  setTheme: (_theme: Salmon.ThemeType) => {},
  hasUserToggle: false,
  setHasUserToggle: (_value: boolean) => {},
}
