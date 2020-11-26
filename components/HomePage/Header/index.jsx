// React/Next Components
import React from 'react';

// Contexts
import { NavbarContext } from '../../../contexts/NavbarContext';

// Contents
import headerContent from './content';

// Hooks
import useTranslation from '../../../hooks/useTranslation';

const Header = () => {
  const translate = useTranslation(headerContent);
  const { isNavbarOpen } = React.useContext(NavbarContext);

  return (
    <section className="header">
      <div className="header__content">
        <div className="content__title">Pietro Bondioli</div>
        <div className="content__terminal">
          <div>
            [pietro@pietro-pc <span className="terminal__wd">{translate('myWebsite')}</span>
            ]$
          </div>
          <div className="terminal__command">{translate('welcomeWebsite')}</div>
        </div>
      </div>
      <div className="header__arrow">
        {/* this is needed because there is an bug that animated itens overlap
            any other component no matter how z-index property is configured */}
        {!isNavbarOpen && <div className="arrow__button" />}
      </div>
    </section>
  );
};

export default Header;
