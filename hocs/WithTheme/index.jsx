// React/Next Components
import React from 'react';

// Contexts
import { ThemeContext } from '../../contexts/ThemeContext';

import styles from '../../styles/components/WithTheme.module.scss';

const WithTheme = (props) => {
  const { children } = props;
  const { isDarkTheme } = React.useContext(ThemeContext);

  return (
    <div className={`${styles.theme} ${isDarkTheme && `${styles.theme_darkMode}`}`}>{children}</div>
  );
};

export default WithTheme;
