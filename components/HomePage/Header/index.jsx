// React/Next Components
import React from 'react';

// Contexts
import { Link as ScrollLink } from 'react-scroll';
import { NavbarContext } from '../../../contexts/NavbarContext';
import { ThemeContext } from '../../../contexts/ThemeContext';

// External Libs

// Contents
import headerContent from './content';

// Hooks
import useTranslation from '../../../hooks/useTranslation';

const Header = () => {
  const translate = useTranslation(headerContent);
  const { isNavbarOpen } = React.useContext(NavbarContext);
  const { isDarkTheme } = React.useContext(ThemeContext);

  const [terminalCommand, setTerminalCommand] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);

  function typingAnimation(phrase) {
    setIsTyping(true);
    const letters = phrase.split('');
    let i = 0;

    letters.forEach((letter) => {
      setTimeout(() => {
        setTerminalCommand((prevCommand = '') => {
          return prevCommand + letter;
        });
      }, 150 * i);
      i++;
    });
  }

  React.useEffect(() => {
    typingAnimation(translate('welcomeWebsite'));
  }, []);

  React.useEffect(() => {
    if (terminalCommand === translate('welcomeWebsite')) {
      setIsTyping(false);
      setTimeout(() => {
        setTerminalCommand('');
        typingAnimation(translate('welcomeWebsite'));
      }, 7000);
    }
  }, [terminalCommand]);

  return (
    <section className={`header ${isDarkTheme && 'header_darkMode'}`}>
      <div className="header__content">
        <div className="content__title">Pietro Bondioli</div>
        <div className="content__terminal">
          <div>
            [pietro@pietro-pc{' '}
            <span className={`terminal__wd ${isDarkTheme && 'terminal__wd_darkMode'}`}>
              {translate('myWebsite')}
            </span>
            ]$
          </div>
          <div className={`terminal__command ${isDarkTheme && 'terminal__command_darkMode'}`}>
            {terminalCommand}
            {!isNavbarOpen && (
              <span
                className={`terminal__underslash
              ${!isTyping ? 'terminal__underslash_active' : 'terminal__underslash_disabled'}`}
              >
                _
              </span>
            )}
          </div>
        </div>
      </div>
      <ScrollLink to="presentation" spy={true} smooth={true} className="header__arrow">
        {/* this is needed because there is an bug that animated itens overlap
            any other component no matter how z-index property is configured */}
        {!isNavbarOpen && (
          <div className={`arrow__button ${isDarkTheme && 'arrow__button_darkMode'}`} />
        )}
      </ScrollLink>
    </section>
  );
};

export default Header;
