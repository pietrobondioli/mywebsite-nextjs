import React from 'react';

const ThemeContext = React.createContext();

const themes = {
  dark: true,
  light: false,
};

const ThemeContextProvider = ({ children }) => {
  let defaultTheme = themes.dark;
  let storedTheme;

  React.useEffect(() => {
    storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      defaultTheme = themes[storedTheme];
    }
  }, []);

  const [isDarkTheme, setIsDarkTheme] = React.useState(defaultTheme);

  React.useEffect(() => {
    setIsDarkTheme(defaultTheme);
  }, [defaultTheme]);

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
    if (isDarkTheme) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
