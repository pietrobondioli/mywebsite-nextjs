// React/Next Components
import React from 'react';
import Link from 'next/link';

// External Libs
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

// Contexts
import { NavbarContext } from '../../contexts/NavbarContext';
import { ThemeContext } from '../../contexts/ThemeContext';

// Hooks
import useTranslation from '../../hooks/useTranslation';

// Contents
import navbarContent from './content';

// Styles
import styles from '../../styles/components/Navbar.module.scss';

const Navbar = () => {
  const translate = useTranslation(navbarContent);
  const { isNavbarOpen, setIsNavbarOpen } = React.useContext(NavbarContext);
  const { isDarkTheme } = React.useContext(ThemeContext);
  const refMenu = React.useRef(null);
  let targetElement;

  const handleMenuToggle = () => {
    if (isNavbarOpen) {
      enableBodyScroll(targetElement);
    } else {
      disableBodyScroll(targetElement);
    }
  };

  const resetMenuState = () => {
    setIsNavbarOpen(false);
    enableBodyScroll(targetElement);
  };

  React.useEffect(() => {
    targetElement = refMenu.current;
  }, [isNavbarOpen]);

  React.useEffect(() => {
    window.addEventListener('resize', resetMenuState);
    return () => {
      window.removeEventListener('resize', resetMenuState);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isDarkTheme && `${styles.navbar_darkMode}`}`}>
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
          handleMenuToggle();
        }}
      />
      <div
        ref={refMenu}
        className={`${styles.navbar__menu}
            ${isNavbarOpen ? `${styles.navbar__menu_active}` : `${styles.navbar__menu_disabled}`}
            ${isDarkTheme && `${styles.navbar__menu_darkMode}`}`}
      >
        <Link href="/">
          <a className={`${styles.menu__item} ${isDarkTheme && `${styles.menu__item_darkMode}`}`}>
            {translate('about')}
          </a>
        </Link>
        <Link href="/">
          <a className={`${styles.menu__item} ${isDarkTheme && `${styles.menu__item_darkMode}`}`}>
            {translate('articles')}
          </a>
        </Link>
        <Link href="/">
          <a className={`${styles.menu__item} ${isDarkTheme && `${styles.menu__item_darkMode}`}`}>
            {translate('projects')}
          </a>
        </Link>
        <Link href="/">
          <a className={`${styles.menu__item} ${isDarkTheme && `${styles.menu__item_darkMode}`}`}>
            {translate('contact')}
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
