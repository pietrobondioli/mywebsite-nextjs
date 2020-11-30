import React from 'react';

// Translations
import useTranslation from '../../hooks/useTranslation';

// Content
import footerContent from './content';

// Contexts
import { ThemeContext } from '../../contexts/ThemeContext';

// Styles
import styles from '../../styles/components/Footer.module.scss';

// Assets
import linkedinImg from '../../public/icons/footer/linkedin-48px.png';
import githubImg from '../../public/icons/footer/black-github-48px.png';
import whiteGithubImg from '../../public/icons/footer/white-github-48px.png';

const Footer = () => {
  const translations = useTranslation(footerContent);
  const { isDarkTheme } = React.useContext(ThemeContext);

  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>
        Pietro Bondioli <span className={styles.footer__text_separator} />{' '}
        {translations('copyright')} &copy; 2019
      </p>
      <div>
        <a href="https://www.github.com/Bondioli-Pietro" target="_blank" rel="noreferrer">
          <img
            src={isDarkTheme ? whiteGithubImg : githubImg}
            className={styles.footer__icon}
            alt="Github"
          />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <img src={linkedinImg} className={styles.footer__icon} alt="Linkedin" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
