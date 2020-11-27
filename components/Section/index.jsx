// React/Next Components
import React from 'react';

// Components
import TerminalUnderslash from '../TerminalUnderslash';

// Contexts
import { ThemeContext } from '../../contexts/ThemeContext';

// Styles
import styles from '../../styles/components/Section/Section.module.scss';

const Section = (props) => {
  const { children } = props;
  const { isDarkTheme } = React.useContext(ThemeContext);

  return (
    <section className={`${styles.section} ${isDarkTheme && `${styles.section_darkMode}`}`}>
      {children}
    </section>
  );
};

export default Section;
