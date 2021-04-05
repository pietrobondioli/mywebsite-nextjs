// React/Next Components
import React from 'react';
import { useRouter } from 'next/router';

// Components
import NavbarItem from '../NavbarItem';

// Hooks
import useObjectTranslation from '../../../hooks/useObjectTranslation';

// Contexts
import { LocaleContext } from '../../../contexts/LocaleContext';

// Translations
import queryTranslations from './queryTranslations';

const ChangeLocaleButton = () => {
  const router = useRouter();
  const { locales, locale } = React.useContext(LocaleContext);

  const changeLocale = locales.filter((loc) => {
    return loc !== locale;
  });

  const translateObject = useObjectTranslation(queryTranslations, changeLocale[0]);

  return (
    <NavbarItem
      key="changeLocale"
      itemName={changeLocale}
      itemLink={router.pathname}
      itemQuery={translateObject(router.query)}
      itemLocale={changeLocale[0]}
      itemScroll={false}
    />
  );
};

export default ChangeLocaleButton;
