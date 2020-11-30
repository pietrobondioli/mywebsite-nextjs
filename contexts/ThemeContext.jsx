import React from 'react';

const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
