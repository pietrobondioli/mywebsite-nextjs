// React/Next Components
import React from 'react';

// Contexts
import { Link as ScrollLink } from 'react-scroll';
import { NavbarContext } from '../../../contexts/NavbarContext';
import { ThemeContext } from '../../../contexts/ThemeContext';

// Components
import TerminalUnderslash from '../../TerminalUnderslash';

// External Libs

// Contents
import headerContent from './content';

// Hooks
import useTranslation from '../../../hooks/useTranslation';

// Styles
import styles from '../../../styles/pages/HomePage/Header.module.scss';

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
    <section className={`${styles.header} ${isDarkTheme && `${styles.header_darkMode}`}`}>
      <div className={styles.header__content}>
        <div className={styles.content__title}>Pietro Bondioli</div>
        <div className={styles.content__terminal}>
          <div>
            [pietro@pietro-pc{' '}
            <span
              className={`${styles.terminal__wd} ${
                isDarkTheme && `${styles.terminal__wd_darkMode}`
              }`}
            >
              {translate('myWebsite')}
            </span>
            ]$
          </div>
          <div
            className={`${styles.terminal__command} ${
              isDarkTheme && `${styles.terminal__command_darkMode}`
            }`}
          >
            {terminalCommand}
            <TerminalUnderslash
              animation={
                !isTyping ? `terminal__underslash_active` : `terminal__underslash_disabled`
              }
            />
          </div>
        </div>
      </div>
      <ScrollLink to="presentation" spy={true} smooth={true} className={styles.header__arrow}>
        {/* this is needed because there is an bug that animated itens overlap
            any other component no matter how z-index property is configured */}
        {!isNavbarOpen && (
          <div
            className={`${styles.arrow__button} ${
              isDarkTheme && `${styles.arrow__button_darkMode}`
            }`}
          />
        )}
      </ScrollLink>
    </section>
  );
};

export default Header;
