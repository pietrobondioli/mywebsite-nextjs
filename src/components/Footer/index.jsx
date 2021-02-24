// React/Next Components
import React from 'react';

// Styles
import styles from '../../styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>
        Pietro Bondioli <span className={styles.footer__text_separator} />{' '}
        <a
          className={styles.footer__link}
          href="https://opensource.org/licenses/MIT"
          target="_blank"
          rel="noreferrer"
        >
          Copyright (c) 2021 MIT
        </a>
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
