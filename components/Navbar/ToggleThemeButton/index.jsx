import React from 'react';

// Styles
import styles from '../../../styles/components/ToggleThemeButton.module.scss';

import { ThemeContext } from '../../../contexts/ThemeContext';

const ToggleThemeButton = () => {
  const { toggleTheme } = React.useContext(ThemeContext);

  return (
    <div
      className={styles.toggleButton}
      onClick={() => {
        toggleTheme();
      }}
    >
      <input className={styles.toggleButton__input} type="checkbox" name="" id="" />
      <div className={styles.toggleButton__ball} />
      <div className={styles.toggleButton__sun} />
      <div className={styles.toggleButton__moon} />
    </div>
  );
};

export default ToggleThemeButton;
