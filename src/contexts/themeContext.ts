import { createContext } from 'react';

import { DEFAULT_THEME_CONTEXT } from '../constants/appConstants';

export const ThemeContext = createContext<Salmon.ThemeContext>(DEFAULT_THEME_CONTEXT);