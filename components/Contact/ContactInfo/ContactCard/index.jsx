// React/Next Components
import React from 'react';

// Contexts
import { ThemeContext } from '../../../../contexts/ThemeContext';

// Styles
import styles from '../../../../styles/pages/Contact/ContactCard.module.scss';

const ContactInfo = (props) => {
  const { img, alt, cardColor, children } = props;
  const { isDarkTheme } = React.useContext(ThemeContext);

  return (
    <div className={styles.card}>
      <div className={styles.card__front} style={{ backgroundColor: cardColor }}>
        <img src={img} className={styles.image} alt={alt} />
      </div>
      <div className={isDarkTheme ? styles.card__content_darkMode : styles.card__content}>
        {children}
      </div>
    </div>
  );
};

export default ContactInfo;
