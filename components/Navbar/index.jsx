// React/Next Components
import React from 'react';
import Link from 'next/link';

// External Libs
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

// Contexts
import { NavbarContext } from '../../contexts/NavbarContext';

// Hooks
import useTranslation from '../../hooks/useTranslation';

// Contents
import navbarContent from './content';

const Navbar = () => {
  const translate = useTranslation(navbarContent);
  const { isNavbarOpen, setIsNavbarOpen } = React.useContext(NavbarContext);
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
    <nav className="navbar">
      <Link href="/">
        <div className="navbar__logo" />
      </Link>
      <button
        type="button"
        className={`${'navbar__button'}
        ${isNavbarOpen ? 'navbar__button_active' : 'navbar__button_disabled'}`}
        onClick={() => {
          setIsNavbarOpen(!isNavbarOpen);
          handleMenuToggle();
        }}
      />
      <div
        ref={refMenu}
        className={`${'navbar__menu'}
            ${isNavbarOpen ? 'navbar__menu_active' : 'navbar__menu_disabled'}`}
      >
        <Link href="/">
          <a className="menu__item">{translate('about')}</a>
        </Link>
        <Link href="/">
          <a className="menu__item">{translate('articles')}</a>
        </Link>
        <Link href="/">
          <a className="menu__item">{translate('projects')}</a>
        </Link>
        <Link href="/">
          <a className="menu__item">{translate('contact')}</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
