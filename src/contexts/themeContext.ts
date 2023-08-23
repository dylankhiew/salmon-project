import { createContext } from 'react';

import { DEFAULT_THEME_CONTEXT } from '../constants/appConstants';

export const ThemeContext = createContext<Sushi.ThemeContext>(DEFAULT_THEME_CONTEXT);