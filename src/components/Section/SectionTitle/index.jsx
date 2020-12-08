// React/Next Components
import React from 'react';

// Components
import TerminalUnderslash from '../../TerminalUnderslash';

// Contexts
import { ThemeContext } from '../../../contexts/ThemeContext';

// Styles
import styles from '../../../styles/components/Section/SectionTitle.module.scss';

const SectionTitle = (props) => {
  const { title } = props;

  return (
    <>
      {title && (
        <div className={styles.section__title}>
          {title} <TerminalUnderslash animation="terminal__underslash_active" />
        </div>
      )}
    </>
  );
};

export default SectionTitle;
