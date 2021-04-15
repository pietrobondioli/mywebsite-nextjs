// React/Next Components
import React from 'react';
import { useRouter } from 'next/router';

const LocaleContext = React.createContext();

const LocaleContextProvider = ({ children }) => {
  const router = useRouter();
  const { locales, locale, defaultLocale } = router;

  return (
    <LocaleContext.Provider value={{ locales, locale, defaultLocale }}>{children}</LocaleContext.Provider>
  );
};

export { LocaleContext, LocaleContextProvider };
