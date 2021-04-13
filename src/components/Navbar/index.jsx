// React/Next Components
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// External Libs
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

// Styles
import styles from '@styles/components/Navbar/Navbar.module.scss';

// Hooks
import useTranslation from '@hooks/useTranslation';

// Contexts
import { NavbarContext } from '@contexts/NavbarContext';

// Components
import ToggleThemeButton from './ToggleThemeButton';
import ChangeLocaleButton from './ChangeLocaleButton';
import NavbarItem from './NavbarItem';

// Contents
import navbarContent from './content';

const Navbar = () => {
  const router = useRouter();
  let translate;
  const { isNavbarOpen, setIsNavbarOpen } = React.useContext(NavbarContext);
  const refMenu = React.useRef(null);
  const refNavBarFocusItem = React.useRef(null);
  let targetElement;

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
    router.events.on('routeChangeStart', resetMenuState);
    return () => {
      window.removeEventListener('resize', resetMenuState);
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
        <ChangeLocaleButton />
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
