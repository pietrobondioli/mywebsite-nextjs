// React/Next Components
import React from 'react';

// Contexts
import { NavbarContext } from '@contexts/NavbarContext';

// Style
import styles from '@styles/components/TerminalUnderslash.module.scss';

const TerminalUnderslash = (props) => {
  const { animation } = props;
  const { isNavbarOpen } = React.useContext(NavbarContext);

  return <span className={`${styles.terminal__underslash} ${styles[animation]}`}>_</span>;
};

export default TerminalUnderslash;
