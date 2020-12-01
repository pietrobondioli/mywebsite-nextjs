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
import { ThemeContext } from '../../contexts/ThemeContext';

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
  const { isDarkTheme } = React.useContext(ThemeContext);
  const refMenu = React.useRef(null);
  let targetElement;

  const resetMenuState = () => {
    setIsNavbarOpen(false);
    enableBodyScroll(targetElement);
  };

  React.useEffect(() => {
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
      <button
        type="button"
        className={`${styles.navbar__button}
        ${isNavbarOpen ? `${styles.navbar__button_active}` : `${styles.navbar__button_disabled}`}
        ${
          isDarkTheme &&
          `${
            isNavbarOpen
              ? `${styles.navbar__button_active_darkMode}`
              : `${styles.navbar__button_disabled_darkMode}`
          }`
        }`}
        onClick={() => {
          setIsNavbarOpen(!isNavbarOpen);
        }}
      />
      <div
        ref={refMenu}
        className={`${styles.navbar__menu}
            ${isNavbarOpen ? `${styles.navbar__menu_active}` : `${styles.navbar__menu_disabled}`}
            ${isDarkTheme && `${styles.navbar__menu_darkMode}`}`}
      >
        <ToggleThemeButton />
        {navbarContent.map((item) => {
          translate = useTranslation(item);
          return <NavbarItem itemName={translate('itemName')} itemLink={item.link} />;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
