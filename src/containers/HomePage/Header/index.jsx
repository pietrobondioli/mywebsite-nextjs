// React/Next Components
import React from 'react';

// Contexts
import { Link as ScrollLink } from 'react-scroll';
import { LocaleContext } from '../../../contexts/LocaleContext';

// Components
import TerminalUnderslash from '../../../components/TerminalUnderslash';
import Section from '../../../components/Section';

// External Libs

// Contents
import headerContent from './content';

// Hooks
import useTranslation from '../../../hooks/useTranslation';

// Styles
import styles from '../../../styles/pages/HomePage/Header.module.scss';

const Header = () => {
  const translate = useTranslation(headerContent);
  const { locale } = React.useContext(LocaleContext);
  const [terminalCommand, setTerminalCommand] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const timeouts = [];

  const clearTimeouts = () => {
    while (timeouts.length) {
      clearTimeout(timeouts.pop());
    }
  };

  const typingAnimation = (phrase) => {
    const letters = phrase.split('');
    setIsTyping(true);

    letters.forEach((letter, index) => {
      timeouts.push(
        setTimeout(() => {
          setTerminalCommand((lastState) => {
            return lastState + letter;
          });
          if (letters.length === index + 1) setIsTyping(false);
        }, 150 * index)
      );
    });
  };

  const callAnimation = () => {
    clearTimeouts();
    setIsTyping(false);
    setTerminalCommand('');
    const phrase = translate('welcomeWebsite');
    timeouts.push(
      setTimeout(() => {
        typingAnimation(phrase);
      }, 3000)
    );
  };

  React.useEffect(() => {
    callAnimation();

    return () => {
      clearTimeouts();
    };
  }, [locale]);

  return (
    <Section>
      <div className={styles.header__content}>
        <div className={styles.content__title}>Pietro Bondioli</div>
        <div className={styles.content__terminal}>
          <div>
            [pietro@pietro-pc <span className={styles.terminal__wd}>{translate('myWebsite')}</span>
            ]$
          </div>
          <div className={styles.terminal__command}>
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
        <div className={styles.arrow__button} />
      </ScrollLink>
    </Section>
  );
};

export default Header;
