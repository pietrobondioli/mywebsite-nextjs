// React/Next Components
import React from 'react';

// Translations
import useTranslation from '../../hooks/useTranslation';

// Content
import footerContent from './content';

// Contexts
import { ThemeContext } from '../../contexts/ThemeContext';

// Styles
import styles from '../../styles/components/Footer.module.scss';

const Footer = () => {
  const translate = useTranslation(footerContent);
  const { theme } = React.useContext(ThemeContext);

  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>
        Pietro Bondioli <span className={styles.footer__text_separator} /> {translate('copyright')}{' '}
        &copy; 2019
      </p>
      <div className={styles.footer__icons}>
        <a href="https://www.github.com/Bondioli-Pietro" target="_blank" rel="noreferrer">
          <div className={`${styles.footer__icon} ${styles.github}`} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <div className={`${styles.footer__icon} ${styles.linkedin}`} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
