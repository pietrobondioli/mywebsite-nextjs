import React from 'react';

// Translations
import useTranslation from '../../hooks/useTranslation';

import footerContent from './content';

// Contexts
import { ThemeContext } from '../../contexts/ThemeContext';

// Assets
import linkedinImg from '../../public/icons/linkedin-48px.png';
import githubImg from '../../public/icons/github-48px.png';
import whiteGithubImg from '../../public/icons/white-github-48px.png';

const Footer = () => {
  const translations = useTranslation(footerContent);
  const { isDarkTheme } = React.useContext(ThemeContext);

  return (
    <footer className={`footer ${isDarkTheme && 'footer_darkMode'}`}>
      <p className="footer__text">
        Pietro Bondioli <span className="footer__text_separator" /> {translations('copyright')}{' '}
        &copy; 2019
      </p>
      <div>
        <a href="https://www.github.com/Bondioli-Pietro" target="_blank" rel="noreferrer">
          <img
            src={isDarkTheme ? whiteGithubImg : githubImg}
            className="footer__icon"
            alt="Github"
          />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <img src={linkedinImg} className="footer__icon" alt="Linkedin" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
