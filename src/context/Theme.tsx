import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const toggleTheme = () => {
    theme.title === 'light' ? setTheme(dark) : setTheme(light);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
