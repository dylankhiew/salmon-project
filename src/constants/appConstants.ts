export const CARD_STACK_CONFIG = {
  MAX_TILT_DEGREES: 6,
  PROFILE_IMAGE_URL: 'https://media.licdn.com/dms/image/C4D03AQG0XccET2WPkQ/profile-displayphoto-shrink_800_800/0/1601386159582?e=1698883200&v=beta&t=7xJyk0kG9xoCcpy79hagwgoGZHYxf9mBkzlG8PfGWro',
};

export const DEFAULT_THEME_CONTEXT: Salmon.ThemeContext = {
  theme: 'light',
  setTheme: (_theme: Salmon.ThemeType) => {},
  hasUserToggle: false,
  setHasUserToggle: (_value: boolean) => {},
}
