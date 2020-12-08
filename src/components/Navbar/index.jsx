// React/Next Components
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// External Libs
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

// Components
import ToggleThemeButton from './ToggleThemeButton';
import NavbarItem from './NavbarItem';

// Contexts
import { NavbarContext } from '../../contexts/NavbarContext';
import { LocaleContext } from '../../contexts/LocaleContext';

// Hooks
import useTranslation from '../../hooks/useTranslation';

// Contents
import navbarContent from './content';

// Styles
import styles from '../../styles/components/Navbar/Navbar.module.scss';

const Navbar = () => {
  const router = useRouter();
  let translate;
  const { isNavbarOpen, setIsNavbarOpen } = React.useContext(NavbarContext);
  const { locales, locale } = React.useContext(LocaleContext);
  const refMenu = React.useRef(null);
  const refNavBarFocusItem = React.useRef(null);
  let targetElement;

  const changeLocale = locales.filter((loc) => {
    return loc !== locale;
  });

  const resetMenuState = () => {
    setIsNavbarOpen(false);
    enableBodyScroll(targetElement);
  };

  React.useEffect(() => {
    refNavBarFocusItem.current.focus();
    targetElement = refMenu.current;
    if (!isNavbarOpen) {
      enableBodyScroll(targetElement);
    } else {
      disableBodyScroll(targetElement);
    }
  }, [isNavbarOpen]);

  React.useEffect(() => {
    window.addEventListener('resize', resetMenuState);
    return () => {
      window.removeEventListener('resize', resetMenuState);
    };
  }, []);

  React.useEffect(() => {
    router.events.on('routeChangeStart', resetMenuState);
    return () => {
      router.events.off('routeChangeStart', resetMenuState);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <div className={styles.navbar__logo} />
      </Link>
      {/* this button is needed because in chrome mobile the button 'navbar__button' does not render the background-image change until it loses focus */}
      <button type="button" ref={refNavBarFocusItem} className={styles.navBarFocusItem} />
      <button
        type="button"
        onClick={() => {
          setIsNavbarOpen(!isNavbarOpen);
        }}
        className={`${styles.navbar__button}
        ${isNavbarOpen ? `${styles.navbar__button_active}` : `${styles.navbar__button_disabled}`}`}
      />

      <div
        ref={refMenu}
        className={`${styles.navbar__menu}
            ${isNavbarOpen ? `${styles.navbar__menu_active}` : `${styles.navbar__menu_disabled}`}`}
      >
        <ToggleThemeButton />
        <NavbarItem
          key="changeLocale"
          itemName={changeLocale}
          itemLink={router.pathname}
          itemLocale={`${changeLocale}`}
          itemScroll={false}
        />
        {navbarContent.map((item) => {
          translate = useTranslation(item);
          return (
            <NavbarItem
              key={translate('itemName')}
              itemName={translate('itemName')}
              itemLink={item.link}
            />
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
